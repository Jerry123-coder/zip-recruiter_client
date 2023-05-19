import React, { useState, useEffect } from "react";
import Job from "../../components/Job";
import RecruiterNavBar from "../../components/RecruiterNavBar";
import SideNav from "../../components/SideNav";
import { FaUserEdit, FaUser, FaFilter, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { validateHeaderValue } from "http";
import data from "../../applicantData.json";
import { getId } from "../../services/apiRequests";
import { IApplicants } from "../../interfaces";
import { Console } from "console";
import { contentSecurityPolicy } from "helmet";

const Applicants = () => {
  const [error, setError] = useState<any>("");
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [jobData, setJobData] = useState<IApplicants[]>([]);
  const [jobId, setJobId] = useState("");

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    try {
      const userData = getId("user");
      const id = userData.recruiter_id;
      fetch(`http://localhost:9000/recruiters/applicants/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setJobData(data.job_applications);
        })
        .catch((e) => {
          throw e;
        });
    } catch (e) {}
  };

  const manageStatus = (id: number, status: string) => {
    const userData = getId("user");
    const tokens = getId("tokens");
    // const id = userData.recruiter_id
    const updatedStatus = {
      application_id: id,
      status: status,
    };

    try {
      fetch(`http://localhost:9000/recruiters/manage_applicant`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Basic ${tokens?.accessToken}`,
        },
        body: JSON.stringify(updatedStatus),
      })
        .then((res) => res.json())
        .then((data) => {
          // setJobData(data.job_applications);
          loaddata();
        });
    } catch (e) {
      console.log(e);
    }
  };

  const getfile = async (filetype: string, email: string) => {

    const tokens = getId("tokens"); 
    
    try {
      fetch(
        `http://localhost:9000/recruiters/get_file?email=${email}&filetype=${filetype}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Basic ${tokens?.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.data) window.open(data.data, "_blank");
        });
    } catch (e) {}
  };

  const deleteApplicant = (id: number) => {
    const userData = getId("user");
    const tokens = getId("tokens");
    // const id = userData.recruiter_id
    // const updatedStatus= {
    //   application_id: id,
    //   status: status
    // }

    try {
      fetch(`http://localhost:9000/recruiters/delete_applicant/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Basic ${tokens?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setJobData(data.job_applications);
          // loaddata();
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <SideNav />
      <div className="mainSection">
        <RecruiterNavBar />
        <div className="pageCardsCaption">Quick access</div>

        {/* <div className="optionsBar">
          <div className="addNewUser">
            +<FaUser />
          </div>
          <div className="filterUsers">
            <FaFilter />
          </div>
          <div className="searchBar">
            <FaSearch />
            <input
              className="searchBar-input"
              type="text"
              placeholder="search here"
              // onChange={handleSearch}
              // value={searchInput}
            />
          </div>
        </div> */}
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job Role</th>
              <th>CV</th>
              <th>Cover Letter</th>
              <th>Manage Status</th>
            </tr>
          </thead>
          <React.Fragment>
            <tbody>
              {jobData?.map((value, key) => {
                return (
                  <tr key={value.application_id}>
                    <td>{key}</td>
                    <td>{value.applicant_name}</td>
                    <td>{value.applicant_email}</td>
                    <td>{value.job_title}</td>
                    <td>
                      <span
                        onClick={() => getfile("cv", value.applicant_email)}
                      >
                        {value.cv}
                      </span>
                    </td>
                    <td>
                      {" "}
                      <span
                        onClick={() => getfile("cover", value.applicant_email)}
                      >
                        {value.cover_letter}
                      </span>
                    </td>
                    <td>
                      <div className="td-icons">
                        <div
                          onClick={() => {
                            manageStatus(
                              value.application_id,
                              (value.status = "accepted")
                            );
                          }}
                        >
                          {value.status === "accepted" ? (
                            <div className="td-icon-accept-active">
                              <FiUserCheck />
                            </div>
                          ) : (
                            <div className="td-icon-accept">
                              <FiUserCheck />
                            </div>
                          )}
                        </div>

                        <div
                          onClick={() => {
                            manageStatus(
                              value.application_id,
                              (value.status = "rejected")
                            );
                          }}
                        >
                          {value.status === "rejected" ? (
                            <div className="td-icon-reject-active">
                              <FiUserX />
                            </div>
                          ) : (
                            <div className="td-icon-reject">
                              <FiUserX />
                            </div>
                          )}
                        </div>

                        <div
                          onClick={() => deleteApplicant(value.application_id)}
                        >
                          {value.status === "deleted" ? (
                            <div className="td-icon-delete-active">
                              <MdDelete />
                            </div>
                          ) : (
                            <div className="td-icon-delete">
                              <MdDelete />
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </React.Fragment>
        </table>
      </div>
    </div>
  );
};

export default Applicants;

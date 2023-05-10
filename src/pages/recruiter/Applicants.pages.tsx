import React, { useState } from 'react'
import Job from '../../components/Job'
import RecruiterNavBar from '../../components/RecruiterNavBar'
import SideNav from '../../components/SideNav'
import { FaUserEdit, FaUser, FaFilter, FaSearch } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { FiUserX, FiUserCheck } from 'react-icons/fi'

const Applicants = () => {

  const [error, setError] = useState<any>("");

  const handleSubmit = async(e: any) => {
    e.preventDefault();

  //   const formelements = e.target.elements;
  //   const formvalues = {
  //     email: formHandler(formelements, "email"),
  //     password: formHandler(formelements, "password"),
  //   };

  //   const request = await postData({ url: "user/new_user", body: formvalues });
  //     if (request.success) {
  //       settoken({key:"user", data: request.data})
  //     }
  //     setError(request.message)
  // };
  
  // const [ searchInput, setSearchInput ] = useState<string>('')
  // const handleSearch = (e:any) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  }

  const data = [
    {
      id: 1,
      name: "Akram",
      email: "dela@mail.com",
      job: "web developer",
      cv: " cv2",
      coverLetter: "cover letter1"
      
    },
    {
      id:2,
      name: "Ama",
      email: "dela@mail.com",
      job: "web developer",
      cv: " cv2",
      coverLetter: "cover letter1"
    },
    {
      id:3,
      name: "Michael",
      email: "dela@mail.com",
      job: "web developer",
      cv: " cv2",
      coverLetter: "cover letter1"
    },
    {
      id:4,
      name: "Akose",
      email: "dela@mail.com",
      job: "web developer",
      cv: " cv2",
      coverLetter: "cover letter1"
    },
  ];
  

  return (
    <div>
        <SideNav />
        <div className="mainSection">
        <RecruiterNavBar />
          <div className="pageCardsCaption">
            Quick access
          </div>
       
          <div className="optionsBar">
            <div className="addNewUser">+<FaUser/></div>
            <div className="filterUsers"><FaFilter/></div>
            <div className="searchBar"><FaSearch/>
            <input
                className="searchBar-input"
                type="text"
                placeholder = 'search here'
                // onChange={handleSearch}
                // value={searchInput}
                 />
            </div>
          </div>
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
            <tbody>
              {data.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.job}</td>
                    <td>{value.cv}</td>
                    <td>{value.coverLetter}</td>
                    <td>
                      <div className="td-icons">
                      <div className='td-icon-accept'><FiUserCheck/></div>
                      <div className='td-icon-reject'><FiUserX/></div>
                      <div className='td-icon-delete'><MdDelete/></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          
        </div>
    
  )
}

export default Applicants
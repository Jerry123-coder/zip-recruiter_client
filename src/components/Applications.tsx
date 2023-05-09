import React from "react";
import { FaUserAlt } from "react-icons/fa";

import ButtonIcon from '../assets/recruiter_button_icon.png'

const Job = () => {
  return (
    <div className="jobContainer">
      <div className="recruiterLogo">
        <FaUserAlt />
      </div>
      <div className="jobData">
        <div className="jobTitle">Web Developer</div>
        <div className="organization">Accacia Software Solutions</div>
        <div className="workConditions">
          <div className="locationType">Remote</div>
          <div className="workType">Fulltime</div>
        </div>
      </div>
      <div className="jobDescription">
        <div className="salary">$5,000 - $8,000</div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          corrupti, quasi sapiente magni, quisquam doloremque assumenda
          provident reiciendis impedit cum soluta sed cumque. Ex in
          necessitatibus officia aut reiciendis odio.
        </div>
      </div>
      <div className="applyButton">
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
          <div className="searchButtonText">Apply</div>
      </div>
    </div>
  );
};

export default Job;

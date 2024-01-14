import React from "react";
import "../Styles/Team.css";
import President from "./Images/Team/President.png";
import VPresident from "./Images/Team/VP.png";
import sec1 from "./Images/Team/Secretary.png";
import sec2 from "./Images/Team/Secretary2.png";
import TechVP from "./Images/Team/Tech VC.png";
import TechHead from "./Images/Team/Tech Head.png";
import WebDHead from "./Images/Team/WebD Head.png";
import eventHead from "./Images/Team/Event Head.png";
import eventCoHead from "./Images/Team/Event Co-head.png";
import marketH from "./Images/Team/Marketing Head.png";
import marketH2 from "./Images/Team/Marketing Head2.png";
import prHead from "./Images/Team/PRO Head.png";
import prHead2 from "./Images/Team/PRO co-head.png";
import smHead from "./Images/Team/SM Head.png";
import designHead from "./Images/Team/Design Head.png";
import spHead from "./Images/Team/Sponsor Hea.png";
import spCoHead from "./Images/Team/Sponsor.png";

const Team = () => {
  return (
    <>
      <div className="Title">
        <h1>Our Team</h1>
        <p>We have a dedicated team to manage everything in the club</p>
      </div>

      <div className="core-team">
        <div className="title">Main Leads</div>
        <div className="members">
          <div className="boxes">
            <img src={President} alt="Our President" />
            <h3>Vanshit Gupta</h3>
            <h4>President</h4>
          </div>
          <div className="boxes">
            <img src={VPresident} alt="Our Vice President" />
            <h3>Omveer Panwar</h3>
            <h4>Vice President</h4>
          </div>
          <div className="boxes">
            <img src={sec1} alt="Secretary" />
            <h3>Aman Bansal</h3>
            <h4>Secretary</h4>
          </div>
          <div className="boxes">
            <img src={sec2} alt="Secretary" />
            <h3>Jasmeet Singh</h3>
            <h4>Secretary</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Technical Team</div>
        <div className="members">
          <div className="boxes">
            <img src={TechVP} alt="Our President" />
            <h3>Raman Verma</h3>
            <h4>Technical Vice President</h4>
          </div>
          <div className="boxes">
            <img src={TechHead} alt="Our Vice President" />
            <h3>Piyush Yadav</h3>
            <h4>Technical Head</h4>
          </div>
          <div className="boxes">
            <img src={WebDHead} alt="Secretary" />
            <h3>Shivendra Mishra</h3>
            <h4>Web Development Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Event Management Team</div>
        <div className="members">
          <div className="boxes">
            <img src={eventHead} alt="Our President" />
            <h3>Shruti Mehra</h3>
            <h4>Event Head</h4>
          </div>
          <div className="boxes">
            <img src={eventCoHead} alt="Our Vice President" />
            <h3>Riya Sharad</h3>
            <h4>Event Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Marketing & PR Team</div>
        <div className="members">
          <div className="boxes">
            <img src={marketH} alt="Our President" />
            <h3>Arush</h3>
            <h4>Marketing Head</h4>
          </div>
          <div className="boxes">
            <img src={marketH2} alt="Our Vice President" />
            <h3>Antriksha Nautiyal</h3>
            <h4>Marketing Head</h4>
          </div>
          <div className="boxes">
            <img src={prHead} alt="Secretary" />
            <h3>Tayyaba Fatima</h3>
            <h4>Public Relation Head</h4>
          </div>
          <div className="boxes">
            <img src={prHead2} alt="Secretary" />
            <h3>Amit Sharma</h3>
            <h4>Public Relation Co-Head</h4>
          </div>
        </div>
        </div>

        <div className="core-team">
          <div className="title">Branding & Social Media Team</div>
          <div className="members">
            <div className="boxes">
              <img src={smHead} alt="Our President" />
              <h3>Yash Jain</h3>
              <h4>Social Media Head</h4>
            </div>
            <div className="boxes">
              <img src={designHead} alt="Our Vice President" />
              <h3>Mohit Rawat</h3>
              <h4>Design/Branding Head</h4>
            </div>
          </div>
        </div>

        <div className="core-team">
          <div className="title">Sponsorship Team</div>
          <div className="members">
            <div className="boxes">
              <img src={spHead} alt="Our President" />
              <h3>Anshika Jain</h3>
              <h4>Sponsorship Head</h4>
            </div>
            <div className="boxes">
              <img src={spCoHead} alt="Our Vice President" />
              <h3>Himanshu Verma </h3>
              <h4>Sponsorship Co-Head</h4>
            </div>
          </div>
      </div>

      <div className="outro">
      </div>
    </>
  );
};

export default Team;

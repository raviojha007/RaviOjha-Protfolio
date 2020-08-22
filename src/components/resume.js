import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="animated fadeInDownX delay-1s">
            <div style={{ textAlign: "center" }}>
              <img
                src={process.env.PUBLIC_URL + "/RaviOjha.jpg"}
                alt="avatar"
                alt="avatar"
                style={{ height: "400px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Ravi Kumar Ojha</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hey i am Ravi Kumar Ojha. I have completed my b.e in 2018 and have
              done 8 month training in react. Js, html5, css3, and javascript in
              hyderabad at Naresh It institute. I am also having some hands on
              experience in react native also. I can develop a frontend code for
              any project very efficiently and have good knowledge in ui
              development and design also having a good experience in photoshop.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p> Baradari chauraha,Morar, Gwalior(M.P) </p>
            <h5>Mobile</h5>
            <p>7389787945</p>
            <h5>Email</h5>
            <p>raviojha477@gmail.com</p>
            <h5>Web</h5>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell
            className="resume-right-col animated fadeInRight delay-1s"
            col={8}
          >
            <h2>Education</h2>

            <Education
              startYear={2013}
              endYear={2018}
              schoolName="Vikrant Institute of Technology and Management , Gwalior "
              schoolDescription="The institute offers specialized university level programs of formal education with a well oriented approach to institution resourcing that fully recognizes the public and private sector and provide the learner with multiple career options. Beyond gaining specialized knowledge in the chosen field, students will also develop habit of learning continuously and independently. Graduates of the institute will be professionally equipped to respond confidently in the field for adapting to the changes and managing them."
              branch="B.E. in Computer Science with CGPA 6.45"
            />
            <Button className="raised colored">
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href={process.env.PUBLIC_URL + "/RaviKumarOjha.pdf"}
                download="RaviOjha.pdf"
              >
                Resume
              </a>
            </Button>

            <Education
              startYear={2012}
              endYear={2013}
              schoolName="Vidhya NiketanH.S School,Gwalior (12th) "
              schoolDescription=""
            />

            <Education
              startYear={2010}
              endYear={2011}
              schoolName="K.G Children H.S School, Gwalior (10th)  "
              schoolDescription=""
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName=""
              jobDescription="Hey i am Ravi Kumar Ojha. I have completed my b.e in 2018 and have done 8 month training in react. Js, html5, css3, and javascript in hyderabad at Naresh It institute. I am also having some hands on experience in react native also. I can develop a frontend code for any project very efficiently and have good knowledge in ui development and design also !."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="JQuery" progress={50} />
            <Skills skill="HTML5/CSS3" progress={95} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={90} />
            <Skills skill="Angular8" progress={60} />
            <Skills skill="BootStrap 4" progress={80} />
            <Skills skill="SQL" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

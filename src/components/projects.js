import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png) center / cover",
              }}
            >
              Techno_Portal{" "}
            </CardTitle>
            <CardText>TypingTester_App</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button className="bnt" colored>
                <a
                  href="https://raviojha007.github.io/Techno-Portal/."
                  target="_blank"
                >
                  {" "}
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png) center / cover",
              }}
            >
              Techno_Portal{" "}
            </CardTitle>
            <CardText>TypingTester_App</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button className="bnt" colored>
                <a
                  href="https://raviojha007.github.io/Techno-Portal/."
                  target="_blank"
                >
                  {" "}
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png) center / cover",
              }}
            >
              Techno_Portal{" "}
            </CardTitle>
            <CardText>TypingTester_App</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button className="bnt" colored>
                <a
                  href="https://raviojha007.github.io/Techno-Portal/."
                  target="_blank"
                >
                  {" "}
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png) center / cover",
                }}
              >
                Techno_Portal{" "}
              </CardTitle>
              <CardText>TypingTester_App</CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/raviojha007/TypingTester_App"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </Button>
                <Button className="bnt" colored>
                  <a
                    href="https://raviojha007.github.io/TypingTester_App/."
                    target="_blank"
                  >
                    {" "}
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png) center / cover",
                }}
              >
                BookStore_App{" "}
              </CardTitle>
              <CardText>BookStore_App</CardText>
              <CardActions border>
                <Button colored>
                  {" "}
                  <a href="https://github.com/raviojha007/BookStore">GitHub</a>
                </Button>
                <Button className="bnt" colored>
                  <a href="" target="_blank">
                    {" "}
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png) center / cover",
                }}
              >
                {" "}
              </CardTitle>
              <CardText>TypingTester_App</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button className="bnt" colored>
                  <a
                    href="https://raviojha007.github.io/Techno-Portal/."
                    target="_blank"
                  >
                    {" "}
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
            // style={{
            //   color: "black",
            //   height: "176px",
            //   backgroundImage: `url("/Raviojha.jpg")`,
            //   backgroundSize: "200px",
            //   backgroundRepeat: "no-repeat",
            // }}
            >
              <img
                style={{
                  color: "black",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={process.env.PUBLIC_URL + "/admin-Dashboard.PNG"}
              />
            </CardTitle>
            <CardText>Admin-Dashboard</CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/raviojha007/Admin_Dashboard"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button className="bnt" colored>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://raviojha007.github.io/Admin_Dashboard/"
                  target="_blank"
                >
                  {" "}
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle>
              <img
                style={{
                  color: "black",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={process.env.PUBLIC_URL + "/Techno-Portal.PNG"}
              />
            </CardTitle>
            <CardText>Techno-Portal UI Interface</CardText>
            <CardActions border>
              <Button colored>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/raviojha007/Techno-Portal"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button className="bnt" colored>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://raviojha007.github.io/Techno-Portal/."
                  target="_blank"
                >
                  {" "}
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="tab">
        <Tabs
          className="__tab1"
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Node</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Html/Css</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

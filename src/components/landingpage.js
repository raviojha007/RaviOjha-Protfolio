import React, { Component } from 'react';
//import logo from './RaviOjha.jpg';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto',height:'100%'}}>
        <Grid className="landing-grid ">
          <Cell col={12} className="animated zoomIn">
           

            <div className="banner-text">
              <h1>Front-End Developer</h1>

            <hr/>

          <p>HTML5/CSS3 | Bootstrap4 | JavaScript |JQuery | React | NodeJS | Express | Angular8 </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/raviojha007" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

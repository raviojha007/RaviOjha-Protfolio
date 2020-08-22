import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid animated rotateInDownLeft delay-1s	">
          <Cell col={6}>
            <h2>Ravi Kumar Ojha</h2>
            <img
              src={process.env.PUBLIC_URL+"/RaviOjha.jpg"} alt="avatar"
              style={{height: '300px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>To obtained job as a software engineer in IT Industry where I utilize my technical skills and contribute to the  growth of the company as well as help in building my professional career. </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    7389787945
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    7389787945
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  Raviojha477@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    
                   <i className="fa fa-instagram" aria-hidden="true"/>
                   iamraviojha007
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

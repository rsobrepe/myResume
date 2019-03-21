import React, { Component } from 'react';
import { Container, Col, Row, Image, Popover, OverlayTrigger, Card} from 'react-bootstrap';
import './App.css';

class App extends Component {
 
 
  render() {

    const popoverCa = (
      <Popover id="popover-ca">
        <Card>
          <Card.Img variant="top" src="assets/ca_thumb.jpg" />
          <Card.Body>
            <Card.Text>
              <a href="https://www.google.com/maps?q=cardinal+ambrozic+catholic+secondary+school+address&rlz=1C1CHBF_enCA774CA774&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi59PiIupPhAhUHM6wKHcgHBkwQ_AUIDigB" rel="noopener noreferrer" target="_blank">
                10 Castle Oaks Crossing, Brampton, ON L6P 3A2
              </a>
            </Card.Text>
          </Card.Body>
         </Card>
      </Popover>            
    )

    const popoverRye = (
      <Popover id="popover-ca">
        <Card>
          <Card.Img variant="top" src="assets/rye_thumb.png" />
          <Card.Body>
            <Card.Text>
            <a href="https://www.google.com/maps/place/Ryerson+University/@43.6576585,-79.3809904,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb35431c1395:0xe8ed8bd69125d6f4!8m2!3d43.6576585!4d-79.3788017" rel="noopener noreferrer" target="_blank">
              350 Victoria St, Toronto, ON M5B 2K3
            </a>
            </Card.Text>
          </Card.Body>
         </Card>
      </Popover>            
    )


    return (
      <Container className="main" fluid>
        <Row>
          <Col className="main-name">

          <h1>Raymon Sobrepena</h1>
          <hr style={{borderTop: '4px solid white', width: '100%'}}/>
          <Image className="profile" src="assets/profile.jpg" rounded   />
          <hr style={{borderTop: '4px solid white', width: '100%'}}/>
          <p>
            Aspiring developer looking to enhance skills and knowledge in programming! Proficient 
            in many languages and main concepts of Computer Science. Though my degree in Computer Science taugh me a lot of 
            fundamentals as well as theory, my independent projects have mainly been self taught. I pride myself
            on being the best I can be in anything I do and looking forward to wherever Computer Science takes me!
          </p>
          <hr style={{borderTop: '4px solid white', width: '100%'}}/>
          <h2 style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Contact Info!</h2>
          
          <ul>
            <li>raymon.p.sobrepena@gmail.com</li>
            <li>T:(647)309-0904</li>
            <li>17 Mauve Drive, Brampton, ON L6P 2M9</li>
          </ul>
          <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/raymon-sobrepena/" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>    
                                                                   
                {/*GitHub*/}
                <a href="https://github.com/rsobrepe" rel="noopener noreferrer" target="_blank">
                     <i class="fab fa-github-square"></i>
                </a>

                {/*Facebook*/}
                <a href="https://www.facebook.com/raysobrepena" rel="noopener noreferrer" target="_blank">
                      <i class="fab fa-facebook-square"></i>
                </a>

                {/*Instagram*/}
                <a href="https://www.instagram.com/raysobrepena/" rel="noopener noreferrer" target="_blank">
                      <i class="fab fa-instagram"></i>
                </a>     

                {/*Website*/}
                <a href="https://raysobrepena.com/" rel="noopener noreferrer" target="_blank">
                      <i class="fas fa-globe"></i>
                </a>        
            </div>          
          </Col>
          
         
          <Col className="main-education">
              <h1>Education</h1>
              <hr style={{borderTop: '4px solid #004c9b', width: '100%'}}/>
              <Container className="main-education-ca">
                <OverlayTrigger trigger="click" placement="right" overlay={popoverCa}>
                  <h2 style={{fontSize:'20px', cursor:'pointer'}}>Cardinal Ambrozic Catholic Secondary</h2>
                </OverlayTrigger>
                <h3 style={{fontSize:'16px', color: '#004c9b', fontStyle:'italic'}}>(2010-2014)</h3>
                <p style={{fontWeight: 'bold'}}>Highlights:</p>
                <ul>
                  <li><u>Link Crew Leader</u>: Assisted in running events for freshmans entering their first year of highschool.</li>
                  <li><u>AV Club</u>: Assisted with tech setups for school assemblies and events.</li>
                  <li><u>Think Fast Leader</u>: Prepared and gave sandwhiches to the homeless in the core of Downtown Toronto</li>
                  <li><u>Sports Teams</u>: Competed on the Basketball, Football and Baseball teams</li>
                </ul>
              </Container>

              <Container className="main-education-rye">

              <OverlayTrigger trigger="click" placement="left" overlay={popoverRye}>
                <h2 style={{fontSize:'22px', cursor:'pointer'}}>Ryerson University</h2>
              </OverlayTrigger>
                <h3 style={{fontSize:'16px', color: '#004c9b', fontStyle:'italic'}}>(2014-2018)</h3>
                <p style={{fontWeight: 'bold'}}>Highlights:</p>
                <ul>
                  <li><u>Ryerson Orientation Crew</u>: Guided freshmans going into first year University. Assisted with running events for first years</li>
                  <li><u>Computer Science Student Society</u>: Promoted events and social events for Computer Science students</li>
                  <li><u>Table Tennis General Manager</u>: Filled out roster and paper work for Table Tennis team. Assisted with team practices and tournaments</li>          
                </ul>
              </Container>

          </Col>
          
          <Col className="main-experience">
          <h1>Experience</h1>
          <hr style={{borderTop: '4px solid white', width: '100%'}}/>
          </Col>
          
          <Col className="main-skills">
          <h1>Skills</h1>
          <hr style={{borderTop: '4px solid #004c9b', width: '100%'}}/>
          </Col>
        </Row>
     </Container>
    );
  }
}

export default App;

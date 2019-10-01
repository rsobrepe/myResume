import React, { Component } from 'react';
import { Container, Col, Row, Image, Popover, OverlayTrigger, Card } from 'react-bootstrap';
import Skills from './Components/skills';
import Projects from './Components/projects';
import MyForm from './Components/myform';
import './Styles/App.css';

/*
*Main app component 
*/
class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

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
      <Popover id="popover-rye">
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

    const popoverAps = (
      <Popover id="popover-aps">
        <Card>
          <Card.Img variant="top" src="assets/aps_thumb.jpg" />
          <Card.Body>
            <Card.Text>
              <a href="https://www.google.com/maps/place/Applied+Physics+Specialties/@43.725014,-79.3455684,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cd0e42c8b89b:0xc0bed18bd54cc85f!8m2!3d43.725014!4d-79.3433797" rel="noopener noreferrer" target="_blank">
                17 Prince Andrew Pl, North York, ON M3C 2H4
            </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Popover>
    )

    const popoverPeg = (
      <Popover id="popover-peg">
        <Card>
          <Card.Img variant="top" src="assets/peg_thumb.png" />
          <Card.Body>
            <Card.Text>
              <a href="https://www.google.com/maps?q=perplexity+escape+games&rlz=1C1CHBF_enCA774CA774&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjxzr7PyJPhAhURna0KHQVVD-cQ_AUIDigB" rel="noopener noreferrer" target="_blank">
                56 Bramsteele Rd Unit #2, Brampton, ON L6W 3M7
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

            <h1>About</h1>
            <hr style={{ borderTop: '4px solid white', width: '100%' }} />
            <Image className="profile" src="assets/profile.jpg" rounded />
            <hr style={{ borderTop: '4px solid white', width: '100%' }} />
            <p>
              Raymon Sobrepena is a Computer Science graduate from Ryerson University, where he gained skills and experience in different programming tools and languages such as Java, C#, Python, SQL and Git. He participated in several projects during his tenure in Ryerson, which ranged from Black Jack AIs to ATM Machine GUIs. Raymon strongly believes that these projects have instilled knowledge of core programming principles such as SDLC, UML and Object-Oriented Programming. Raymon is confident in his abilities to adapt, perform and maintain a level of competence that would be successful in any work environment.
          </p>
            <hr style={{ borderTop: '4px solid white', width: '100%' }} />
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Contact Info!</h2>

            <ul>
              <li>raymon.p.sobrepena@gmail.com</li>
              <li>T:(647)309-0904</li>
              <li>17 Mauve Drive, Brampton, ON L6P 2M8</li>
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
            <hr style={{ borderTop: '4px solid #004c9b', width: '100%' }} />


            <Container className="main-education-rye">

              <OverlayTrigger trigger="click" placement="left" overlay={popoverRye}>
                <h2 style={{ fontSize: '22px' }}>Ryerson University</h2>
              </OverlayTrigger>
              <h3>(2014-2018)</h3>
              <p style={{ fontWeight: 'bold' }}>Highlights:</p>
              <ul>
                <li><u>Ryerson Orientation Crew</u>: Guided freshmans going into first year University. Assisted with running events for first years</li>
                <li><u>Computer Science Student Society</u>: Promoted events and social events for Computer Science students</li>
                <li><u>Table Tennis General Manager</u>: Filled out roster and paper work for Table Tennis team. Assisted with team practices and tournaments</li>
              </ul>
            </Container>

            <Container className="main-education-ca">
              <OverlayTrigger trigger="click" placement="right" overlay={popoverCa}>
                <h2 style={{ fontSize: '20px' }}>Cardinal Ambrozic Catholic Secondary</h2>
              </OverlayTrigger>
              <h3>(2010-2014)</h3>
              <p style={{ fontWeight: 'bold' }}>Highlights:</p>
              <ul>
                <li><u>Link Crew Leader</u>: Assisted in running events for freshmans entering their first year of highschool.</li>
                <li><u>AV Club</u>: Assisted with tech setups for school assemblies and events.</li>
                <li><u>Think Fast Leader</u>: Prepared and gave sandwhiches to the homeless in the core of Downtown Toronto</li>
                <li><u>Sports Teams</u>: Competed on the Basketball, Football and Baseball teams</li>
              </ul>
            </Container>

          </Col>

          <Col className="main-experience">
            <h1>Experience</h1>
            <hr style={{ borderTop: '4px solid white', width: '100%' }} />

            <Container className="main-experience-peg">
              <OverlayTrigger trigger="click" placement="left" overlay={popoverPeg}>
                <h2 style={{ fontSize: '20px' }}>Perplexity Escape Games</h2>
              </OverlayTrigger>

              <h3 style={{ fontSize: '18px' }}>Developer (2016-Present)</h3>
              <p style={{ fontWeight: 'bold' }}>Contributions:</p>
              <ul>
                <li>Handle Managerial duties such as: payment transactions, customer inquires, opening/closing duties</li>
                <li>Collaborate with management to gather requirements for future or current Software Developments for customer experience</li>
                <li>Develop and maintain desktop applications and puzzles for customer experience inside the escape room</li>
                <li>Implent required changes and updates for Desktop Applications</li>
              </ul>
            </Container>

            <Container className="main-experience-aps">

              <OverlayTrigger trigger="click" placement="right" overlay={popoverAps}>
                <h2 style={{ fontSize: '20px' }}>L-3 Wescam-Applied Physics Specialties</h2>
              </OverlayTrigger>

              <h3 style={{ fontSize: '18px' }}>Engineering Intern (2015-2016)</h3>
              <p style={{ fontWeight: 'bold' }}>Contributions:</p>
              <ul>
                <li>Developed software to convert spreadsheet data to SolidWorks Data (AutoCAD) in Python for Engineering department use</li>
                <li>Designed required Assembly Models and Drawings using SolidWorks</li>
                <li>Analyzed and reveiwed defected parts and developed corresponding Change Requests and Change Orders for parts</li>
                <li>Inventory Control Support for company parts and assemblies</li>
              </ul>
            </Container>
          </Col>

          <Col className="main-skills">
            <h1>Skills</h1>
            <hr style={{ borderTop: '4px solid #004c9b', width: '100%' }} />
            <Container className="main-skills-tech">
              <h2><u>Technical Skills</u></h2>
              <Skills skill="HTML" progress={100} />
              <Skills skill="CSS" progress={100} />
              <Skills skill="Java" progress={100} />
              <Skills skill="C#" progress={100} />
              <Skills skill="JavaScript" progress={80} />
              <Skills skill="React.js" progress={80} />
              <Skills skill="Python" progress={70} />
              <Skills skill="SQL" progress={60} />
              <Skills skill="MongoDB" progress={60} />
            </Container>

            <Container className="main-skills-proj">
              <h2 style={{ marginTop: '8px' }}><u>Projects</u></h2>
              <Projects />
              <hr style={{ borderTop: '4px solid #004c9b', width: '100%' }} />
              <MyForm />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

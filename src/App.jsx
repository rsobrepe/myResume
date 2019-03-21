import React, { Component } from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
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
              <h2>2010-2014</h2>
              
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

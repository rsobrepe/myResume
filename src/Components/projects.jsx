import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
class Projects extends Component{   
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
    }    

    
    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

    render(){

        const { index, direction } = this.state;

        return(
            <Carousel
                className="carousel-items"
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                indicators={false}
            >
            <Carousel.Item>
            <h3>ATM Implementation</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Developed ATM Software. Implemented ATM Functions based around basic Java as well as 
                      Object-Oriented principles.
                    </p>                  
                  </li>

                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Java Eclipse, Linux</li>
                        <li><b>Front End:</b> Java </li>
                        <li><b>Back End:</b> SQL</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                   
                    <i class="fab fa-github"/>              
              </div>
            </Carousel.Item>

            <Carousel.Item>
            <h3>Password Breaker</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Developed password software as a puzzle for escape room.
                    </p>                  
                  </li>
                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Microsoft Visual Studio Community</li>
                        <li><b>Front End:</b> C#, .NET </li>
                        <li><b>Back End:</b> SQL, .NET</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                                      
                <a href="https://github.com/rsobrepe/PasswordBreaker" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github"/>
                </a>
              </div>
            </Carousel.Item>


            <Carousel.Item>
            <h3>Portfolio Website</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Developed a live portfolio website to highlight personal and professional profile.
                    </p>                  
                  </li>
                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Microsoft Visual Studio Code</li>
                        <li><b>Front End:</b> HTML, CSS, JavaScript, React.js </li>
                        <li><b>Back End:</b> MongoDB</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                                               
                <a href="https://github.com/rsobrepe/Portfolio" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github"/>
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
            <h3>MyShift</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Developed an app that keeps track of your shift in terms of how much you've worked. (In Development)
                    </p>                  
                  </li>
                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Android Studio</li>
                        <li><b>Front End:</b> Java, Android SDK </li>
                        <li><b>Back End:</b> Java</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                                      
                <a href="https://github.com/rsobrepe/MyShift" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github"/>
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
            <h3>BudgetApp</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Developed a Desktop Application to monitor spending habits and help user with budgeting.
                    </p>                  
                  </li>
                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Visual Studio Community</li>
                        <li><b>Front End:</b> C# </li>
                        <li><b>Back End:</b> Oracle, .NET</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                                      
                <a href="https://github.com/rsobrepe/BudgetApp" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github"/>
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
            <h3>MyResume</h3>
              <ul>
                  <li>
                    <p>
                      <b>Summary:</b> Interactive Resume developed to highlight skills. 
                    </p>                  
                  </li>
                  <li>
                    <p>
                      <b>Key Features:</b> 
                      <ul>
                        <li><b>IDE/Workspace:</b> Visual Studio Code</li>
                        <li><b>Front End:</b> HTML, CSS, JavaScript, React.js </li>
                        <li><b>Back End:</b> MongoDB</li>
                      </ul>
                    </p>                  
                  </li>
              </ul>
              <div className="carousel-footers">                                      
                <a href="https://github.com/rsobrepe/myResume" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github"/>
                </a>
              </div>
            </Carousel.Item>

        </Carousel>
        )
    }

}



export default Projects;
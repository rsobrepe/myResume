import React, { Component } from 'react';
import { ProgressBar, Container } from 'react-bootstrap';

/*
*Skills component that takes input from super class and output to preferred skill format
*/
class Skills extends Component {
    render(){
        return(
            <Container className="skills">
                <div style={{display:'flex'}}>{this.props.skill}<ProgressBar style={{margin: 'auto', width:'70%'}} animated now={this.props.progress}/></div>
            </Container>
        )
    }

}

export default Skills;
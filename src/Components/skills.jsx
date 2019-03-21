import React, { Component } from 'react';
import { ProgressBar, Container } from 'react-bootstrap';

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
import React, { Component } from 'react';
import resume from './../Donahue_Michael_Resume.pdf';
import './Resume.css';

class Resume extends Component {
    state = {  }
    render() { 
        window.scroll(0,0)
        return ( 
            <div>
                <div class="resume-text"> 
                    <p style={{fontSize: "18px", paddingTop: "1px", marginBottom: "0px"}}> Hi, </p>
                    <p style={{fontSize: "18px", paddingTop: "27px", marginBottom: "0px"}}> I hope you're having an amazing day!</p>
                    <p style={{fontSize: "18px", paddingTop: "27px", marginBottom: "0px"}}> I’m a passionate, young Software Developer who just graduated from the University of Maryland -</p>
                    <p style={{fontSize: "18px", paddingTop: "7px", marginBottom: "0px"}}> College Park. I enjoy coding, especially on the Front End, and hope to grow further as a developer. </p>
                    <p style={{fontSize: "18px", paddingTop: "7px", marginBottom: "0px"}}> I want to succeed and learn while helping your company along the way.</p>
                    <p style={{fontSize: "18px", paddingTop: "27px", marginBottom: "0px"}}> Below is my resume. If you have any questions or wish to speak further about my history, please feel free to reach out.</p>
                    <p style={{fontSize: "18px", paddingTop: "7px", marginBottom: "0px"}}> Here is my contact information: </p>
                    <p style={{fontSize: "18px", paddingTop: "44px", marginBottom: "0px"}}> &emsp;&emsp;<b>Email:</b> michaeldonahue17@gmail.com</p>
                    <p style={{fontSize: "18px", paddingTop: "7px", marginBottom: "0px"}}> &emsp;&emsp;<b>Phone:</b> (240) 439-9077 </p>
                    <p style={{fontSize: "18px", paddingTop: "37px", marginBottom: "0px"}}> Best, </p>
                    <p style={{fontSize: "18px", paddingTop: "7px", marginBottom: "0px"}}> Michael </p>

                </div>
                <div class="resume-div">
                    <embed src={resume} width="800px" height="1100px" />
                </div>
            </div>
            
         );
    }
}
 
export default Resume;
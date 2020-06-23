import React, { Component } from 'react';
import college from './../College.jpg'
import './FrontPage.css';
import { findAllByDisplayValue } from '@testing-library/react';

class FrontPage extends Component {
    

    render() { 
        let isMobile = window.innerWidth <= 500;
        if(isMobile) {
            return (
                <div className="background-image mobile">
                    <div class="frontscreen-container moibleContainer">
                        <button type="button" class="mobileButton" 
                        onClick={() => this.props.enterSite("ENTER")}>
                            <p class="font-weight-light mobile-text">Click to Enter the Site</p>
                        </button>
                    </div>
                </div>
    
              );
        }
        return (
                <div className="background-image">
                    <div class="frontscreen-container">
                        <button type="button" class="enterSite" 
                        onClick={() => this.props.enterSite("ENTER")}>
                            <h6 style={{margin: '0px'}}>ENTER SITE</h6>
                        </button>
                    </div>
                </div>
          );
    }

    
    
    componentDidMount() {
        // setTimeout(this.changeBackground, 5000);
        let isMobile = window.innerWidth <= 500;
        
    }
}


 
export default FrontPage;
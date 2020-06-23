import React, { Component } from 'react';
import HomeDivBox from './HomeDivBox'
import './HomePage.css';



class HomePage extends Component {
    state = {  }
    render() { 
        let isMobile = window.innerWidth <= 500;
        if(isMobile) {

        }
        return ( 
            <div>
                <div class="flex-container-home">
                    <div>
                        
                        <HomeDivBox name={"Stories"}/>
                        
                    </div>
                    <div>
                        <HomeDivBox name={"Photography"}/>
                    </div>
                    <div>
                        <HomeDivBox name={"Music"}/>
                    </div>
                    
                    <div>
                        <HomeDivBox name={"Resume"}/>
                    </div>

                    {/* <div>
                        <HomeDivBox name={"Clothing"}/>
                    </div> */}

                    <div>
                        <HomeDivBox name={"Exercise"}/>
                    </div>
                    <div class="boxText">
                        <p style={{fontSize: "30px", marginBottom: "6px"}}>Hi, I'm Michael</p>
                        <p style={{fontSize: "18px", paddingTop: "1px", marginBottom: "0px"}}>  This is my website. And I made it, too.</p>
                        <p style={{fontSize: "18px", paddingTop: "1px", marginBottom: "0px"}}>  This is the stuff I do :)</p>
                        <p style={{fontSize: "18px", paddingTop: "44px", marginBottom: "0px"}}>  Enjoy</p>
                    </div>
                    <div class="boxText">
                    </div>
                </div> 
            </div>
            
        );
    }
}
 
export default HomePage;
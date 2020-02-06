import React, { Component } from 'react';
import './FooterStyle.css';
import './../App.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <hr />
                <div class="row">
                    <div class="col">

                    </div>
                    <div>
                        <a style={{ color: "inherit" }} href="https://github.com/MDonahue17">
                            <i class="icons fa fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a style={{ color: "inherit" }} href="https://www.instagram.com/mike.donahue/">
                            <i class="fa fa-instagram icons"></i>
                        </a>
                    </div>
                    <div>
                        <a style={{ color: "inherit" }} href="spotify:user:oecs54niyzomumcfvuq5v83ws">
                            <i class="icons fa fa-spotify"></i>
                        </a>
                    </div>
                    <div>
                        <a style={{ color: "inherit" }} href="https://vsco.co/pichael17/images">
                            <span class="iconify vsco" data-icon="simple-icons:vsco"></span>
                        </a>
                    </div>
                    <div class="col">

                    </div>
                </div>


            </div>


        );
    }


}

export default Footer;
import React, { Component } from 'react';

import './Author.css';

class Author extends Component {



    render() {
        let styles = {
            textAlign: "center"
        }
        return (
            <div style={styles}>
                <div class="row author">
                <div class="col" id="author">
                    <img class="card-img-body imgBeach" src={this.props.image} alt="Card image cap" />
                </div>
                <div class="col">
                    <div class="details">
                        Michael Donahue
                        <p class="details-p">
                            Michael Donahue is a writer who currently dedicates his prose to short story fiction.
                            The small town author explores worlds much like our own with a twist! He does so favoring
                            tools like humor, loss, regret along with a touch of his own personality. Michael has
                            finished the curriculum required to graduate with the Creative Writing Minor, which he will
                            do this Spring... hopefully. As well, he's known for being an 'okay' cook and laughing -
                            a little too much - at his own jokes.
                        </p>
                        <p class="details-p">
                            (See stories below)
                        </p>
                    </div>
                </div>
            </div>

            </div>




        );
    }
}

export default Author;
import React, { Component } from 'react';


class Story extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                <div dangerouslySetInnerHTML={{ __html: this.props.doc }} />
            </div>
        );
    }
}

export default Story;
import React, { Component } from 'react';
import Photos from './Photos';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPhotos } from '../../actions/photoActions';

class Photography extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchPhotos();
    }
    
    render() { 
        let items = []
        if(this.props.photos) {
            let i = 0
            while (i < this.props.photos.length) {
                items.push(<Photos id={i} photoLink={this.props.photos[i]}/>)
                i++;
            }
        }   
        return ( 
            <div class="photoDiv">
                {items}
            </div>
         );
    }
}

Photography.propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    photos: state.photoReducer.photos
});
 
export default connect(mapStateToProps, { fetchPhotos })(Photography);
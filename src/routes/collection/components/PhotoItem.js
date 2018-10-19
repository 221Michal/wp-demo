import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PhotoItem.scss'

class PhotoItem extends Component {
    constructor(props, context) {
        super(props, context);


    }

    onPhotoClick() {
        const { id } = this.props.photo;
        this.props.history.push(`/photo/${id}`);
    }

    render() {
        const {
            urls: { small },
            likes
        } = this.props.photo;
        const { photodetails } = this.props;
        const style = {
            position: 'relative',
            display: 'inline-block',
            width: 270,
            height: 270,
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${small})`
        };

        return (
            <div className='col col-xs-12' style={{ padding: 0, marginBottom: 20 }} >
                <div style={style} >
                    <div className='data-overlay' photoid={this.props.photo.id} onClick={this.onPhotoClick.bind(this)}>
                        <div>
                            <p>Pobrano: {photodetails ? photodetails.downloads : '???'}</p>
                            <p>Like'ów: {likes}</p>
                            <p>Państwo: {(photodetails && photodetails.location && photodetails.location.country) ? photodetails.location.country : '???'}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PhotoItem.propTypes = {

};

export default withRouter(PhotoItem);
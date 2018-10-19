import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPhoto } from '../../utils/redux/photos/photosAction';
import FacebookShare from './components/FacebookShare';
import './Photo.scss'

class Photo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { fullWidth: false };
        this.onImgClick = this.onImgClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.id);
    }

    onImgClick() {
        this.setState({ fullWidth: !this.state.fullWidth });
    }

    render() {
        const currentId = this.props.match.params.id;
        const currentPhoto = this.props.singlePhotos[currentId];


        if (!currentPhoto) {
            return 'Wczytywanie...';
        }

        const { downloads, likes, location, views, user, links } = currentPhoto;
        let imgStyle = { width: '100%', maxHeight: 99999, cursor: 'zoom-out' };
        if (!this.state.fullWidth) imgStyle = {};

        return (
            <div className="container">
                <div className="photo-data">
                    <div className="photo-data-row row justify-content-md-center">
                        <div className="col-md-2 photo-border-left">Autor:</div> <div className="col-md-3 photo-border-right">{user.name}</div>
                    </div>
                    <div className="photo-data-row row justify-content-md-center">
                        <div className="col-md-2 photo-border-left">Miejsce wykonania:</div> <div className="col-md-3 photo-border-right">{(location && location.country) ? location.country : 'N/D'}</div>
                    </div>
                    <div className="photo-data-row row justify-content-md-center">
                        <div className="col-md-2 photo-border-left">Pobrano:</div> <div className="col-md-3 photo-border-right">{downloads}</div>
                    </div>
                    <div className="photo-data-row row justify-content-md-center">
                        <div className="col-md-2 photo-border-left">Polubiono:</div> <div className="col-md-3 photo-border-right">{likes}</div>
                    </div>
                    <div className="photo-data-row row justify-content-md-center">
                        <div className="col-md-2 photo-border-left-last">Wyświetlono:</div> <div className="col-md-3 photo-border-right-last">{views} razy</div>
                    </div>
            </div >
            <img src={currentPhoto.urls.full} style={imgStyle} onClick={this.onImgClick} alt="img" />
            <FacebookShare shareurl={links.html} />
            </div >

        );
    }
}

Photo.propTypes = {

};

function mapStateToProps(store) {
    return {
        singlePhotos: store.Photos.singleDict,
    };
}

const mapDispatchToProps = {
    fetchPhoto
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
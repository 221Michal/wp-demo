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
                <img src={currentPhoto.urls.full} style={imgStyle} onClick={this.onImgClick} alt="img" />
                <div>
                    <p>Autor: {user.name}</p>
                    <p>Miejsce wykonania: {(location && location.country) ? location.country : 'N/D'}</p>
                    <p>Pobrano {downloads} razy</p>
                    <p>Polubiono {likes} razy</p>
                    <p>Wyświetlono {views} razy</p>
                </div>
                <FacebookShare shareurl={links.html} />
            </div>

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
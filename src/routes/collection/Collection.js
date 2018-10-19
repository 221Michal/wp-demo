import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { fetchFeaturedCollections } from '../../utils/redux/collections/collectionsActions';
import { fetchPhotos } from '../../utils/redux/photos/photosAction';
import PhotoItem from './components/PhotoItem';

class Collection extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { pageCount: 0 };

        this.loadMore = this.loadMore.bind(this);
        this.onSortOrderChange = this.onSortOrderChange.bind(this);
        this.renderPhotos = this.renderPhotos.bind(this);
    }

    componentDidMount() {
        if (!this.props.collections[this.props.match.params.id]) this.props.fetchFeaturedCollections()
    }

    loadMore(page) {
        console.log("asd")
        if (!this.props.fetching) {
            const sortOrder = this.sortSelect.value;
            console.log(sortOrder)
            const { pageCount } = this.state;
            if (page === 0) {
                this.props.fetchPhotos(this.props.match.params.id, 1, sortOrder);
                this.setState({ pageCount: 1 });
                return;
            }
            this.props.fetchPhotos(this.props.match.params.id, pageCount + 1, sortOrder);
            this.setState({ pageCount: pageCount + 1 });
        }
    }

    renderPhotos() {
        return this.props.photos.map(photo => {
            return <PhotoItem key={photo.id} photo={photo} photodetails={this.props.photoDetailDict[photo.id]} />;
        });
    }

    onSortOrderChange() {
        this.loadMore(0);
    }

    render() {
        const loader = <div className="loader" key={0}>Wczytywanie...</div>;
        if (!this.props.collections || !this.props.photos || !this.props.collections[this.props.match.params.id]) {
            return loader;
        }
        return (
            <div>
                <div className="container">
                    <div className="row" style={{ marginTop: 20, marginBottom: 30 }}>
                        <div className="col-md-9">
                            <h1>{this.props.collections[this.props.match.params.id].title}</h1>
                        </div>
                        <div className="col-md-3">
                            <form className="">
                                <div className="form-group">
                                    <label>Sorotowanie wg. </label>
                                    <select className="form-control" ref={sortSelect => this.sortSelect = sortSelect} onChange={this.onSortOrderChange}>
                                        <option value="latest">Najnowsze</option>
                                        <option value="popular">Najpopularniejsze</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <InfiniteScroll
                        className="row"
                        loadMore={this.loadMore}
                        hasMore={true}
                        loader={loader}
                    >
                        {this.renderPhotos()}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

Collection.propTypes = {

};

function mapStateToProps(store) {
    return {
        collections: store.Collections.dict,
        photos: store.Photos.data,
        photoDetailDict: store.Photos.singleDict,
        fetching: store.Photos.photosFetchPending,
    };
}

const mapDispatchToProps = {
    fetchFeaturedCollections,
    fetchPhotos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
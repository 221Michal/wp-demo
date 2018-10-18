import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CollectionItem from './components/CollectionItem';
import { fetchFeaturedCollections } from '../../utils/redux/collections/collectionsActions';

class Collections extends Component {
    constructor(props, context) {
        super(props, context);


    }

    componentDidMount() {
        this.props.fetchFeaturedCollections()
    }

    renderFeatured() {
        return Object.values(this.props.collections).map(collection => {
            return <CollectionItem key={collection.id} collection={collection}/>;
          });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {this.renderFeatured()}
                    </div>
                </div>
            </div>
        );
    }
}

Collections.propTypes = {
    collections: PropTypes.object,
};

function mapStateToProps(store) {
    return {
        collections: store.Collections.dict
    };
}

const mapDispatchToProps = {
    fetchFeaturedCollections,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
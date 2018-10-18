import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CollectionsList from './components/CollectionsList';
import { fetchFeaturedCollections } from '../../utils/redux/collections/collectionsActions';

class Collections extends Component {

    componentDidMount() {
        this.props.fetchFeaturedCollections()
    }

    render() {
        return (
            <div>
                <CollectionsList />
            </div>
        );
    }
}

Collections.propTypes = {

};

function mapStateToProps(store) {
    return {
        collections: store.Collections
    };
}

const mapDispatchToProps = {
    fetchFeaturedCollections,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
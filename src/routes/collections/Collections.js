import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                    <h1>Sekcja zdjęć</h1>
                        {this.renderFeatured()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        collections: store.Collections.dict
    };
}

const mapDispatchToProps = {
    fetchFeaturedCollections,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
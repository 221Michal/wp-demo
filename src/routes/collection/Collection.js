import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collection extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Collection
            </div>
        );
    }
}

Collection.propTypes = {

};

export default Collection;
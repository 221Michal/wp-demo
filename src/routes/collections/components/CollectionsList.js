import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CollectionsList extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        asd
                    </div>
                </div>
            </div>
        );
    }
}

CollectionsList.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(CollectionsList);

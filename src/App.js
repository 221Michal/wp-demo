import React, { Component } from 'react'; import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import PropTypes from 'prop-types';
import './App.scss';
import Collections from './routes/collections/Collections';
import Collection from './routes/collection/Collection';
import Photo from './routes/photo/Photo';
import './utils/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Router>
                    <Switch>
                        <Route path="/collection/:id" component={Collection} />
                        <Route exact path="/photo/:id" component={Photo} />
                        <Route exact path="/" component={Collections} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;
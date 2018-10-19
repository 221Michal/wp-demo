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
import AboutApp from './routes/aboutApp/AboutApp';
import './utils/bootstrap.min.css'
import HeaderNav from './components/HeaderNav';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Router>
                    <div>
                        <HeaderNav />
                        <Switch>
                            <Route path="/collection/:id" component={Collection} />
                            <Route exact path="/photo/:id" component={Photo} />
                            <Route exact path="/about" component={AboutApp} />
                            <Route exact path="/" component={Collections} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;
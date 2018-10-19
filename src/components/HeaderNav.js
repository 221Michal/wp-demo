import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HeaderNav
 extends Component {
    render() {
        const { pathname } = this.props.location
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar-brand" >WP-demo</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className={'nav-item' + (pathname === '/' ? ' active' : '')}>
                            <Link className="nav-link" to="/">Sekcje zdjęć</Link>
                        </li>
                        <li className={'nav-item' + (pathname === '/about' ? ' active' : '')}>
                            <Link className="nav-link" to="/about">O aplikacji</Link>
                        </li>
                    </ul>
                </div>
                {
                    pathname !== "/" &&
                <div className="nav-item go-back" onClick={() => this.props.history.goBack()}>powrot</div>
                }
            </nav>
        );
    }
}

export default withRouter(HeaderNav);
;
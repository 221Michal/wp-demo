import React, { Component } from 'react';
import './AboutApp.scss'

class AboutApp extends Component {
    render() {
        return (
            <div className="about-app">
                <h3>WP-demo</h3>
                <p>Jest to aplikacja do przeglądania obrazów oparta o serwis unsplash.js</p>
                <p>Strona powstała na potrzeby rekrutacji na stanowisko Frontend Developer dla Wirtualna Polska Media</p>
                <p>
                    Kod aplikacji dostępny na <a href="https://github.com/221Michal/wp-demo" target="_blank" rel="noopener noreferrer">GitHub'ie</a>
                </p>
                <h5>Autorem strony jest:</h5>
                <p>Michał Dawid</p>
            </div>
        );
    }
}

export default AboutApp;
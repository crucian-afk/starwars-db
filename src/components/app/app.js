import React, {Component} from 'react';

import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

export default class App extends Component {

    state = {
        selectedPerson: 5
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    }
};

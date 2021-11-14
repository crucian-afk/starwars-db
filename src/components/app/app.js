import React, {Component} from 'react';

import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch() {
        return <ErrorIndicator />
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

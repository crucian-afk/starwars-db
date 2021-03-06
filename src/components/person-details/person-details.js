import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            // .then((person) => {
            //     this.setState({ person });
            // })
            .then(this.onPersonLoaded)
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        })
    }

    render() {


        const { person, loading } = this.state

        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <PersonView person={person} /> : null

        if (loading) {
            return <Spinner />
        }

        return (
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        )
    }
}

const PersonView = ({ person }) => {

    const { id, name, gender, birthYear, eyeColor, skinColor, hairColor } = person;

    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt={`${name}`} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Skin Color</span>
                        <span>{skinColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Hair Color</span>
                        <span>{hairColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>

    )
}

import React from 'react';
import './SwapiApp.css';

const SwapiApp = () => {
    return (
        <div id="app">
            <h1>SWAPI</h1>
            <div id="input">
                <label htmlFor="endpointInput">https://swapi.dev/api/</label>
                <input
                    type="text"
                    id="endpointInput"
                    placeholder="Enter endpoint..."
                />
                <button id="fetchData" className="btn btn-primary">
                    Get Info
                </button>
                <div
                    id="spinner"
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div>
                <div id="controllerBlock"></div>
                <div id="idBlock"></div>
                <pre id="result">
                    <p>Name: Luke Skywalker</p>
                    <p>Height: 172</p>
                    <p>Mass: 77</p>
                    <p>Hair Color: blond</p>
                    <p>Skin Color: fair</p>
                    <p>Eye Color: blue</p>
                    <p>Birth Year: 19BBY</p>
                    <p>Gender: male</p>
                    <p>Homeworld: https://swapi.dev/api/planets/1/</p>
                    <p>Films:</p>
                    <ul>
                    <li>https://swapi.dev/api/films/2/</li>
                    <li>https://swapi.dev/api/films/6/</li>
                    <li>https://swapi.dev/api/films/3/</li>
                    <li>https://swapi.dev/api/films/1/</li>
                    <li>https://swapi.dev/api/films/7/</li>
                    </ul>
                    <p>Species:</p>
                    <ul>
                    <li>https://swapi.dev/api/species/1/</li>
                    </ul>
                    <p>Vehicles:</p>
                    <ul>
                    <li>https://swapi.dev/api/vehicles/14/</li>
                    <li>https://swapi.dev/api/vehicles/30/</li>
                    </ul>
                    <p>Starships:</p>
                    <ul>
                    <li>https://swapi.dev/api/starships/12/</li>
                    <li>https://swapi.dev/api/starships/22/</li>
                    </ul>
                    <p>Created: 2014-12-09T13:50:51.644000Z</p>
                    <p>Edited: 2014-12-20T21:17:56.891000Z</p>
                    <p>URL: https://swapi.dev/api/people/1/</p>
                </pre>
            </div>
        </div>
    );
};

export default SwapiApp;
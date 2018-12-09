import React, {  useState, useEffect } from 'react'
import Navbar from '../Common/Navbar';
import { racesAPIData } from '../../tempAPIData';

// import { fetchRaces } from '../../actions';

import {  Header, Input } from 'semantic-ui-react'

export default function App() {
	const [races, setRaces] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const races = racesAPIData;

		setRaces(races);
		setLoading(false);
	});

	// if (loading) return <p>Loading</p>

	function getOptions () {
		return races.races.map((raceObject) =>
			<option value={raceObject.race.name} key={raceObject.race.race_id}>
			</option>
		);
	}

	if (!loading) {
		return (
			<React.Fragment>
				<Navbar />
				<Header as="h1" textAlign="center">
					Coming Soon!
				</Header>
	
				{ /* TODO: Make a separtate component */}
				{/* <h1>I want to bet {} that I will beat {} at the {} race</h1>
				<Input list='races' placeholder='race' />
				<datalist id='races'>
					{getOptions()}
				</datalist> */}
			</React.Fragment>
		)
	} else {
		return (<p>Loading...</p>)
	}
}
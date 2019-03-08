import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromProps(props, state){
	// 	console.log('[Person.js] getDerivedStateFromProps');
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState){
		console.log("[Persons.js] shouldComponentUpdate");
		return true;
	}

	getSnapshotBeforeUpdate(previosProps, previousState){
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] component did update');
		console.log(snapshot);
	}

	render() {
		console.log("[Persons.js rending...")
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			)
		});
	}
};

export default Persons;
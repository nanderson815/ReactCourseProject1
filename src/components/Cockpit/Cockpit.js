import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log("[cockpit.js] useEffect");
        // Http request....
        setTimeout(() => {
            alert("Saved data to cloud!");
        }, 1000);
        return () => {
            console.log("[Cockpit.js] cleanup work");
        }
    }, []);

    useEffect(() => {
        console.log("[cockpit.js] useEffect");
        return () => {
            console.log("[cockpit.js] cleanup work in 2nd use effect");
        }
    });

    const AssignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        AssignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        AssignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={AssignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};


export default cockpit;
import data from '../data';

const Person = function(props) {
    const {name, city, country, employer, title, favoriteMovies} = props.id;
    return (
        <div className="App">
            <h1>Home</h1>
            <p class='counter'>{props.i + 1}/{data.length}</p>
            <p>{name.first} {name.last}</p>
            <p>From: {city}, {country}</p>
            <p>Job Title: {title}</p>
            <p>Employer: {employer}</p>
            <p>Favorite Movies:</p>
            <ol>
                <li>{favoriteMovies[0]}</li>
                <li>{favoriteMovies[1]}</li>
                <li>{favoriteMovies[2]}</li>
            </ol>
            <div class='bottom'>
                <button class='previous' onClick={() => {props.subi()}}>{'< Previous'}</button>
                <button onClick={() => {props.deleteUser()}}>Delete</button>
                <button class='next' onClick={() => {props.addi()}}>{'Next >'}</button>
            </div>
        </div>
    )
}

export default Person;
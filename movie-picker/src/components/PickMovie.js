import {useState} from 'react';
import Movie from './Movie';
import {data} from '../data/data';
import './PickMovie.css';

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false);

    const moviePicker = () => {
        const randomPick = data[Math.floor(Math.random() * data.length)];
        setRandomMovie(randomPick);
        setPicked(true);
    }

    const pickAgain = () => {
        setRandomMovie({});
        setPicked(false);
    }
    
    return (
        <div>
            <h1 className="title">Add a Receipt</h1>
            {picked && 
            <div className ="picked">
                <div></div>
                <Movie name={randomMovie.name} image={randomMovie.img} genre={randomMovie.genre}/>
                <button className="pickButton" onClick={pickAgain}>Pick Again</button>
            </div>}
            {!picked && <button onClick={moviePicker}>Add a Receipt</button>}
        </div>
    );
}

export default PickMovie;

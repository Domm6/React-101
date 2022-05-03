import {data} from '../data/data';
import Movie from './Movie';
import './Catalog.css';

const Catalog = () => {
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="movies">
                {data.map((movie, index) => (
                    <Movie name={movie.name} genre={movie.genre} image={movie.img} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Catalog;

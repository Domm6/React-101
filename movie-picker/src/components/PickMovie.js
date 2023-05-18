import {useState} from 'react';
import Movie from './Movie';
import {data} from '../data/data';
import './PickMovie.css';

const PickMovie = () => {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    
    function handleUpload() {
        const formData = new FormData()
        formData.append('file', file)
        fetch(
            'url', 
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json())
        .then(
            (result) => {
                console.log('success', result)
            }
        )
        .catch(error => {
            console.error("Error:", error)
        })
    }

    return (
        <div>
            <h1 className="title">Add a Receipt</h1>
            <form onSubmit={handleUpload}>
                <input type='file' name='file' onChange={handleFile}/>
                <button>Upload</button>  
            </form>

        </div>
    );
}

export default PickMovie;

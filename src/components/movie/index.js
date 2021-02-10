import MovieHeaderArea from './MovieHeaderArea';
import IconBar from './IconBar';
import CredentialsGrid from './CredentialsGrid';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
function Movie() {
    const {movieID} = useParams();
    const [datas,setDatas] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const endpoint = `${process.env.REACT_APP_MOVIE_DETAILS}${movieID}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}`;
    //console.log(endpoint);
    useEffect(() => {
        axios.get(endpoint)
        .then( (res) => setDatas(res.data))
        .finally( setLoaded(true));
    },[]);


    //console.log(datas);
    return ( isLoaded ? 
        <>
           <MovieHeaderArea 
           img={datas.backdrop_path} 
           title = {datas.title}
           imdb = {datas.vote_average}
           overview = {datas.overview}
           poster = {datas.poster_path}
           />
            <IconBar budget = {datas.budget} revenue = {datas.revenue} runtime = {datas.runtime}/>
            <CredentialsGrid creditsEndpoint={process.env.REACT_APP_CREDITS  + movieID + `/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`}/>
        </> : <h1>Loading...</h1>
    )
}

export default Movie

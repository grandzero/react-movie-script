import Header from "../header";
import SearchBar from '../SearchBar';
import PostersGrid from '../PostersGrid';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Home() {
    const [details,setDetails] = useState({});
    //const [page,setPage] = useState(1);
   const [isLoaded, setIsLoaded] = useState(false);
    const endpoint = `${process.env.REACT_APP_POPULAR_MOVIES_ENDPOINT}&language=${process.env.REACT_APP_LANGUAGE}&page=`;
    useEffect( () => {
        axios.get(endpoint + "1")
        .then( res => {setDetails(res.data)})
        .finally(() => {
            //setPage(page+ 1);
            setIsLoaded(true);
        });
        //details.results[0].backdrop_path
    }, []);
    const  handleSearch = (query) => {
        let url = query === "" ? endpoint + "1": `${process.env.REACT_APP_SEARCH_ENDPOINT}${query}`;
        axios.get(url)
        .then(res => {setDetails(res.data);})
        .catch( e => console.log("ERROR : ", e));
    }

    return (
        <>
            <Header 
            backropImg = {isLoaded && details.results[0].backdrop_path}
            title = {isLoaded && details.results[0].original_title}
            description = {isLoaded && details.results[0].overview}
            imdb = {isLoaded && details.results[0].vote_average}
            
            />
            <SearchBar searchHandle = {handleSearch}/>
            <PostersGrid  posterList = {isLoaded ? details.results.slice(1).map((item) => {return {img : item.poster_path, id: item.id}}) : []}/>
            <br></br>
            <div  style={{margin:0,padding:0,width:"100%",height:"200px",backgroundColor:"black"}}></div>
        </>
    )
}

export default Home

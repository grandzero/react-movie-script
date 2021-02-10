import React from 'react'
import posterGridStyle from "./posterGrid.module.css";
import Poster from "../Poster";
import axios from 'axios';
import {useState, useEffect} from 'react';
function PostersGrid({posterList}) {
	const [page,setPage] = useState(2);
	const [posters,setPosters] = useState([]);
	const endpoint = `${process.env.REACT_APP_POPULAR_MOVIES_ENDPOINT}&language=${process.env.REACT_APP_LANGUAGE}&page=`

	useEffect(() => {
		setPosters(posterList);
	}, [posterList])
	
	const loadMore = () => {
		axios.get(endpoint + page.toString())
		.then(res => {
			const newDatas = res.data.results.map((item) => {return {img : item.poster_path, id: item.id}});
			setPosters([...posters, ...newDatas])
			
		
		})
		.finally( () => setPage(page + 1));
	}

    return (
        <section className="posters">
		<div className="container">
			<div className="row">
				{ posters.map( (poster) => {
					return <Poster key={poster.id} data = {poster} />
				})
				}
                

			</div>
			<div className="row">
				<button type="button" onClick={() => loadMore()}  className={`btn btn-success ${posterGridStyle.loadMoreButton}`}>Load More</button>
			</div>
		</div>
	
	</section>
    )
}

export default PostersGrid

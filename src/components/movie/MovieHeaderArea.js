import React from 'react'
import headerAreaStyle from './styles/movieheaderarea.module.css';
import MovieDetailsArea from './MovieDetailsArea';
function MovieHeaderArea({img,title,imdb,overview,poster}) {
	//console.log(title,imdb,overview);
    return (
        <section style={{backgroundImage: `url("${process.env.REACT_APP_IMAGE_ENDPOINT}${img}")`}} className={`${headerAreaStyle.mainHeader} text-align-bottom`} > 
		<div className={`container ${headerAreaStyle.headerContainer} align-bottom`}>
			<MovieDetailsArea 
			title = {title}
			imdb = {imdb}
			overview = {overview}
			poster = {poster}
			/>
		</div>
	</section>
    )
}

export default MovieHeaderArea

import React from 'react'

function MoviePoster({posterImg, moviePosterImg,imgPath}) {
    return (
        <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${moviePosterImg}`}>
            <img className={posterImg} src={`http://image.tmdb.org/t/p/w500${imgPath}`}></img>
        </div>
    )
}

export default MoviePoster

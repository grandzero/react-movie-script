import React from 'react'
import styles from './styles/moviedetails.module.css';
function MovieDetails({t,i,o}) {
    //console.log(t,i,o);
    return (
        <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ${styles.movieContentArea}`}>
            <h1 className={styles.movieTitle}>{t}</h1>
            <br></br>
            <div className={`row ${styles.plotText}`}>PLOT</div>
            
            <div className={`row ${styles.plotArea}`}>{o}</div>
    
        <div style={{color:"white"}} className={`row ${styles.imdbRating}`}>IMDB Rating : {i}</div>
        </div>	
    )
}

export default MovieDetails

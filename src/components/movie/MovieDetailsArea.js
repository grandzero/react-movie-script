import movDetAreaStyle from './styles/moviedetailsarea.module.css';
import MoviePoster from './MoviePoster';
import MovieDetails from './MovieDetails';
function MovieDetailsArea({title,imdb,overview,poster}) {
    return (
        <div className="row">
            <MoviePoster imgPath={poster} posterImg = {movDetAreaStyle.posterImg} moviePosterImg = {movDetAreaStyle.moviePosterImg} />
            <MovieDetails t = {title} i = {imdb} o = {overview} />
        </div>
    )
}

export default MovieDetailsArea

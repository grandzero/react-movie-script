import posterStyle from './styles/poster.module.css';
import {Link} from 'react-router-dom'
function Poster({data}) {
    /*console.log("Hello");
    console.log("PosterData.poster_path : ", data.img);
    console.log(`http://image.tmdb.org/t/p/w500${data.img}`);*/
    return (
<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
    <Link to={`/${data.id}`}> 
        <img className={posterStyle.posterImg} alt="text" src ={`http://image.tmdb.org/t/p/w500${data.img}`}></img>
    </Link>
</div>

    )
}

export default Poster

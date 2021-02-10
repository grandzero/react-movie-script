import {useState} from 'react'
import headerStyle from './header.module.css';

function Header({backropImg, title, imdb, description}) {
    return (
        <section style={{background: `url('${process.env.REACT_APP_IMAGE_ENDPOINT}${backropImg}')`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}  className={headerStyle.mainHeader+" text-align-bottom"} > 
		 
        <div className={"row text-align-left col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 " + headerStyle.movieTitle}><h1 className={headerStyle.movieTitleText}>{title}</h1></div>
        <div className={"row text-align-left col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 " + headerStyle.movieScore}>IMDB : {imdb}</div>
        <div className={"row text-align-left col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 " + headerStyle.movieContent}>{description} </div>
   
        </section>
    )
}

export default Header

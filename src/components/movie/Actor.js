import React from 'react'
import styles from './styles/actor.module.css';
import prs from './prs.jpg';
function Actor({name,char,img}) {
    return (
        <div className={`${styles.creditsPoster} col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3`}> 
            <div className={`${styles.creditsCard} col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row`}>
                <div className={`${styles.actorPhoto} col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5`}>
                    <img className={styles.actorImg} src={img !== null ? `http://image.tmdb.org/t/p/w154/${img}` : prs}></img>
                </div>
                <div className={`${styles.actorRole} col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7`}>
                <div className={styles.actorAreaText + " row"}>{name}</div>
                <div className={styles.actorAreaText + " row"}>{char}</div>
                </div>
            </div>
        </div>
    )
}

export default Actor

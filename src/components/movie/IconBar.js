import React from 'react'
import styles from './styles/iconbar.module.css';
function IconBar({budget,revenue,runtime}) {
    return (
        <section className={`${styles.iconBarSection} align-center`}>
		<div className={`${styles.iconContainer} container`}>
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row align-center text-align-center">
				<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><i className={styles.far + " far fa-clock"}></i> <span className ={styles.iconsText}> Running Time: {runtime}m</span></div>
				<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><i className={styles.far + " far fa-money-bill-alt"}></i> <span className ={styles.iconsText}> Budget: ${budget}</span></div>
				<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><i className={styles.fas + " fas fa-ticket-alt"}></i> <span className ={styles.iconsText}> Revenue: ${revenue}</span></div>
			</div>
		</div>
	</section>
    )
}

export default IconBar

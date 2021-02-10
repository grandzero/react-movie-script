import Actor from './Actor';
import styles from './styles/credentialsgrid.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
function CredentialsGrid({creditsEndpoint}) {
    const [datas,setDatas] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(creditsEndpoint)
        .then(res => setDatas(res.data))
        .finally(() => setLoaded(true))
        
    }, [])
    //console.log(datas.cast);
    //console.log(creditsEndpoint);
    return (
        isLoaded ?         <section className={styles.creditsGrid}>
        <div className="container">
            <div className="row">
                {
                    datas.cast.map((data,id) => {
                        return <Actor key={id} name={data.name} char={data.character} img={data.profile_path}/>
                    }) 
                }
            </div>
        </div>
    </section> : <h1>Loading...</h1>

    )
}

export default CredentialsGrid

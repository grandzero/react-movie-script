import {useState} from 'react'
import searchBarStyle from './styles/searchbar.module.css';
function SearchBar({searchHandle}) {
    const [input, setInput] = useState("");
    return (
        <section className={`${searchBarStyle.sbSection} align-center`}>
		    <div className={searchBarStyle.searchbarContent}>
		        <span aria-hidden="true" className={`fa fa-search fa-2x ${searchBarStyle.searchIcon}`}></span>
		        <input type="text" onChange={ (e) => {setInput(e.target.value); searchHandle(e.target.value)}} className={searchBarStyle.searchbarInput} placeholder="Search" value={input}></input>
            </div>
	    </section>
    )
}

export default SearchBar;

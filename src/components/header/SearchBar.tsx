import { useState } from "react";
import { SearchBarCss } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'


export default function SearchBar(){

    const [search, setSearch] = useState('')
    return(

        <SearchBarCss>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button><AiOutlineSearch/></button>
        </SearchBarCss>
        
    );
}
import React, {useState} from "react";
import Search from '../../../assets/icons/search.svg';
import {useDispatch} from "react-redux";
import {searchByTerm} from "../../../widgets/messaging-overview-widget/model/effects";

const SearchBar: React.FC = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchByTerm({term: event.target.value, dispatch});
        setSearch(event.target.value);
    }

    return (
        <div className="search-bar">
            <img src={Search} className='search-bar-icon'/>
            <input
                className='search-bar-form'
                placeholder='Search'
                type='text'
                onChange={handleSearchChange}/>
        </div>
    )
}

export default SearchBar;
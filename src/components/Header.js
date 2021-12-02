import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './context/UserContext';

function Header() {

    const [{user},distach] = useDataLayerValue();

    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon/>
                <input placeholder='Search for artists, songs' type="text"/>
            </div>
            <div className='header_right'>
            <Avatar src="" alt="" />
                <h4>{user?.display_name || "Not Logged In"}</h4>
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useStateValue } from '../ContextApi/StateProvider';

const Sidebar = () => {
    const [{playlists}, dispatch] = useStateValue();
    return (
        <SidebarContainer>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            {/*I know br is bad practice but it creates space*/}
            <br />

            <SidebarTitle>PLAYLISTS</SidebarTitle>
            <hr />
            {
                //Maps and displays playlists IF there are playlists and IF there are songs in the playlists.
                playlists?.items?.map((playlist, i)=>(
                    <SidebarOptions title={playlist.name} key={i} />
                ))}
        </SidebarContainer>
    );
}

//Key note: THIS COMPONENT IS A CHILD OF PlayerBody TAG IN Player.js
const SidebarContainer = styled.div`
    height: 100vh;
    //Makes component 20% of screen size
    flex: 0.2;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 230px;
    height: 100vh;
    background-color: #040404;

    & > img {
        //object-fit: contain keeps aspect ratio
        object-fit: contain;
        margin-right: auto;
        height: 70px;
        padding: 10px;
    }

    & > hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
`;

const SidebarTitle = styled.strong`
    margin-left: 10px;
    padding: 5px;
    font-size: 12px;
`

export default Sidebar

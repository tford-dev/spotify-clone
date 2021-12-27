import React, {useState} from 'react';
import styled from "styled-components";
import Header from "./Header.js";
import { useStateValue } from '../ContextApi/StateProvider.js';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//Main purpose of css file is to style icons
import './icons.css';
import SongRow from './SongRow';

const Body = ({spotify}) => {
    //Grabs on_repeat from state
    const [{on_repeat}, dispatch] = useStateValue();

    return (
        <BodyContainer>
            {/*Prop drilling*/}
            <Header spotify={spotify} />
            <BodyInfo>
                {/*If on_repeat state is filled, display img url as src*/}
                <img src={on_repeat?.images[0].url} alt="playlist" />
                <BodyInfoText>
                    <strong>PLAYLIST</strong>
                    <h2>{on_repeat?.name}</h2>
                    {/*If on_repeat state is filled, display description*/}
                    <p dangerouslySetInnerHTML={{__html: on_repeat?.description}}></p>
                </BodyInfoText>
            </BodyInfo>

            <BodySongs>
                <BodyIcons>
                    <PlayCircleFilledIcon className="body__shuffle body__songIcon" />
                    <FavoriteIcon className="body__songIcon" fontSize="large"/>
                    <MoreHorizIcon className="body__songIcon" />
                </BodyIcons>

                {/*If there are songs in the playlist, map through items array and display tracks*/}
                {on_repeat?.tracks.items.map((item, i) =>(
                    <SongRow 
                        track={item.track}
                        trackKey={i} 
                        key={i} 
                    />
                ))}
            </BodySongs>
        </BodyContainer>
    )
};

//Key note: THIS COMPONENT IS A CHILD OF PlayerBody TAG IN Player.js
const BodyContainer = styled.div`
    padding: 30px;
    width: 100%;
    //Makes Component 80% of screen
    flex: 0.8;
    height: 100vh;
    color: #fff;
    /*Allows user to scrow through songs within dom*/
    overflow-y: overlay;
    //Purplish to black
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));

    //hides scroll bar but keeps functionality with mouse/touch
    &::-webkit-scrollbar {
        display: none;
    }
`;

const BodyInfo = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;

    & > img {
        height: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    }
`;

const BodyInfoText = styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    & > h2 {
        font-size: 48px;
        margin-bottom: 10px;
    }

    & > p{ 
        font-size: 14px;
    }
`;

const BodySongs = styled.div`
    margin: 20px -30px;
`;

const BodyIcons = styled.div`
    display: flex;
    align-items: center;
    & > .MuiSvgIcons-root {
        margin-right: 20px;
    }
`;

export default Body

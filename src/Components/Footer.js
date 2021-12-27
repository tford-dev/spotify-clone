import React, {useEffect, useState} from 'react';
import {useStateValue} from "../ContextApi/StateProvider"
import styled from 'styled-components';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {Grid, Slider} from "@material-ui/core";
//icons.css is mainly for styling icons
import "./icons.css";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://upload.wikimedia.org/wikipedia/en/0/01/Suicide_Silence_-_The_Cleansing.jpg" alt="" />
                <FooterSongInfo>
                    <h4>Unanswered</h4>
                    <p>Suicide Silence</p>
                </FooterSongInfo>
            </FooterLeft>

            <FooterCenter>
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className ="footer__icon" />
                <PlayCircleOutlineIcon fontSize='large' className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </FooterCenter>

            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-sliding" />
                    </Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    //Keeps footer at bottom of page
    bottom: 0;
    height: 65px;
    width: 98%;
    background-color: #282828;
    padding: 20px;
`;

const FooterLeft = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    width: 300px;
    //Left takes 30% of footer
    flex: 0.3;
    & > img {
        height: 60px;
        width: 60px;
        margin-right: 20px;
        //object-fit: contain keeps aspect ratio
        object-fit: contain;
    }
`;

const FooterCenter = styled.div`
    //Center takes 40% of footer
    flex: 0.4;
    padding: 0 100px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
`;

const FooterRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    //Right takes 30% of footer
    flex: 0.3;
    & * .MuiSlider-root {
        color: green;
    }
`;

const FooterSongInfo = styled.div`
    & > h4 {
        margin-bottom: 5px;
    }

    & > p {
        font-size: 12px;
    }
`;

export default Footer

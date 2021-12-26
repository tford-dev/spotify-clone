import React from 'react';
import styled from "styled-components";
import Header from "./Header.js";
import { useStateValue } from '../ContextApi/StateProvider.js';

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
                    <h2>On Repeat</h2>
                    {/*If on_repeat state is filled, display description*/}
                    <p>{on_repeat?.description}</p>
                </BodyInfoText>
            </BodyInfo>

            <BodySongs>
                <BodyIcons>
                
                </BodyIcons>
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
    //Purplish to black
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
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

`;

const BodyIcons = styled.div`

`;

export default Body

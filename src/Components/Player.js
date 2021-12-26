import React from 'react'
import styled from "styled-components";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({spotify}) => {
    return (
        <PlayerContainer>
            {/*Holds Sidebar and Body*/}
            <PlayerBody>
                <Sidebar />
                <Body spotify={spotify} />
            </PlayerBody>
            <Footer />
        </PlayerContainer>
    )
};

const PlayerContainer = styled.div`

`;

const PlayerBody = styled.div`
    display: flex;
`;

export default Player

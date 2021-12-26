import React from 'react';
import styled from "styled-components";
import Header from "./Header.js";

const Body = ({spotify}) => {
    return (
        <BodyContainer>
            {/*Prop drilling*/}
            <Header spotify={spotify} />
        </BodyContainer>
    )
};

//Key note: THIS COMPONENT IS A CHILD OF PlayerBody TAG IN Player.js
const BodyContainer = styled.div`
    //Makes Component 80% of screen
    flex: 0.8;
    height: 100vh;
    color: #fff;
    //Purplish to black
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
`;

export default Body

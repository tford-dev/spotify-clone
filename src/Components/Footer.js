import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <h1>Footer</h1>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
    position: fixed;
    //Keeps footer at bottom of page
    bottom: 0;
    height: 65px;
    width: 100%;
    background-color: #282828;
    padding: 20px;
`

export default Footer

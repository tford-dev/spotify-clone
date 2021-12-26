import React from 'react';
import styled from "styled-components";
import { loginUrl } from '../spotify';

const Login = () => {
    return (
        <LoginContainer>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
			{/*Login with spotify button*/}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: grid;
    place-items: center; 
    height: 100vh;
    background-color: black;

    & > img {
        width: 100%
    }

    & > a {
        padding: 20px;
        border-radius: 99px;
        background-color: #1db954;
        font-weight: 650;
        color: #fff;
        text-decoration: none;
    }
`;

export default Login

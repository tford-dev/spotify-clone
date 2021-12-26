import React from 'react';
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useStateValue } from '../ContextApi/StateProvider';

const Header = () => {
    //Grabs user from state
    const [{user}, dispatch] = useStateValue();

    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input
                    placeholder='Search for Artists, Songs, or Podcasts'
                    type='text'
                />
            </HeaderLeft>
                {/*IF there is a user signed in, display their profile pic or url, otherwise display user name for alt*/}
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                {/*IF there is a user signed in, display their name.*/}
                <h4>{user?.display_name}</h4>
            <HeaderRight>
            
            </HeaderRight>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const HeaderLeft = styled.div`
    //Component takes 50% of space in container
    flex: 0.5;
    min-width: 70px;
    display: flex;
    background-color: #fff;
    color: gray;
    border-radius: 30px;
    padding: 10px;
    align-items: center;

    & > input {
        border: none;
        width: 100%;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;

    & > h4 {
        margin-left: 10px;
    }
`;


export default Header

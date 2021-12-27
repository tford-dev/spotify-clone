/* eslint-disable */
import React from 'react'
import styled from 'styled-components';

const SidebarOptions = ({title, Icon}) => {
    return (
        <SidebarOptionsContainer>
            {/*If there is an Icon, then render and style*/}
            {Icon && <Icon style={{
                paddingLeft: 10,
                paddingTight: 10,
            }} />}
            {/*If there is an icon, render a bold title, if not, render p tag title.
            P tag titles are for playlist/genre links in side bar*/}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </SidebarOptionsContainer>
    )
}

const SidebarOptionsContainer = styled.div`
    display: flex;
    //Puts elements in container onto the same line
    align-items: center;
    color: grey;
    height: 40px;
    cursor: pointer;
    //Speed at which hover is activated
    transition: 150ms color ease-in;

    &:hover {
        color: #fff;
    }

    & > p {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
    }

    & > h4 {
        margin-left: 10px;
    }
`;

export default SidebarOptions

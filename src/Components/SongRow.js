import React from 'react'
import styled from "styled-components";
import "./icons.css";

//Props passed down from Body.js
const SongRow = ({track}) => {
    return (
        <SongRowContainer>
            <img className="songRow__album" src={track.album.images[0].url} alt={track.name}/>
            <SongRowInfo>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </SongRowInfo>
        </SongRowContainer>
    )
};

const SongRowContainer = styled.div`
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: #fff;

    &:hover {
        cursor: pointer;
        background-color: black;
        opacity: 0.8;
    }
`;

const SongRowInfo = styled.div`
    margin-left: 20px;

    & > h1 {
        font-size: 16px;
    } 
    & > p {
        font-size: 14px;
        margin-top: 3px;
        color: gray;
    }
`;

export default SongRow

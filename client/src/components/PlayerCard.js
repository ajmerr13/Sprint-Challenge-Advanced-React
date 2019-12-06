import React from "react";
import styled from "styled-components";

const Wrapper = styled.div `
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: 1fr 1fr;
    margin-left: 15rem
`

const CardWrapper = styled.div `
    text-align: center;
    background-color: orange;
    width: 20vw;
    margin-top: 5%;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
`;

function PlayerCard(props) {
    console.log ("PlayerCard: Props: ", props);

    return (
        <Wrapper>
            {
                props.players.map(player => (
                    <CardWrapper key ={player.id}>
                        <h1>
                            {player.name}
                        </h1>
                        <p>
                            {player.country}
                            </p>
                            <p>
                           Searches: {player.searches}
                        </p>
                    </CardWrapper>
                ))
            }
        </Wrapper>
    )
};

export default PlayerCard;
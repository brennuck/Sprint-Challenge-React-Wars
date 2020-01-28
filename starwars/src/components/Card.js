import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
    background: black;
    width: 300px;
    display: flex;
    flex-direction: column;
`

const Card = props => {
    return (
        <Wrapper>
            <h2> {props.name} </h2>
            <h3>Height: {props.height} </h3>
            <h3>Mass: {props.mass} </h3>
            <h3>Hair Color: {props.hair_color} </h3>
            <h3>Skin Color: {props.skin_color} </h3>
        </Wrapper>
    )
}

export default Card;
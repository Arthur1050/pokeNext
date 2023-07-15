"use client";

import { styled } from "styled-components";

export const CardPokemonDiv = styled.div`
    border: #d3d3d3 1px solid;
    border-radius: .5rem;
    flex-grow: 1;
    padding: .75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    img {
        transition: .2s transform;
    }
    &:hover img {
        transform: scale(1.1);
    }
`
"use client";

import { styled } from "styled-components";

export const SideMenu = styled.aside`
    padding: .5rem 0;
    border-radius: .5rem;
    background-color: #101314;
    position: relative;
    li {
        position: relative;
        display: flex;
        align-items: center;
        padding: .375rem .5rem;
        gap: .5rem;
        color: #fff;
        cursor: pointer;
        transition: .2s backdrop-filter;
        &:hover {
            backdrop-filter: brightness(1.4);
        }
    }
    div {
        background-color: #DE1537;
        position: absolute;
        width: 100%;
        transition: .2s top, .2s height;
    }
    hr {
        opacity: .05;
    }
`
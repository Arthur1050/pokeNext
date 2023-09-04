"use client"

import { css, styled } from "styled-components"

export const ModalLeftRightDiv = styled.div<{$view?:boolean}>`
    animation: ModalLeftRight forwards .2s;
    background-color: #fff;
    position: absolute;
    margin-inline: auto;
    transition: .2s all;
    max-width: 640px;
    border-radius: 0 2rem 2rem 0;
    left: 0;
    height: 100vh;
    @keyframes ModalLeftRight {
        from {
            width: 0vw;
        } to {
            width: 47vw;
        }
    }
`
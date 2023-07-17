"use client"

import { css, styled } from "styled-components"

export const ModalLeftRightDiv = styled.div<{$view:boolean}>`
    width: 0vw;
    max-width: 640px;
    background-color: #fff;
    border-radius: 0 2rem 2rem 0;
    position: absolute;
    margin-inline: auto;
    left: 0;
    height: 100vh;
    transition: .2s all;
    &.viewModal {
        width: 47vw;
    }
    ${props => props.$view && css`
    `}
`
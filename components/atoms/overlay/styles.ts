import { css, styled } from "styled-components";

export const OverlayDiv = styled.div<{$view:boolean}>`
    background-color: rgb(0 0 0 / 0);
    inset: 0;
    position: absolute;
    animation: showOverlay .2s forwards;
    transition: .2s background;
    pointer-events: none;
    ${props => props.$view && css`
        pointer-events: unset;
        background-color: rgb(0 0 0 / 0.75);
    `}
`
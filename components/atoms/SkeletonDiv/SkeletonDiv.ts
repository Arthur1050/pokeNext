"use client"
import { styled } from "styled-components";

export const SkeletonDiv = styled.div`
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 85%);
        }
        100% {
            background-color: hsl(200, 20%, 94%);
        }
    }
`
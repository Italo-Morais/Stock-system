import styled from "styled-components";

export const LayoutContainer = styled.div`
background: linear-gradient(to left, var(--gray-800), var(--gray-700), var(--gray-100));
background-size: 500% 100%;
animation: degrade-animado 5s infinite alternate;

@keyframes degrade-animado {
    0%{
        background-position-x: 0%;
    }
    100% {
        background-position-x: 100%;
    }
}
`
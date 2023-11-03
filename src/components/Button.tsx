import styled from '@emotion/styled'
import {GlobalColors} from '../assets/colors/GlobalColors'

export const Button = styled.button`
    background-color: ${GlobalColors.primary};
    color: ${GlobalColors.secondary};
    border-radius: 6px;
    border: none;
    transition: transform .3s ease-in-out, color .3s ease-in-out, background-color .3s ease-in-out;
    margin-top: 1rem;
    &:hover{
        background-color: ${GlobalColors.secondary};
        color: ${GlobalColors.primary};
        border: none;
        transform: scale(1.05);
    }
`
import styled from '@emotion/styled'
import { GlobalColors } from '../assets/colors/GlobalColors'

const TextFill = styled.input`
    padding: 0.5rem;
    border: none;
    outline: none;
    border-bottom: 1px solid ${GlobalColors.white};
    background-color: transparent;
    &:focus{
        background-color: ${GlobalColors.primary};
    }
    &:focus::placeholder{
        opacity: 0;
    }
`

export default TextFill
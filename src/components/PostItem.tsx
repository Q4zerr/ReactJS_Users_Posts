import styled from '@emotion/styled'
import {GlobalColors} from '../assets/colors/GlobalColors'
import { Picture } from '../components/Picture'
import { Title } from './Title'
import { Description } from './Description'

type Props = {
    picture: string;
    title: string;
    description: string;
    onClick: () => void;
}

const PostItem = ({picture, title, description, onClick} : Props) => (
    <ItemContainer onClick={onClick}>
        <Picture src={picture}/>
        <ItemContent>
            <Title>{title}</Title>
            <br/>
            <Description>{description}</Description>
        </ItemContent>
    </ItemContainer>
)

const ItemContent = styled.div`
    text-align: left;
    color: ${GlobalColors.white};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const ItemContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    background-color: ${GlobalColors.primary};
    width: 100%;
    padding: 0.5rem 1rem;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: ${GlobalColors.secondary};
    }
`

export default PostItem
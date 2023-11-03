import styled from '@emotion/styled'
import {Avatar} from './Avatar'
import {GlobalColors} from '../assets/colors/GlobalColors'

type Props = {
    avatar: string;
    name: string;
    onClick: () => void;
}

const ListItem = ({ name, avatar, onClick} : Props) => (
    <ItemContainer onClick={onClick}>
        <Avatar src={avatar}/>
        {name}
    </ItemContainer>
)

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.25rem;
    &:hover{
        background-color: ${GlobalColors.primary}
    }
`

export default ListItem
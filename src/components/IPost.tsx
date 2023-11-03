import styled from '@emotion/styled'
import PostItem from '../components/PostItem'
import { createFakePosts } from '../services/createFakePosts'
import { useState, useMemo } from 'react'
import { Button } from './Button'
import TextFill from './Textfield'
import { usePosts } from '../hooks/usePosts'

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50vw;
`

const FieldContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

function IPost(){
    const [search, setSearch] = useState('')
    const { posts, setPosts, deletePost } = usePosts();

    // const filteredPosts = useMemo(() => {
    //     if(!search) return posts
    // })

    const handlePost = () => {
        setPosts([...posts, ...createFakePosts(1)])
    }

    return(
        <div>
            <PostContainer>
                {posts.map(({id, picture, title, description}) => (
                    <PostItem key={id} picture={picture} title={title} description={description} onClick={() => deletePost(id)}/>
                ))}
            </PostContainer>
            <FieldContainer>
                <Button onClick={handlePost}>Create a Post</Button>
                <TextFill placeholder={'Chercher un post'} onChange={(e) => setSearch(e.target.value)} />
            </FieldContainer>
        </div>
    )
}

export default IPost
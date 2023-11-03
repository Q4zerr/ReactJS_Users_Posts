import { useEffect, useState } from 'react';
import {Post} from '../models/Post'
import { fetchPosts } from '../services/posts/api';
import { transformPost } from '../services/posts/utils';

export const usePosts = () => {
    const [posts, setPosts] = useState<Post []>([])

    useEffect(() => {
        const handleFetchPosts = async () => {
            const result = await fetchPosts();
            const transformed = result.posts.map(transformPost);
            setPosts(transformed);
        }

        handleFetchPosts();
    }, [])

    const deletePost = (id: number) => {
        const nextPosts = posts.filter((post) => post.id !== id)
        setPosts(nextPosts)
    }

    return {posts, setPosts, deletePost};
}
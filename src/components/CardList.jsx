import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Card from './Card';

const CardList = () => {
    const dispatch = useDispatch();
    const { loading, posts, currentPage } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-list">
                    {currentPosts.map(post => (
                        <Card key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardList;

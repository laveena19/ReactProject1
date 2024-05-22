import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/actions';

const Card = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => dispatch(removePost(post.id))} style={{color: 'red'}}>X</button>
        </div>
    );
};

export default Card;

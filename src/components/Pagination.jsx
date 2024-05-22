import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const dispatch = useDispatch();
    const { posts, currentPage } = useSelector(state => state.posts);
    const totalPages = Math.ceil(posts.length / 6);

    const handlePageChange = (pageNumber) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNumber });
    };

    return (
        <div className="pagination">
            {[...Array(totalPages).keys()].map(number => (
                <button
                    key={number + 1}
                    onClick={() => handlePageChange(number + 1)}
                    className={currentPage === number + 1 ? 'active' : ''}
                >
                    {number + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

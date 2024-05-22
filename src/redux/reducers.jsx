import { combineReducers } from 'redux';
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    REMOVE_POST
} from './actions';

const initialState = {
    loading: false,
    posts: [],
    error: null,
    currentPage: 1
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, loading: false, error: action.error };
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;

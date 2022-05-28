import { combineReducers } from 'redux';
import { alertReducer } from './alert/alert.reducer';
import { authReducer } from './auth/auth.reducer';
import { categoryReducer } from './category/category.reducer';
import { commentReducer } from './comment/comment.reducer';
import { postsReducer } from './posts/posts.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    category: categoryReducer,
    posts: postsReducer,
    comment: commentReducer,
    user: userReducer
});

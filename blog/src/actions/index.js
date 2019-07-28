import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPost = () => async dispatch => {
        const response =  await jsonPlaceHolder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response });
};
 
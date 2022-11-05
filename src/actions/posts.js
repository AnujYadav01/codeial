import { UPDATE_POST } from './actionType';
export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://www.omdbapi.com/?t=hero';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POST,
    posts,
  };
}

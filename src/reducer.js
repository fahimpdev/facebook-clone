export const initialState = {
  user: null,
  posts: [], // Initialize an empty posts array
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.post, ...state.posts], // Add new post to the beginning
      };
    default:
      return state;
  }
};

export default reducer;

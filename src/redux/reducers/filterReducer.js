const initialState = {
  searchQuery: "",
  category: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default filterReducer;

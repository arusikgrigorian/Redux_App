const recipeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_RECIPE':
      return [...state, { name: payload.name }];

    default:
      return state;
  }
};

export default recipeReducer;

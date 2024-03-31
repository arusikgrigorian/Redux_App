const ingredientReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_INGREDIENT':
      return [
        ...state,
        {
          recipe: payload.recipe,
          name: payload.name,
          quantity: payload.quantity,
        },
      ];

    default:
      return state;
  }
};

export default ingredientReducer;

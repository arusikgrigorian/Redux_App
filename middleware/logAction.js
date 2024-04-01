const logAction = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.log(`Action: ${action.type}`);

      return next(action);
    };
  };
};

export default logAction;

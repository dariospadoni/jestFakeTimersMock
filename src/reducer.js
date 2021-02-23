const today = new Date();

export const initialState = {
  today
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}


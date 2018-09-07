import { SLIDE_LIST } from "../actions/listActions";

const initialState = {
      isLeftSide: true,
      size: 6,
      videos: [],
}

const listReducer = (state = initialState, action) => {
      switch (action.type) {
            case SLIDE_LIST:
                  return {
                        ...state,
                        isLeftSide: !state.isLeftSide,
                  }
            default:
                  return state;
      }
}

export default listReducer;
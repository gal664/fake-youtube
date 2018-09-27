import { HOMEPAGE,VIDEOPAGE,CHANNELPAGE } from "../actions/contentActions";

const initialState = {
      componentToDisplay: "homepage",
}

const contentReducer = (state = initialState, action) => {
      switch (action.type) {
            case HOMEPAGE:
                  return {
                        ...state,
                        componentToDisplay: "homepage",
                  }
            case VIDEOPAGE:
                  return {
                        ...state,
                        componentToDisplay: "videoPage",
                  }
            case CHANNELPAGE:
                  return {
                        ...state,
                        componentToDisplay: "channelpage",
                  }
            default:
                  return state;
      }
}

export default contentReducer;
import { Action } from 'redux';

interface ActionWithPayload extends Action {
  payload?: any;
}

const initialState = {
  welcomeText: 'Welcome to react native template from IPlug Organization',
};

export default (state = initialState, action: ActionWithPayload) => {
  switch (action.type) {
    // Model example
    case 'setWelcomeText':
      return { ...state, welcomeText: action.payload.wecomeText };

    // Don't change the code below
    default:
      return state;
  }
};

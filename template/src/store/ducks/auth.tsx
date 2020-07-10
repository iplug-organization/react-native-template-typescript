import { Action } from 'redux';	

// action reducer interface	
interface ActionWithPayload extends Action {	
  payload?: any;	
}	

// Interfaces is used for screens	
interface StateProps {	
  welcomeText: string;	
}	

interface IConnectProps {	
  auth: {	
    welcomeText: string;	
  };	
}	

// Types for screen	
export type screenProps = StateProps;	

export type connectProps = IConnectProps;	

// Auth Reducer	
const initialState = {	
  welcomeText: 'Welcome to react native template from IPlug Organization',	
};	

export default (state = initialState, action: ActionWithPayload) => {	
  switch (action.type) {	
    // Model example	
    case 'setWelcomeText':	
      return { ...state, welcomeText: action.payload.wecomeText };	

    // Don't change the default	
    default:	
      return state;	
  }	
};	

// SetTexts	

// setWelcomeText is a example (setWelcomeText é um exemplo)	
export const setWelcomeText = (welcomeText: string) => {	
  return {	
    type: 'setWelcomeText',	
    payload: {	
      welcomeText,	
    },	
  };	
};
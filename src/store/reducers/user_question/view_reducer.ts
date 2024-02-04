import {ViewAction, ViewState, ViewActionTypes} from "../../types/user_question/view_type";

const initialState: ViewState = {
    value: 'block'
}

export const viewReducerUserQuestion = (state: ViewState = initialState, action: ViewAction): ViewState => {
    switch (action.type) {
        case ViewActionTypes.SET_VALUE:
            return { ...state, value: action.payload };
        default:
            return state;
    }
};
import {ValueAction, ValueActionTypes, ValueState} from "../../types/navigation/value_type";

const initialState: ValueState = {
    value: 'active_navigation'
}

export const valueReducer = (state: ValueState = initialState, action: ValueAction): ValueState | null => {
    switch (action.type) {
        case ValueActionTypes.SET_VALUE:
            return { ...state, value: action.payload };
        default:
            return state;
    }
};
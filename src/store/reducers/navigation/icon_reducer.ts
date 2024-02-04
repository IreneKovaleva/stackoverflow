import {IconState, IconActionTypes, IconAction} from "../../types/navigation/icon_type";

const initialState: IconState = {
    value: 'section_opened'
}

export const iconReducer = (state: IconState = initialState, action: IconAction): IconState | null => {
    switch (action.type) {
        case IconActionTypes.SET_VALUE:
            return { ...state, value: action.payload };
        default:
            return state;
    }
};
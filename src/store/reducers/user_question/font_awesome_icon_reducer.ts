import {FontAwesomeIconState, FontAwesomeIconAction, FontAwesomeIconActionTypes} from "../../types/user_question/font_awesome_icon_type"
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const initialState: FontAwesomeIconState = {
    icon: faCaretUp
}

export const fontAwesomeIconReducer = (state: FontAwesomeIconState = initialState, action: FontAwesomeIconAction): FontAwesomeIconState => {
    switch (action.type) {
        case FontAwesomeIconActionTypes.SET_VALUE:
            return { ...state, icon: action.payload };
        default:
            return state;
    }
};
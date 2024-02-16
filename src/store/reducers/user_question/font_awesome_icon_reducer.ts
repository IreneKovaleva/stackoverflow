import {FontAwesomeIconState, FontAwesomeIconAction, FontAwesomeIconActionTypes} from "../../types/user_question/font_awesome_icon_type"
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const initialState: FontAwesomeIconState = {
    font_awesome_icon: faCaretDown
}

export const fontAwesomeIconReducer = (state: FontAwesomeIconState = initialState, action: FontAwesomeIconAction): FontAwesomeIconState => {
    switch (action.type) {
        case FontAwesomeIconActionTypes.SET_VALUE_ICON:
            return { ...state, font_awesome_icon: action.payload };
        default:
            return state;
    }
};
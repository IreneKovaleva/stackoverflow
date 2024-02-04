import {FontAwesomeIconStateAnswers, FontAwesomeIconActionTypesAnswers, FontAwesomeIconActionAnswers} from "../../../types/api/answers/font_awesome_icon_answers"
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const initialState: FontAwesomeIconStateAnswers = {
    icon: faCaretUp
}

export const fontAwesomeIconReducerAnswers = (state: FontAwesomeIconStateAnswers = initialState, action: FontAwesomeIconActionAnswers): FontAwesomeIconStateAnswers => {
    switch (action.type) {
        case FontAwesomeIconActionTypesAnswers.SET_VALUE:
            return { ...state, icon: action.payload };
        default:
            return state;
    }
};
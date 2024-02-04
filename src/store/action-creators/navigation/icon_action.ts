import {IconAction, IconActionTypes} from "../../types/navigation/icon_type";

export const setIcon = (newValue: string): IconAction => ({
    type: IconActionTypes.SET_VALUE,
    payload: newValue,
});
import {ValueAction, ValueActionTypes, ValueState} from "../../types/navigation/value_type";

export const setValue = (newValue: string): ValueAction => ({
    type: ValueActionTypes.SET_VALUE,
    payload: newValue,
});
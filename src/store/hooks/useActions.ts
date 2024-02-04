import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreators from "../action-creators/index"


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators, dispatch)
}
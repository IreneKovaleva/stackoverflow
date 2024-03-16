import { useNavigate } from 'react-router-dom';
import {useActions} from "../store/hooks/useActions";

export const useRedirectTags = () => {
    const navigate = useNavigate();
    const { setQuestionsTag } = useActions();

    const redirect = async (tag: string) => {
        await setQuestionsTag(tag)
        navigate('/')
    }

    return redirect;
};



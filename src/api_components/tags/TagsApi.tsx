import React, { useEffect } from 'react';
import "./TagsApi.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import TagsWiki from "./subcomponents/TagsWiki";


const TagsApi = () => {
    const {tags, loading, error, page, sort, order} = useTypedSelector(state => state.api_tags)
    const {fetchTagsApiEndpoint, setQuestionsTag} = useActions();


    useEffect(() => {
        if (page && sort && order) {
            fetchTagsApiEndpoint(page, order, sort);
        }
    }, [page, order, sort])

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setQuestionsTag((event.target as Element).id)
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div className='tags_content'>{tags.map((element,index) =>
                <div className='tags_content_tags' key={index}>
                    <div className='tags'>
                        <div className='tags_tag margin'>
                            <div className='tags_tag_content'>
                                <div className='tags_tag_element'  onClick={handleClick} id={element.name}>{element.name}</div>
                            </div>
                        </div>

                        <div className='tags_views'>
                            <FontAwesomeIcon className='tags_icon_eye margin' icon={faEye}></FontAwesomeIcon>
                            <div className='margin'>{element.count}</div>
                        </div>
                    </div>
                    <div className='tags_wiki'>
                        <TagsWiki name = {encodeURIComponent(element.name)} />
                    </div>
                </div>
            )}
            </div>
        </div>
    )

}

export default TagsApi;
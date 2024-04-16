import React, { useEffect } from 'react';
import "./TagsApi.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import TagsWiki from "./subcomponents/TagsWiki";
import Pagination from "../../components/pagination/Pagination";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {numberFormat} from "../../services/numberFormat";


const TagsApi = () => {
    const navigate:NavigateFunction = useNavigate();
    const {fetchTagsApiEndpoint, setQuestionsTag, setTotalPages} = useActions();
    const {tags, loading, error, sort, order, tag, total, page_size} = useTypedSelector(state => state.api_tags)
    const {page, total_pages} = useTypedSelector(state => state.pages)

    useEffect(() => {
        if (page && sort && order) {
            fetchTagsApiEndpoint(page, order, sort, tag);
        }
        const totalPageNumber = Math.ceil(Number(total) / Number(page_size));
        if (totalPageNumber < 25) {
            setTotalPages(totalPageNumber);
        }

    }, [page, order, sort, total, page_size, total_pages])

    const handleClick = async (tag: string) => {
        await setQuestionsTag(tag);
        navigate('/')
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div className='tags_content'>{tags.map(element =>
                <div className='tags_content_tags' key={element.count} onClick={() => handleClick(element.name)} >
                    <div className='tags_content_tag'>
                        <div className='tags_tag'>
                            <div className='tags_tag_name_block'>
                                <div className='tags_tag_name'>{"#" + element.name}</div>
                            </div>
                        </div>
                        <div className='tags_views margin'>
                            <FontAwesomeIcon className='tags_icon_eye margin' icon={faEye}></FontAwesomeIcon>
                            <div className='margin'>{numberFormat(element.count)}</div>
                        </div>
                    </div>
                    <div className='tags_wiki'>
                        <TagsWiki name = {encodeURIComponent(element.name)} />
                    </div>
                </div>
            )}
            </div>
            <div>{total && total > 1 && <Pagination />}</div>
        </div>
    )
}

export default TagsApi;
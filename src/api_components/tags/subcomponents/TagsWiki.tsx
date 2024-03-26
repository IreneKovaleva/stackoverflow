import React, { useState, useEffect } from 'react';
import {Description} from "../../../store/types/api/tags/subcomponents/tagsDescription";
import parse from "html-react-parser";

const TagsWiki:React.FC<Description> = ({name}) => {
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [description, setTagDescription] = useState<any[]>([]);

    useEffect(() => {
        let link_wiki =`https://api.stackexchange.com/2.3/tags/${name}/wikis?site=stackoverflow`;
        fetch(link_wiki)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTagDescription(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [name]);

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div>{description.map((element,index) =>
                <div key={index}>
                    <div>{parse(element.excerpt)}</div>
                </div>
            )}
            </div>
        </div>
    )
}

export default TagsWiki;
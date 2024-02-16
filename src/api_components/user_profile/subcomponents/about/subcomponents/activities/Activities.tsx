import React, { useState, useEffect } from 'react';
import parse from "html-react-parser";
import {creationDate} from "../../../../../../services/date_format";

interface apiEndpointLink {
    link: string
}

const Activities:React.FC<apiEndpointLink>  = ({link}) => {
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);


    useEffect( () => {
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setItems(result.items.slice(0,5))
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [link]);



    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div className='profile_block'>{topItems.map((element, index) =>
            <div key={index} className='profile_elements_top rows_elements'>
                <div className='profile_elements_score size_text'>
                    <div className='txt'>{element.score}</div>
                </div>
                <div className='profile_elements_title size_text'>{parse(element.title)}</div>
                <div className='profile_elements_date size_text'>{creationDate(element.creation_date)}</div>

            </div>
        )}</div>
    )
}

export default Activities
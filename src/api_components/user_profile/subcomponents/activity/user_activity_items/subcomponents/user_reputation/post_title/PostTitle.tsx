import React, {useState, useEffect} from "react";

interface id_type {
    post_id: number;
}

const PostTitle:React.FC<id_type> = ({post_id}) => {
    const [title, setTitle] = useState<string>('');

    useEffect( () => {
        const post_title =`https://api.stackexchange.com/2.3/posts/${post_id}?order=desc&sort=activity&site=stackoverflow&filter=!aydfieqi1*(qu6`;
        fetch(post_title)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.items && result.items.length > 0) {
                        setTitle(result.items[0].title);
                    }
                },
            )
    }, [post_id]);

    return (
        <div>
            <div className='reputation_row_element reputation_title reputation_txt'>{title}</div>
        </div>
    )
}
export default PostTitle;
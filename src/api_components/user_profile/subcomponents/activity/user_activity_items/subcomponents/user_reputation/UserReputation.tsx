import React, {useEffect, useState} from "react";
import "../../UserActivityItems.css";
import PostTitle from "./post_title/PostTitle";
import {
    ItemsType
} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/subcomponents/user_reputation/reputation_types";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";
import parse from "html-react-parser";


const UserReputation:React.FC<Structure> = ({items}) => {
    const [reputationItems, setReputationItems] = useState<any>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getToday = (date: Date): string => {
        const yyyy: number = date.getFullYear();
        let mm: number | string = date.getMonth() + 1;
        let dd: number | string = date.getDate();

        if (dd < 10) { dd = '0' + dd; }
        if (mm < 10) { mm = '0' + mm; }

        return yyyy + '-' + mm + '-' + dd;
    }


    useEffect(() => {
        const groupedData: { [key: string]: any[] } = {};
        const today = new Date();

        items.forEach((item) => {
            const date = new Date(parseInt(item.creation_date) * 1000);
            let dayKey = getToday(date);
            let yesterday = new Date(today.getTime() - 86400000);
            let afterYesterday = new Date(today.getTime() - (86400000 * 2));

            if (dayKey === getToday(today)) {
                dayKey = 'Today';
            }else if (dayKey === getToday(yesterday)) {
                dayKey = 'Yesterday';
            } else if (dayKey === getToday(afterYesterday)) {
                dayKey = '2 Days Ago';
            }

            if (!groupedData[dayKey]) {
                groupedData[dayKey] = [];
            }
            groupedData[dayKey].push(item);
        });

        const sumReputation = (items:ItemsType[]) => {
            return items.reduce((sum, item) => sum + item.reputation_change, 0);
        };

        Object.keys(groupedData).forEach((key) => {
            const sum = sumReputation(groupedData[key]);
            groupedData[key].push({
                total_sum: sum
            });
        });
        setReputationItems(groupedData);
        setIsLoaded(true);

    }, [items])


    const type = (el:string) => {
        if (el) {
            return el.replace(/^post_|^answer_|^user_/g, '');
        }
        return '';
    }

    const sum = (element: ItemsType[]) => {
        let newElement = element[element.length - 1];
        if (newElement.hasOwnProperty('total_sum')) {
            return newElement['total_sum'];
        }
        return 0;
    }

    const check = (el: number): string => {
        return el > 0 ? `+${el}` : `${el}`;
    };

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO REPUTATION DATA</div>
        )
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }
    return (
        <div>
            <div>{Object.keys(reputationItems).map((element, index) =>
                <div key={index + 'reputation'} className='user_items_block'>
                    <div className='reputation_row reputation_head'>
                        <div className='reputation_row_element value'>+{sum(reputationItems[element])}</div>
                        <div className='reputation_row_element'>{parse("" + element)}</div>
                    </div>
                    <div>{reputationItems[element].filter((item: ItemsType) => !item.hasOwnProperty('total_sum')).map((item: ItemsType, index:number) => (
                        <div className='reputation_row_grid reputation_back' key={`${item.post_id}${index}`}>
                            <div className='reputation_row_element reputation_txt'>{type(item.reputation_history_type)}</div>
                            <div className='reputation_row_element reputation_txt' onClick={() => check(item.reputation_change)}>{check(item.reputation_change)}</div>
                            {item.post_id && <PostTitle post_id={item.post_id}/>}
                            <div className='reputation_row_element reputation_width reputation_txt'>{element}</div>
                        </div>
                    ))}
                    </div>
                </div>
            )}</div>
        </div>
    )}
export default UserReputation;
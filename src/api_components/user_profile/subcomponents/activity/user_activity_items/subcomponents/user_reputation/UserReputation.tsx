import React, {useEffect, useState} from "react";
import "../../UserActivityItems.css";
import PostTitle from "./post_title/PostTitle";
import {
    ItemsType
} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/subcomponents/user_reputation/reputation_types";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";


const UserReputation:React.FC<Structure> = ({items}) => {
    const [reputationItems, setReputationItems] = useState<any>([]);

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
            let dayKey = getToday(date); // 2023-07-01
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
    }, [items])


    const type = (el:string) => {
        return el.replace(/^post_|^answer_|^user_/g, '');
    }

    const sum = (element: ItemsType[]) => {
        return element.map((item) => {
            if (item.hasOwnProperty('total_sum')) {
                return item.total_sum
            }
            return 0
        })
    }
    const check = (el: number): string => {
        return el > 0 ? `+${el}` : `${el}`;
    };

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO REPUTATION DATA</div>
        )
    }
    return (
        <div>
            <div>{Object.keys(reputationItems).map((element, index) =>
                <div key={index + 'reputation'} className='items_box'>
                    <div className='reputation_row reputation_head'>
                        <div className='reputation_row_element value'>+{sum(reputationItems[element])}</div>
                        <div className='reputation_row_element'>{element}</div>
                    </div>
                    <div>{reputationItems[element].slice(0, -1).map((item: ItemsType) => (
                        <div className='reputation_row_grid reputation_back' key={`${item.post_id}-rep`}>
                            <div className='reputation_row_element reputation_txt'>{type(item.reputation_history_type)}</div>
                            <div className='reputation_row_element reputation_txt' onClick={() => check(item.reputation_change)}>{check(item.reputation_change)}</div>
                            <PostTitle post_id={item.post_id}/>
                            <div className='reputation_row_element reputation_width reputation_txt'>{element}</div>
                        </div>
                    ))}
                    </div>
                </div>
            )}</div>
        </div>
    )}
export default UserReputation;
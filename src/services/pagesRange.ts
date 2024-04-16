import _ from 'lodash';

// const total = 10;
// const page = 5;
// const limit = 10;
// const siblings = 1;
// const pageInLine = 3;

export const pagesRange = (total: number, page: number, limit: number, siblings: number, pageInLine: number) => {

    let total_page = pageInLine + siblings; //4

    if (total_page >= total) {
        return _.range(1, total_page + 1);
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1); //4
    let rightSiblingsIndex = Math.min(page + siblings, total); //6

    let showLeftDots = leftSiblingsIndex > 2; //true
    let showRightDots = rightSiblingsIndex < total - 2; // false

    if(!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, "...", total];
    } else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 + 2 * siblings; //5
        let rightRange = _.range(total - rightItemsCount + 1, total + 1); //6, 7, 8, 9, "....", 11
        return [1, "...", ...rightRange]; //1, "...", 2,3,4,5,6,7,8,9,10
    } else {
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "...", ...middleRange, "....", total]
    }
}
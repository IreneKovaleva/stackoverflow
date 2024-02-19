import _ from 'lodash';

export const pages_range = (total: number, page: number, limit: number, siblings: number, pageInLine: number) => {

    let total_page = pageInLine + siblings;

    if (total_page >= total) {
        return _.range(1, total_page + 1);
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, total);

    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < total - 2;

    if(!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, "...", total];
    } else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 + 2 * siblings;
        let rightRange = _.range(total - rightItemsCount + 1, total + 1);
        return [1, "...", ...rightRange];
    } else {
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "...", ...middleRange, "....", total]
    }
}
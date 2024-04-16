import '@testing-library/jest-dom/extend-expect';
import {creationDate} from "../../services/creationDate";


describe('test creationDate service function', () => {
    let date;
    test("functions should return date in the format dd-m-yyyy | hh:mm", () => {
        date = 1713101961;
        expect(creationDate(date)).toBe('14-4-2024 | 16:39')
    })
    test("function should return the format dd-m-yyyy | hh:m from the Date object", () => {
        date = new Date("Sun Apr 14 2024 16:39:21 GMT+0300 (Eastern European Summer Time)");
        expect(creationDate(date)).toBe('14-4-2024 | 16:39')
    })
});

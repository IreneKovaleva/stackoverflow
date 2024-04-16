import '@testing-library/jest-dom/extend-expect';
import {dateMonths} from "../../services/dateMonths";


describe('test dateMonths service function', () => {
    test("function should return the difference between current date and user registration date in unix format", () => {
        const today = new Date();
        const unixTimestamp = Math.floor(today.getTime() / 1000);
        expect(dateMonths(unixTimestamp)).toBe(' 0 year(s) 0 months')
    })
    test("function should return the difference between current date and user registration date in ISO 8601 timestamp", () => {
        const today = new Date();
        expect(dateMonths(today)).toBe(' 0 year(s) 0 months')
    })
});

import '@testing-library/jest-dom/extend-expect';
import {pagesRange} from "../../services/pagesRange";


describe('test pagesRange service function', () => {
    test("show both left and right dots", () => {
        const total = 5;
        const page = 3;
        const limit = 10;
        const siblings = 1;
        const pageInLine = 3;
        expect(pagesRange(total, page, limit, siblings, pageInLine)).toEqual([1,"...", 2,3,4,"....",5]);
    });

    test("show left dots only", () => {
        const total = 10;
        const page = 7;
        const limit = 10;
        const siblings = 1;
        const pageInLine = 3;
        expect(pagesRange(total, page, limit, siblings, pageInLine)).toEqual([1, "...", 6, 7, 8, 9, 10]);
    });

    test("show right dots only", () => {
        const total = 10;
        const page = 1;
        const limit = 10;
        const siblings = 1;
        const pageInLine = 3;
        expect(pagesRange(total, page, limit, siblings, pageInLine)).toEqual([1, 2, 3, 4, 5, "...", 10]);
    });
})
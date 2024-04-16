import '@testing-library/jest-dom/extend-expect';
import {numberFormat} from "../../services/numberFormat";

describe('test numberFormat service function', () => {
    let number;
    test("reformat millions to tenths", () => {
        number = 1567890;
        expect(numberFormat(number)).toBe("1.6M")
    });
    test("reformat thousands to tenths", () => {
        number = 156789;
        expect(numberFormat(number)).toBe("156.8K")
    });
    test("reformat hundredths", () => {
        number = 156;
        expect(numberFormat(number)).toBe("156")
    })
    test("reformat zero", () => {
        number = 0;
        expect(numberFormat(number)).toBe("0");
    });
    test("if not a number", () => {
        number = Number("hundred");
        expect(numberFormat(number)).toBe(NaN)
    });
});

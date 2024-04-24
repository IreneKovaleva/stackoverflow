export const numberFormat =(element: number | string) => {
    let num = Number(element);
    if (num > 1000) {
        return  num / 1000;
    } else {
        return num
    }
}
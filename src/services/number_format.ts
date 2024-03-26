export const numberFormat = (element: number) => {
    const num = Number(element);
    if (isNaN(num)) return element;

    if (num >= 1000000) {
        return (num / 1000000).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'K';
    } else {
        return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }
};
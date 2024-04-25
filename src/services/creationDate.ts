export const creationDate = (timestamp: number | Date) => {
        const date = timestamp instanceof Date ? timestamp : new Date(timestamp * 1000);
        const formattedDate: string = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;
        return formattedDate;
};

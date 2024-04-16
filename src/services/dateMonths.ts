export const dateMonths = (el: Date | number) => {
    let d1 = el instanceof Date ? new Date(el) : new Date(el * 1000);
    let d2 = new Date();
    let timeDifference = d2.getTime() - d1.getTime();
    let daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    let monthsDifference = Math.round(daysDifference / 30.44);
    if (monthsDifference < 12) {
        return " 0 year(s) " + monthsDifference + " months";
    } else {
        let years = Math.round(monthsDifference / 12);
        let remainingMonths = monthsDifference % 12;

        return " " + years + " " + "year(s) " + remainingMonths + " months";
    }
}
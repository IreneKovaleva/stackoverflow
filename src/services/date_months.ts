export const date_months = (el: Date) => {
    let d1 = new Date(el);
    let d2 = new Date();
    let timeDifference = d2.getTime() - d1.getTime();
    let daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    let monthsDifference = Math.round(daysDifference / 30.44);
    if (monthsDifference < 12) {
        return monthsDifference;
    } else {
        let years = Math.round(monthsDifference / 12);
        let remainingMonths = monthsDifference % 12;

        return " " + years + " " + "year(s)" + " " + remainingMonths + " " + "months";
    }
}
import moment from "moment/moment";

export function getCurrentDateInDDMMYYYYFormat() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1.
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
}

function getCurrentDate() {
    const today = moment();
    return today.format('DD-MM-YYYY');
}

function addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days)
    return date
}

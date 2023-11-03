import moment from 'moment/moment'

export function getCurrentDateInDDMMYYYYFormat() {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0') // Months are 0-indexed, so we add 1.
  const year = today.getFullYear()

  return `${day}-${month}-${year}`
}

export function getTimeNow(format: string = moment.defaultFormat) {
  // 'DD-MM-YYYY'
  const today = moment()
  return today.format(format)
}

export function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days)
  return date
}

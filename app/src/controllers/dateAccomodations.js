import dateformat from 'dateformat'

export const transformDate = async (date) => {
    date = new Date(date)
    date = dateformat(date, "yyyy-mm-dd")
    console.log(date)
    return date
}
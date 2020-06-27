import dateformat from 'dateformat'

export const transformDate = async (date) => {
    let dateCheckin = new Date(date)
    dateCheckin = dateformat(dateCheckin, "yyyy-mm-dd")
    console.log(dateCheckin)
    return dateCheckin
}
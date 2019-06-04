import { getYearsFromToDate, getYearsFromTo, getMonths, getMonthID } from "../utils/DateUtils"

describe('Input test set', () => {

    const monthList = {
        "Styczeń": 1, "Luty": 2, "Marzec": 3, "Kwiecień": 4, "Maj": 5, "Czerwiec": 6,
        "Lipiec": 7, "Sierpień": 8, "Wrzesień": 9, "Październik": 10, "Listopad": 11, "Grudzień": 12
    }

    test('Correct month list', () => {
        const months = getMonths()
        months.forEach(v => {
            expect(Object.keys(monthList).includes(v)).toBe(true)
        })
    })
    
    test('Correct month indexes', () => {
        Object.keys(monthList).forEach((k) => {
            expect(monthList[k] === getMonthID(k)).toBe(true)
        })
    })

})
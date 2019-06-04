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

    test('All years in range (Years to Date)', () => {
        const yearFrom = 2010
        const currentDate = new Date().getFullYear()
        const years = getYearsFromToDate(yearFrom)

        years.forEach(v => {
            expect(v <= currentDate && v >= yearFrom).toBe(true)
        })
    })

    test('Correct number of years (Years to Date)', () => {
        const yearFrom = 2010
        const currentDate = new Date().getFullYear()
        const years = getYearsFromToDate(yearFrom)
        const yearDiff = currentDate - yearFrom

        expect(years.length === yearDiff + 1).toBe(true)
    })

    test('All years in range (Years from-to)', () => {
        const yearFrom = 1800
        const yearTo = 2010
        const years = getYearsFromTo(yearFrom, yearTo)

        years.forEach(v => {
            expect(v <= yearTo && v >= yearFrom).toBe(true)
        })
    })

    test('Correct number of years (Years from-to)', () => {
        const yearFrom = 1800
        const yearTo = 2010
        const years = getYearsFromTo(yearFrom, yearTo)
        const yearDiff = yearTo - yearFrom

        expect(years.length === yearDiff + 1).toBe(true)
    })

})
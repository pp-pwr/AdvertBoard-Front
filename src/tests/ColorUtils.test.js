import { hashCode, intToRGB, stringToRGB } from "../utils/ColorUtils"

test('hashCode is int', () => {
    const exampleString = "ABC123ABC123"
    const hash = hashCode(exampleString)
    
    expect(typeof(hash) === 'number').toBe(true)
})

test('Same hashCode for same object', () => {
    const firstString = "ASQ3jtGEW()FIK#FVMDOSVJMWJ)(@$#TV$T"
    const secondString = "ASQ3jtGEW()FIK#FVMDOSVJMWJ)(@$#TV$T"

    const firstHash = hashCode(firstString)
    const secondHash = hashCode(secondString)

    expect(firstHash === secondHash).toBe(true)
})

test('Different hashCode for different object', () => {
    const firstString = "ASQ3jtGEW()FIK#FVMDOSVJMWJ)(@$#TV$T"
    const secondString = "ASQ3jtGEW()FIK#FVmDOSVJMWJ)(@$#TV$T"

    const firstHash = hashCode(firstString)
    const secondHash = hashCode(secondString)

    expect(firstHash === secondHash).toBe(false)
})

test('Int to RGB returns number', () => {
    const color = hashCode('test')
    const rgbColor = intToRGB(color)
    expect(typeof(rgbColor) === 'string').toBe(true)
})

test('Int to RGB accepts negative integers', () => {
    const rgbColor = intToRGB(-500)
})

test('(intToRGB) Color should have 6 digits', () => {
    const color = hashCode('test')
    const rgbColor = intToRGB(color)
    expect(rgbColor.length === 6).toBe(true)
})

test('Int to RGB returns same color for number', () => {
    const rgbColor = intToRGB(5000)
    const rgbColor2 = intToRGB(5000)
    expect(rgbColor === rgbColor2).toBe(true)
})

test('Int to RGB returns different color for different number', () => {
    const rgbColor = intToRGB(5000)
    const rgbColor2 = intToRGB(2000)
    expect(rgbColor === rgbColor2).toBe(false)
})

test('String to RGB returns string', () => {
    const rgbColor = stringToRGB('test')
    expect(typeof(rgbColor) === 'string').toBe(true)
})

test('(String to RGB) Color should have 6 digits', () => {
    const rgbColor = stringToRGB('test')
    expect(rgbColor.length === 6).toBe(true)
})

test('String to RGB returns same color for same string', () => {
    const rgbColor = stringToRGB('testtesttest')
    const rgbColor2 = stringToRGB('testtesttest')
    expect(rgbColor === rgbColor2).toBe(true)
})

test('String to RGB returns different color for different string', () => {
    const rgbColor = stringToRGB('testtesttest')
    const rgbColor2 = stringToRGB('tsettsettest')
    expect(rgbColor === rgbColor2).toBe(false)
})
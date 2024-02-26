export type holidayModels = holidayModel[]

export interface holidayModel {
    date: string
    localName: string
    name: string
    countryCode: string
    fixed: boolean
    global: boolean
    counties: any
    launchYear: any
    types: string[]
}
export interface HolidaySimple {
    date: string;
    name: string;
}
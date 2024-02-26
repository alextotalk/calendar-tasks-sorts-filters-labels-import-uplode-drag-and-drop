import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {holidayModels, HolidaySimple} from "../../models/holidayTypes";

const BASE_URL = 'https://date.nager.at/api/v3/PublicHolidays';

export const holidaysAPI = createApi({
    reducerPath: 'holidaysAPI/api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getHolidays: build.query<HolidaySimple[], number>({
            query: (year) => ({ url: `/${year}/ua`, }),
            transformResponse: (response: holidayModels): HolidaySimple[] => {
                return response.map(e => ({
                    date: e.date,
                    name: e.name
                }));
            }
        })
    })
});

export const { useGetHolidaysQuery } = holidaysAPI;

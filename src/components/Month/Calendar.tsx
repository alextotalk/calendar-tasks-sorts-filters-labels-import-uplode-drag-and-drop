// src/components/Calendar.tsx
import React, {useState} from 'react';
import WeekDays from "./WeekDays";
import CalendarHeader from "./CalendarHeader";
import styled from "@emotion/styled";
import {useGetHolidaysQuery} from "../../store/holidaysAPI/fetchHoliday.API";
import {useAppSelector} from "../../hooks/redux";


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    background: #fff;
`;

const Cell = styled.div<{ isCurrentMonth: boolean; isToday: boolean }>`
    border: 1px solid #ddd;
    border-radius: 5%;
    height: 100px;
    padding: 8px;
    background-color: ${(props) => (props.isToday ? 'lightpink' : props.isCurrentMonth ? 'white' : 'papayawhip')};
    color: ${(props) => (props.isCurrentMonth ? 'black' : 'gray')}; // Використовуйте сірий колір для днів не з поточного місяця                    
    text-align: center;
`;


const Calendar: React.FC<{ showHolidays: boolean }> = ({showHolidays}) => {
    


    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const onNextMonth = () => {
        setCurrentMonth(current => (current === 11 ? 0 : current + 1));
        if (currentMonth === 11) {
            setCurrentYear(current => current + 1);
        }
    };

    const onPreviousMonth = () => {
        setCurrentMonth(current => (current === 0 ? 11 : current - 1));
        if (currentMonth === 0) {
            setCurrentYear(current => current - 1);
        }
    };

    const daysInPrevMonth = getDaysInMonth(currentYear, currentMonth - 1);
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonthDisplayDays = Array.from({length: firstDayOfCurrentMonth}, (_, i) => daysInPrevMonth - i).reverse();
    const currentMonthDisplayDays = Array.from({length: daysInCurrentMonth}, (_, i) => i + 1);

    const totalCells = 42;
    const nextMonthDisplayDays = Array.from(
        {length: totalCells - prevMonthDisplayDays.length - currentMonthDisplayDays.length},
        (_, i) => i + 1
    );

    const days = [...Array(totalCells)].map((_, index) => {
        const date = new Date(currentYear, currentMonth, index - firstDayOfCurrentMonth + 1);
        return date.toISOString().slice(0, 10); // Форматуємо дату до "YYYY-MM-DD"
    });
    const isToday = (day: number) => currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate();

    const currentMonthName = new Date(currentYear, currentMonth).toLocaleString('uk-UA', {month: 'long'});




    const { isLoading, error, data } = useGetHolidaysQuery(2024);

    // Створюємо Map для зберігання свят
    const holidaysMap = React.useMemo(() => {
        const map = new Map<string, string>();
        data?.forEach(holiday => {
            map.set(holiday.date, holiday.name);
        });
        return map;
    }, [data]);

    if (isLoading) {
        return <div>Завантаження даних...</div>;
    }

    if (error) {
        return <div>Помилка при завантаженні даних про свята.</div>;
    }



    return (
        <div>
            <CalendarHeader
                currentMonthName={currentMonthName}
                currentYear={currentYear}
                onNextMonth={onNextMonth}
                onPreviousMonth={onPreviousMonth}
            />
            <WeekDays />
            <Grid>
                {days.map((day, index) => {
                    const date = new Date(day);
                    const isCurrentMonth = date.getMonth() === currentMonth;

                    // Використовуємо Map для перевірки наявності свята за цією датою
                    const holidayName = showHolidays ? holidaysMap.get(day) : null;

                    return (
                        <Cell key={index} isCurrentMonth={isCurrentMonth} isToday={isToday(date.getDate())}>
                            {day}
                            {holidayName && <div>{holidayName}</div>}
                        </Cell>
                    );
                })}
            </Grid>
        </div>
    );
};
export default Calendar;

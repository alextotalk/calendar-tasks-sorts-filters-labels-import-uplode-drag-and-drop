// src/components/Calendar.tsx
import React, { useState } from 'react';
import WeekDays from "./WeekDays";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid, {Task} from "./CalendarGrid";
import styled from "@emotion/styled";





const Calendar: React.FC = () => {
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

    const prevMonthDisplayDays = Array.from({ length: firstDayOfCurrentMonth }, (_, i) => daysInPrevMonth - i).reverse();
    const currentMonthDisplayDays = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

    const totalCells = 42;
    const nextMonthDisplayDays = Array.from(
        { length: totalCells - prevMonthDisplayDays.length - currentMonthDisplayDays.length },
        (_, i) => i + 1
    );

    const days = [...prevMonthDisplayDays, ...currentMonthDisplayDays, ...nextMonthDisplayDays];

    const isToday = (day: number) => currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate();

    const currentMonthName = new Date(currentYear, currentMonth).toLocaleString('uk-UA', { month: 'long' });


    const [tasks, setTasks] = useState<Record<string, Task[]>>({});

    const handleAddTask = (day: number, taskText: string) => {
        const newTask = { id: Date.now().toString(), text: taskText };
        setTasks(prevTasks => {
            const dayTasks = prevTasks[day] || [];
            return { ...prevTasks, [day]: [...dayTasks, newTask] };
        });
    };

    return (
        <div>
            <CalendarHeader
                currentMonthName={currentMonthName}
                currentYear={currentYear}
                onNextMonth={onNextMonth}
                onPreviousMonth={onPreviousMonth}
            />
            <WeekDays />
            <CalendarGrid
                tasks={tasks}
                onAddTask={handleAddTask}
                days={days}
                isToday={isToday}
                firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                daysInCurrentMonth={daysInCurrentMonth}
            />
        </div>
    );
};
export default Calendar;

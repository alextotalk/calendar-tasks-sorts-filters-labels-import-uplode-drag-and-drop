// src/components/CalendarGrid.tsx
import React from 'react';
import styled from '@emotion/styled';

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

export interface Task {
    id: string;
    text: string;
}

interface CalendarGridProps {
    days: number[];
    isToday: (day: number) => boolean;
    firstDayOfCurrentMonth: number;
    daysInCurrentMonth: number;
    tasks: Record<string, Task[]>; // Задачі зберігаються за ключем, що відповідає дню
    onAddTask: (day: number, taskText: string) => void; // Оновлений пропс для додавання задачі

}

const CalendarGrid: React.FC<CalendarGridProps> = ({  tasks, onAddTask,days, isToday, firstDayOfCurrentMonth, daysInCurrentMonth }) => {
    const handleDayClick = (day: number) => {
        const taskText = prompt("Enter task for this day:"); // Просте діалогове вікно для введення задачі
        if (taskText) {
            onAddTask(day, taskText);
        }
    };
    return (
        <Grid>
            {days.map((day, index) => {
                const isCurrentMonth = index >= firstDayOfCurrentMonth && index < firstDayOfCurrentMonth + daysInCurrentMonth;
                return (
                    <Cell key={index} isCurrentMonth={isCurrentMonth} isToday={isToday(day)} onClick={() => handleDayClick(day)}>
                        { day }
                        {tasks[day] && tasks[day].map(task => (
                            <div key={task.id}>
                                {task.text}
                            </div>
                        ))}
                    </Cell>
                );
            })}
        </Grid>
    );
};

export default CalendarGrid;

import React from 'react';
import styled from '@emotion/styled';

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: antiquewhite;;
    text-align: center;
    font-weight: bold;

`;
const WeekContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const Day = styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    margin: 0 5px;
    // Highlight the current day
    background-color: #00ff00;
`;

const WeekDays = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    const weekStart = new Date(today);
    // Adjust if your week starts on Monday
    const adjustToMondayStart = dayOfWeek === 0 ? -6 : 1;
    weekStart.setDate(today.getDate() - dayOfWeek + adjustToMondayStart);

    const days = Array.from({length: 7}).map((_, i) => {
        const day = new Date(weekStart);
        day.setDate(day.getDate() + i);
        return day;
    });
    return (<div>
            <Week>
                <div>Пн</div>
                <div>Вт</div>
                <div>Ср</div>
                <div>Чт</div>
                <div>Пт</div>
                <div>Сб</div>
                <div>Нд</div>
            </Week>
            <WeekContainer>
                {days.map((day, i) => (
                    <Day key={i}>

                        {day.toLocaleDateString()}
                    </Day>
                ))}
            </WeekContainer>
        </div>

    );
};

export default WeekDays;

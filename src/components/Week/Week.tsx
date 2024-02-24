// CalendarGrid.tsx
import React from 'react';
import styled from '@emotion/styled';

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: antiquewhite;;
    text-align: center;
    font-weight: bold;

`;



const WeekDays: React.FC<any> = () => {
    return (
        <Week>
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div>Сб</div>
            <div>Нд</div>
        </Week>
    );
};

export default WeekDays;

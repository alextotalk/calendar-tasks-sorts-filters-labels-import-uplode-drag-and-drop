// src/components/WeekDays.tsx
import React from 'react';
import styled from '@emotion/styled';

const WeekDayContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: antiquewhite;;
    text-align: center;
    font-weight: bold;

`;
const WeekDay = styled.div`
  padding: 5px;
`;

const WeekDays: React.FC = () => {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
    return (
        <WeekDayContainer>
            {weekDays.map((day, index) => (
                <WeekDay key={index}>{day}</WeekDay>
            ))}
        </WeekDayContainer>
    );
};

export default WeekDays;

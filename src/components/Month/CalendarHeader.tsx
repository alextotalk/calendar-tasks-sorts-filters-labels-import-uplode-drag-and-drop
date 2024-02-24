// CalendarHeader.tsx
import React from 'react';
import styled from '@emotion/styled';

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
`;

const ArrowButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
`;
const Title = styled.h2`
    width: 200px; // Фіксована ширина 100 пікселів
    overflow: hidden; // Запобігає виходу тексту за межі елемента
    white-space: nowrap; // Забороняє тексту переходити на новий рядок
    text-overflow: ellipsis; // Додає трьохкрапку, якщо текст не вміщується
`;

interface Props {
    currentMonthName: string;
    currentYear: number;
    onNextMonth: () => void;
    onPreviousMonth: () => void;
}

const CalendarHeader: React.FC<Props> = ({
                                             currentMonthName,
                                             currentYear,
                                             onNextMonth,
                                             onPreviousMonth,
                                         }) => (
    <Header>
        <ArrowButton onClick={onPreviousMonth}>&lt;</ArrowButton>
        <Title>{`${currentMonthName} ${currentYear}`}</Title>
        <ArrowButton onClick={onNextMonth}>&gt;</ArrowButton>
    </Header>
);

export default CalendarHeader;

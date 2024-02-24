// Sidebar.tsx
import React from 'react';
import styled from '@emotion/styled';
import {Link} from "react-router-dom";

const SidebarContainer = styled.aside`
    background-color: #0077b6; // Приклад кольору фону
    padding: 1rem;
    min-width: 200px; // Встановіть ширину за бажанням
    min-height: 100vh;`;
const Button = styled.button`
    display: block;
    background-color: #90e0ef; // Приклад кольору кнопки
    color: white;
    border: none;
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
    cursor: pointer;
    transition: box-shadow 0.3s ease; // Плавна зміна тіні
    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); // Світла тінь на периметрі 10 пікселів
        background-color: #5c8587;
    }`;

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <Button>
                <Link to="/month">Month</Link>
            </Button>
            <Button>
                <Link to="/week">Week</Link>
            </Button>
            {/* Додайте додаткові кнопки або компоненти */}
        </SidebarContainer>
    );
};

export default Sidebar;

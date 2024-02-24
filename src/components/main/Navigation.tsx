// Navigation.tsx
import React from 'react';
import styled from '@emotion/styled';
import {Link} from "react-router-dom";

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    background-color: #00b4d8; // Приклад кольору фону
    padding: 0.5rem;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    color: white;
    margin: 0;
`;

const Navigation: React.FC = () => {
    return (
        <Navbar>
            <Logo> <Link to="/">Light Calendar</Link></Logo>
            {/* Тут можуть бути додаткові кнопки або лінки */}
        </Navbar>
    );
};

export default Navigation;

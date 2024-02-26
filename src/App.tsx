import React, {useState} from 'react';
import Calendar from './components/Month/Calendar';
import styled from "@emotion/styled";
import Navigation from "./components/main/Navigation";
import Sidebar from "./components/main/Sidebar";
import {Navigate, Route, Routes} from "react-router-dom";
import Week from "./components/Week/Week";

const AppContainer = styled.div`
    display: flex;
`;
const ContentContainer = styled.div`
    flex-grow: 1; // Make the calendar take up the remaining space
`;

const App: React.FC = () => {
    const [showHolidays, setShowHolidays] = useState(false);
    return (<div>
            <Navigation/>
            <AppContainer>
                <Sidebar onToggleHolidays={setShowHolidays}/>

                <ContentContainer>
                    <Routes >
                        <Route path="/" element={<Navigate replace to="/month" />}/>
                        <Route path="/month" element={<Calendar showHolidays={showHolidays}/>}/>
                        <Route path="/week" element={<Week/>}/>
                    </Routes>
                </ContentContainer>
            </AppContainer>
        </div>
    );
};

export default App;
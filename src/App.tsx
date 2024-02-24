import React from 'react';
import Calendar from './components/Month/Calendar';
import styled from "@emotion/styled";
import Navigation from "./components/main/Navigation";
import Sidebar from "./components/main/Sidebar";
import {Route, Routes} from "react-router-dom";
import Week from "./components/Week/Week";

const AppContainer = styled.div`
    display: flex;
`;
const ContentContainer = styled.div`
  flex-grow: 1; // Make the calendar take up the remaining space
`;

const App: React.FC = () => {
    return (
        <div>
            <Navigation/>
            <AppContainer>
                <Sidebar/>
                <ContentContainer>
                    <Routes>
                        <Route path="/month" element={ <Calendar/> } />
                        <Route path="/week" element={ <Week /> } />
                    </Routes>
                 </ContentContainer>
                </AppContainer>
        </div>
    );
};

export default App;
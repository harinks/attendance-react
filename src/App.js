import Dashboard from '../src/components/Dashboard';
import Sidebar from '../src/components/Sidebar';
import Topbar from '../src/components/Topbar';
import StudentList from '../src/components/StudentList';
import Attandance from './components/Attandance.js';
import AddAttandance from '../src/components/AddAttandance';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/student-list" element={<StudentList />}></Route>
                <Route path="/student/:id" element={<Attandance />}></Route>
                <Route path="/add-attendance/:id" element={<AddAttandance />}></Route>
              </Routes>
            </div> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

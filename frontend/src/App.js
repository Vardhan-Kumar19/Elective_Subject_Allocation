import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Students } from './components/Students';
import { Home } from './Home';
import { SubjectAllocation } from './components/SubjectAllocation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/allocations' element={<SubjectAllocation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

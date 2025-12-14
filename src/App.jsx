import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/create" element={<CourseCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

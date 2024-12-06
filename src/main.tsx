
import { createRoot } from 'react-dom/client'
import './index.css'

import Intro from './Pages/Intro.tsx'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BubbleGame from './Components/CaptCha.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/CaptCha" element={<BubbleGame />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)

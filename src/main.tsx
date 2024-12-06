
import { createRoot } from 'react-dom/client'
import './index.css'

import Intro from './Pages/Intro.tsx'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BubbleGame from './Components/CaptCha.tsx'
import Template from './Pages/template.tsx';
import Draggable from './Components/Draggable.tsx';
import Algues from './Pages/algues.tsx';
import Coeur from './Pages/coeur.tsx';
import Coraux from './Pages/coraux.tsx';
import Gulf_stream from './Pages/gulf_stream.tsx';
import Plancton from './Pages/plancton.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/CaptCha" element={<BubbleGame />} />
      <Route path="/Menu" element={<Draggable />} />
      
      <Route path="/Algues" element={<Algues />} />
      <Route path="/Coeur" element={<Coeur />} />
      <Route path="/Coraux" element={<Coraux />} />
      <Route path="/gulf_stream" element={<Gulf_stream />} />
      <Route path="/Plancton" element={<Plancton />} />


      <Route path="/Template" element={<Template />} />

    </Routes>
  </BrowserRouter>
</React.StrictMode>
)

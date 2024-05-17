import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Notification from './Notification/Notification'
import { BrowserRouter , Route ,Routes} from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import Calendar from './googlecalendar/calendar';
const supabase = createClient(
"https://pzwtmyastqyranmxfrpi.supabase.co/",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6d3RteWFzdHF5cmFubXhmcnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNDQ0MTcsImV4cCI6MjAzMDkyMDQxN30.c5Zo2WJSzijx3ST-4suBfasiZrTz6PZPc9G3KszMmeA"
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <Routes >
    <Route path='/' element={<App/>}></Route>
    <Route path='/Notification' element={<Notification/>}></Route>
    <Route path='/calendar' element={<Calendar/>}></Route>
      </Routes>
    </SessionContextProvider>
  </React.StrictMode>
  </BrowserRouter>
 
)
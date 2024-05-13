import React from "react";
import ReactDOM from "react-dom/client";
import { TodoWrapper } from './components/TodoWrapper';
import Sidebar from './Sidebar/Sidebar';
import App from "./App";
import Calendar from './googlecalendar/calendar';
import Notification from './Notification/Notification'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
     <BrowserRouter>
    <Routes>  
    <Route path='/' element={<App />} />
      <Route path='/Noti' element={<Notification />} />
      <Route path='/Calendar' element={<Calendar />} />
    </Routes>
  
  </BrowserRouter>
);

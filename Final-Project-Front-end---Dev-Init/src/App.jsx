// import logo from './logo.svg';
import './App.css';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import Sidebar from "./Sidebar/Sidebar"
import TodoWrapper from "./components/TodoWrapper"
function App() {
  const [ start, setStart ] = useState(new Date());
  const [ end, setEnd ] = useState(new Date());
  const [ eventName, setEventName ] = useState("");
  const [ eventDescription, setEventDescription ] = useState("");
  const [ isDarkMode, setIsDarkMode ] = useState(false); // State for tracking dark mode

  const session = useSession(); 
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();
  
  if(isLoading) {
    return <></>
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if(error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      'summary': eventName,
      'description': eventDescription,
      'start': {
        'dateTime': start.toISOString(), 
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone 
      },
      'end': {
        'dateTime': end.toISOString(), 
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone 
      }
    }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization':'Bearer ' + session.provider_token 
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      alert("Event created, check your Google Calendar!");
    });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);


  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode'); 
  }
  return (
    <div>
    <button className="mode-toggle-btn" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}> 
      <Sidebar/>
      <TodoWrapper/>
    </div>
  </div>
  );
}

export default App;

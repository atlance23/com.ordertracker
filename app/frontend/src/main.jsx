import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { get, getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config.js'
import './index.css'
import App from './App.jsx'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Check if user exists in database
const checkUserExists = async (userId) => {
  const db = getDatabase();
  const userRef = ref(db, 'users/' + userId);
  const snapshot = await get(userRef);
  return snapshot.exists();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

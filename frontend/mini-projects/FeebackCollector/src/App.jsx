import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackContextProvider from './store/FeedbackContext'
import FeedbackForm from './components/FeedbackForm'
import { UserProgressContextProvider }from './store/UserProgressContext'

function App() {

  return (
    <>
      <UserProgressContextProvider>
        <FeedbackContextProvider >
          <Header />
          <FeedbackForm />
        </FeedbackContextProvider >
      </UserProgressContextProvider>
    </>
  )
}

export default App

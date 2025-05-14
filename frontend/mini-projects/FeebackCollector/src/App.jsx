import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackContextProvider from './store/FeedbackContext'
import FeedbackForm from './components/FeedbackForm'
import { UserProgressContextProvider }from './store/UserProgressContext'
import FeedbackList from './components/FeedbackList'

function App() {

  return (
    <>
      <UserProgressContextProvider>
        <FeedbackContextProvider >
          <Header />
          <FeedbackForm />
          <FeedbackList />
        </FeedbackContextProvider >
      </UserProgressContextProvider>
    </>
  )
}

export default App

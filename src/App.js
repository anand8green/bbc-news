import React from 'react'
import Header from './components/Header'
import NewsItem from './components/NewsItem'
import NewsSection from './components/NewsSection'
import Welcome from './components/Welcome'
import GlobalState from './GlobalState'

function App() {
  return (

    <GlobalState>
      <Header />
      <Welcome />
      <NewsSection />
    </GlobalState>
  )
}

export default App

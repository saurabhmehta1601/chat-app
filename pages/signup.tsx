import type { NextPage } from 'next'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
          <Header />
        <main className="flex-1 flex justify-center align-middle">
          <SignupForm/>
        </main>
          <Footer />
    </div>
  )
}

export default Home


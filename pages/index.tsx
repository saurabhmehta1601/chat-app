import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from "../components/Header"
import Chat from "../components/Chat"


const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Chat />
      <Footer />
    </div>
  )
}

export default Home

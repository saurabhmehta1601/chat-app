import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from "../components/Header"
import Chat from "../components/Chat"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
          <Header />
        <main className="flex-1 flex ">
          <Chat />
        </main>
          <Footer />
    </div>
  )
}

export default Home

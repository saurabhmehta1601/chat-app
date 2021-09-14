import React from 'react'
import ChatSidebar from "./ChatSidebar"
import ChattingSection from "./ChattingSection"

const ChatArea = () => {
    return (
        <main className="flex-1 flex ">
                <ChatSidebar />
                <ChattingSection />
        </main>
    )
}

export default ChatArea
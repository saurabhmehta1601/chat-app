import React from 'react'
import ChatSidebar from "./ChatSidebar"
import ChattingSection from "./ChattingSection"

const ChatArea = () => {
    return (
        <div className="flex-1 flex">
                <ChatSidebar />
                <ChattingSection />
        </div>
    )
}

export default ChatArea
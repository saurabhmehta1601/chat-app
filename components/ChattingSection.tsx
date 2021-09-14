import ChatInputBox from "./ChatInputBox"
import ChatMessagesSection from "./ChatMessagesSection"

import React from 'react'

const ChatSection = () => {
    return (
        <div className=" flex-1 bg-gray-300 flex flex-col p-2 overflow-y-scroll">
            <div className="chat-messages">
                <ChatMessagesSection />
            </div>
            <div className="chat-input">
                <ChatInputBox />
            </div>
        </div>
    )
}

export default ChatSection

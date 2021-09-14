import ChatInputBox from "./ChatInputBox"
import ChatMessagesSection from "./ChatMessagesSection"

import React from 'react'

const ChatSection = () => {
    return (
        <div className=" flex-1 bg-gray-300 flex flex-col p-2">
            <div className="flex-1">
                <ChatMessagesSection />
            </div>
            <ChatInputBox />
        </div>
    )
}

export default ChatSection

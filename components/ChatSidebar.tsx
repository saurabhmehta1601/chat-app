import React from 'react'
import Image from "next/image"

const SidebarChat  = () => {
   return (<div className="flex hover:bg-green-300 p-2">
        <Image src="/images/avatar.png" alt="chat-person" width={40} height={40} />
        <div className="flex flex-col  pl-4 flex-1">
            <div className="font-bold">SuperMan</div>
            <div className="text-sm text-gray-800">I am getting on time wait...</div>
        </div>
    </div>) 
}

const ChatSidebar = () => {
    return (
        <div className="w-1/5  border-r-2 border-green-900 ">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    )
}

export default ChatSidebar

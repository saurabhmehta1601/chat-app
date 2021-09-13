import React from 'react'
import {IoMdSend } from "react-icons/io"

const ChatInputBox = () => {
    return (
        <div className="flex pl-2 m-2 bg-gray-50 ">
           <input type="text" className=" flex-1 p-2" /> 
           <div className="bg-green-600 px-4 grid items-center">
                <IoMdSend className=" text-2xl text-gray-200"/>
           </div>
        </div>
    )
}

export default ChatInputBox

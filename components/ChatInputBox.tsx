import {gql, useMutation } from '@apollo/client';
import React  from 'react'
import {IoMdSend } from "react-icons/io"

const CREATE_MESSAGE = gql`
    mutation($createMessageAuthor: String!, $createMessageContent: String!){
  createMessage(author: $createMessageAuthor, content: $createMessageContent) {
    author
    content
  }
}
`

const ChatInputBox = () => {
    const [mutate] = useMutation(CREATE_MESSAGE)

    const scrollToBottom = () => {
        const messages = document.querySelector('.chat-messages')! 
        messages.scrollTo({left:0, top: messages.scrollHeight})
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const msgContent = e.target.message.value
        if(msgContent){
            mutate({
                variables:{
                    createMessageAuthor:"saurabh",
                    createMessageContent: msgContent
                }
    })
}
    e.target.message.value = ""
    scrollToBottom()
} 

    return (
        <form  onSubmit={handleSubmit} className="flex   bg-gray-50 border-2 border-opacity-80 rounded-sm border-gray-400">
           <input type="text" autoComplete="off" name="message" className=" flex-1 p-2 outline-none focus:ring focus:border-blue-300 font-mono font-semibold text-sm" /> 
           <button type="submit" className="bg-blue-500 px-4 grid items-center">
                <IoMdSend className=" text-2xl text-gray-200"/>
           </button>
        </form>
    )
}

export default ChatInputBox

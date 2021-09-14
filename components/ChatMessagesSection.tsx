import React from 'react'
import {gql , useQuery} from '@apollo/client'

type dataType ={author:string,content:string} 

interface IProps { 
    data?: Array<dataType>,
    loading:boolean,
    error?:Error
}

interface IChatMessageProps {
    recieved: boolean,
    content:string
}

const ChatMessage = ({recieved,content} : IChatMessageProps ) =>{
    return (<div className={"flex m-2 max-w-lg" }>
            <p className={ " px-4 py-2 rounded-lg  font-bold "  + (recieved ? "bg-gray-50 text-gray-800 float-right" :"bg-blue-500  text-blue-100 ") }>
                {content}
            </p>
    </div>)
}

const ChatMessagesSection = () => {
    const {data,loading} = useQuery(gql`
           query Query{
                allMessages {
                    author
                    content
                }
        }
        `)
    if(loading){
        return <p>Loading....</p>
    }

    return (<>
            { data.allMessages.map((msg: any,idx:number)  => (
                <ChatMessage 
                    key= {idx} 
                    recieved={msg.author !="saurabh"} 
                    content={msg.content}  />
            ) )}
    </>)
}

export default ChatMessagesSection

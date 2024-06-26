import React from 'react';
import { MessageSummaryCardTitle } from './MessageSummaryCardTitle';
import { MessageSummaryCardDescription } from './MessageSummaryCardDescription';
 
interface MessageSummaryCardBodyProps{
  senderName: string
  message: string
  createdAt: Date
}
 
export function MessageSummaryCardBody({
  senderName,
  message,
  createdAt
}: MessageSummaryCardBodyProps){
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
       
    }}>
      <MessageSummaryCardTitle senderName={senderName} />
      <MessageSummaryCardDescription message={message} createdAt={createdAt} />
    </div>
  )
}
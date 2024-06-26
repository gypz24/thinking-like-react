import React from 'react';
import { MessageSummaryCardTitle } from './MessageSummaryCardTitle';
import { MessageSummaryCardDescription } from './MessageSummaryCardDescription';
 
interface MessageSummaryCardBodyProps{
  senderName: string
  message: string
  createdAt: Date
  seen: boolean
}
 
export function MessageSummaryCardBody({
  senderName,
  message,
  createdAt,
  seen
}: MessageSummaryCardBodyProps){
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px",
       
    }}>
      <MessageSummaryCardTitle senderName={senderName} />
      <MessageSummaryCardDescription message={message} createdAt={createdAt} seen={seen} />
    </div>
  )
}
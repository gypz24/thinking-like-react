import React from 'react';
import { MessageContainer } from './MessageContainer';
import { TimeElapsedContainer } from './TimeElapsedContainer';
 
 
interface MessageSummaryCardDescriptionProps{
  message: string
  createdAt: Date
}
 
export function MessageSummaryCardDescription({
  message,
  createdAt
}: MessageSummaryCardDescriptionProps){
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "5px"
    }}>
      <MessageContainer message={message} />
      <TimeElapsedContainer createdAt={createdAt} />
    </div>
  );
}
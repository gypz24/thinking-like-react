import React from 'react';
import { MessageContainer } from './MessageContainer';
import { TimeElapsedContainer } from './TimeElapsedContainer';
 
 
interface MessageSummaryCardDescriptionProps{
  message: string
  createdAt: Date,
  seen: boolean
}
 
export function MessageSummaryCardDescription({
  message,
  createdAt,
  seen
}: MessageSummaryCardDescriptionProps){
  const fontWeight = seen ? 'normal' : 'bold';
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "5px",
    }}>
      <MessageContainer message={message} fontWeight={fontWeight} />
      <TimeElapsedContainer createdAt={createdAt} fontWeight={fontWeight} />
    </div>
  );
}
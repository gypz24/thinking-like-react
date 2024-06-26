import React from 'react';
 
interface MessageSummaryCardTitleProps{
  senderName: string
}
 
export function MessageSummaryCardTitle({
  senderName
}: MessageSummaryCardTitleProps){
  return (
    <p style={{
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      {senderName}
    </p>
  )
}
import React from 'react';
 
interface MessageSummaryCardImageProps{
  senderImageUrl: string
}
 
export function MessageSummaryCardImage({
  senderImageUrl
}: MessageSummaryCardImageProps){
  return (
    <div>
      <img 
        style={{
          width: 50,
          height: 50,
          borderRadius: 50
        }}
        src={senderImageUrl}
        alt="imagen de perfil"
      />
    </div>
  )
}
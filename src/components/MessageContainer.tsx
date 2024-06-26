import React from 'react';
import getShortMessage from '../utils/getShortMessage';
 
interface MessageContainerProps{
  message: string,
  fontWeight: 'normal' | 'bold'
}
 
export function MessageContainer({
  message,
  fontWeight
}: MessageContainerProps){
    return (
      <p style={{
        fontWeight
      }}>{getShortMessage(message)}</p>
    );
}
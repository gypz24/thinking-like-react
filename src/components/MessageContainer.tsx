import React from 'react';
import getShortMessage from '../utils/getShortMessage';
 
interface MessageContainerProps{
  message: string
}
 
export function MessageContainer({
  message
}: MessageContainerProps){
    return (
      <p>{getShortMessage(message)}</p>
    );
}
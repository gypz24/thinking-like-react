import React from 'react';
import getFormattedDateDifference from '../utils/getFormattedDateDifference';
 
interface TimeElapsedContainerProps{
  createdAt: Date
}
 
export function TimeElapsedContainer({
  createdAt
}: TimeElapsedContainerProps){
  return (
    <p style={{
      color: "grey"
    }}>
      {getFormattedDateDifference(createdAt)}
    </p>
  );
}
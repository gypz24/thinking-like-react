import React from 'react';
import getFormattedDateDifference from '../utils/getFormattedDateDifference';
 
interface TimeElapsedContainerProps{
  createdAt: Date,
  fontWeight: 'normal' | 'bold'
}
 
export function TimeElapsedContainer({
  createdAt,
  fontWeight
}: TimeElapsedContainerProps){
  return (
    <p style={{
      color: "grey",
      fontWeight
    }}>
      {getFormattedDateDifference(createdAt)}
    </p>
  );
}
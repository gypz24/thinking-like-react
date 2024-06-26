import React from 'react';
import { MessageSummaryCardImage } from './MessageSummaryCardImage';
import { MessageSummaryCardBody } from './MessageSummaryCardBody';
 
interface MessageSummaryCardProps{
    senderImageUrl: string
    senderName: string
    message: string
    createdAt: Date
  }
 
export function MessageSummaryCard({
    senderImageUrl,
    senderName,
    message,
    createdAt
}: MessageSummaryCardProps) {
    return (
        <div 
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
                padding: 10,
                fontWeight: "normal"
            }}
        >
            <MessageSummaryCardImage senderImageUrl={senderImageUrl} />
            <MessageSummaryCardBody
                senderName={senderName}
                message={message}
                createdAt={createdAt}
            />
        </div>
    );
};
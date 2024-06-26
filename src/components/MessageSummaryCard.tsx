import React from 'react';
import { MessageSummaryCardImage } from './MessageSummaryCardImage';
import { MessageSummaryCardBody } from './MessageSummaryCardBody';
import markMessageAsSeen from '../utils/markMessageAsSeen';
 
interface MessageSummaryCardProps{
    senderImageUrl: string
    senderName: string
    message: string
    createdAt: Date,
    seen: boolean,
    senderId: string,
    messageId: string,
    updateMsjSeenProperty: ({senderId, messageId}: {senderId: string, messageId: string}) => void
}
 
export function MessageSummaryCard({
    senderImageUrl,
    senderName,
    message,
    createdAt,
    seen,
    senderId,
    messageId,
    updateMsjSeenProperty
}: MessageSummaryCardProps) {
     
    function handleClick(){
        markMessageAsSeen({senderId, messageId}).then((data) => {
            if(data.updated){
                updateMsjSeenProperty({senderId, messageId})
            }
        })
    }
 
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
            onClick={handleClick}
        >
            <MessageSummaryCardImage senderImageUrl={senderImageUrl} />
            <MessageSummaryCardBody
                senderName={senderName}
                message={message}
                createdAt={createdAt}
                seen={seen}
            />
        </div>
    );
};
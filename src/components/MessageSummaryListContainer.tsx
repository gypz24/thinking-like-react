import React, { useEffect, useState } from 'react'
import { MessageSummaryCard } from './MessageSummaryCard'
import getSendersWithMessage from '../utils/getSendersWithMessage';
import { SenderWithMessage } from '../utils/types';
 
export function MessageSummaryListContainer() {
    const [sendersWithMessage, setSendersWithMessage] = useState<SenderWithMessage[]>([])
 
    const fetchData = () => {
      getSendersWithMessage().then((data) => {
        setSendersWithMessage(data)
      })
    }
 
    useEffect(() => {
      fetchData();
      // Update messages every 30 seconds
      const intervalId = setInterval(fetchData, 30 * 1000);
      return () => clearInterval(intervalId);
    }, [])
 
    function updateMsjSeenProperty({senderId, messageId}: {senderId: string, messageId: string}){
      const newSendersWithMessage = sendersWithMessage.map((s) => {
        if(s.id === senderId){
          s.messages = s.messages.map((m) => {
            if(m.id === messageId) m.seen = true;
            return m;
          })
        }
        return s;
      });
       
      setSendersWithMessage(newSendersWithMessage);
    }
 
    return (
      <div>
        {
          sendersWithMessage.map((s) => (
            <MessageSummaryCard
              key={s.id}
              senderImageUrl={s.imageUrl}
              senderName={s.name}
              message={s.messages[0].message}
              createdAt={s.messages[0].createdAt}
              seen={s.messages[0].seen}
              senderId={s.id}
              messageId={s.messages[0].id}
              updateMsjSeenProperty={updateMsjSeenProperty}
            />
          ))
        }
      </div>
    )
}
import React from 'react'
import { MessageSummaryCard } from './MessageSummaryCard'
import getSendersWithMessage from '../utils/getSendersWithMessage';
 
export function MessageSummaryListContainer() {
    const sendersWithMessage = getSendersWithMessage()
 
    return (
      <div>
        {
          sendersWithMessage.map((s) => (
            <MessageSummaryCard
              senderImageUrl={s.imageUrl}
              senderName={s.name}
              message={s.messages[0].message}
              createdAt={s.messages[0].createdAt}
            />
          ))
        }
      </div>
    )
}
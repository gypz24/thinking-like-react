import { http, HttpResponse } from 'msw'
import { getRandomSenderId, getSendersWithLastMessage, markMessageHasSeen, saveMessage } from './bd';
import { faker } from '@faker-js/faker';
 
export const handlers = [
    http.get('/messages/new', () => {
        // Create fake message from aleatory sender
        const randomSender = getRandomSenderId();
        saveMessage(randomSender, {
            id: faker.string.uuid(),
            message: faker.lorem.sentence(),
            seen: false,
            createdAt: new Date()
        });
        // Get senders with last message
        const senders = getSendersWithLastMessage();
        //Return response
        return HttpResponse.json(senders)
    }),
   
    http.put('sender/:idSender/messages/:idMessage', ({ params }) => {
      const { idSender, idMessage } = params;
      markMessageHasSeen(idSender as string, idMessage as string)
      return HttpResponse.json({updated: true})
    }),
];
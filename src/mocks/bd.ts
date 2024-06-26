import { faker } from "@faker-js/faker";
 
const senderIdA = faker.string.uuid();
const senderIdB = faker.string.uuid();
const senderIdC = faker.string.uuid();
 
interface Message{
    id: string,
    message: string,
    seen: boolean,
    createdAt: Date
}
 
interface Sender{
    id: string,
    name: string,
    imageUrl: string,
    messages: Message[],
}
 
const SENDERS : Record<string, Sender> = {
    [senderIdA]: {
        id: senderIdA,
        name: faker.internet.userName(),
        imageUrl: faker.image.avatar(),
        messages: [
            {
                id: faker.string.uuid(),
                message: faker.lorem.sentence(),
                seen: false,
                createdAt: new Date(2024, 2, 1)
            }
        ]
    },
    [senderIdB]: {
        id: senderIdB,
        name: faker.internet.userName(),
        imageUrl: faker.image.avatar(),
        messages: [
            {
                id: faker.string.uuid(),
                message: faker.lorem.sentence(),
                seen: false,
                createdAt: new Date(2024, 1, 17)
            }
        ]
    },
    [senderIdC]: {
        id: senderIdC,
        name: faker.internet.userName(),
        imageUrl: faker.image.avatar(),
        messages: [
            {
                id: faker.string.uuid(),
                message: faker.lorem.sentence(),
                seen: false,
                createdAt: new Date(2024, 1, 1)
            }
        ]
    }
};
export const saveMessage = (senderId: string, message: Message) => {
    if(!(senderId in SENDERS)){
        throw new Error("Sender doesn't exists, senderId=" + senderId)
    }else{
        SENDERS[senderId].messages.push(message);
    }
}
 
export const getRandomSenderId = () => {
    const senderIds = Object.keys(SENDERS) as (keyof typeof SENDERS)[];
    const senderRandomIndex = Math.floor(Math.random() * senderIds.length)
    const senderId = senderIds[senderRandomIndex];
    return senderId;
}
 
export const getSendersWithLastMessage = () => {
    const senderIds = Object.keys(SENDERS) as (keyof typeof SENDERS)[];
    const msjs: Array<Sender> = senderIds.map(senderId => {
        return {
            ...SENDERS[senderId],
            messages: [SENDERS[senderId].messages[SENDERS[senderId].messages.length - 1]]
        }
    });
    return msjs;
}
 
export const markMessageHasSeen = (senderId: string, messageId: string) => {
    if(!(senderId in SENDERS)){
        throw new Error("Sender doesn't exists, senderId=" + senderId)
    }
    const messageFound = SENDERS[senderId].messages.find((m) => m.id === messageId);
    if(!messageFound){
        throw new Error("Message doesn't exists, message=" + messageId)
    }else{
        messageFound.seen = true;
    }
}
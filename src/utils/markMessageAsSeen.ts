import { MarkMessageAsSeenRequest, MarkMessageAsSeenResponse } from "./types";
 
async function markMessageAsSeen({senderId, messageId}: MarkMessageAsSeenRequest) {
    try{
        const response = await fetch(`sender/${senderId}/messages/${messageId}`, {
            method: 'PUT'
        });
        const data: MarkMessageAsSeenResponse = await response.json()
        return data;
    }catch{
        throw new Error("Error al buscar remitentes con mensaje")
    }
}
 
export default markMessageAsSeen;
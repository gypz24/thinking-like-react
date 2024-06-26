import { SenderWithMessage } from "./types";
 
async function getSendersWithMessage() {
    try{
        const response = await fetch('/messages/new');
        const data: SenderWithMessage[] = await response.json()
        return data;
    }catch{
        throw new Error("Error al buscar remitentes con mensaje")
    }
}
 
export default getSendersWithMessage;
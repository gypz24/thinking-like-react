export interface SenderWithMessage {
  id: string,
  name: string,
  imageUrl: string,
  messages: Array<{
      id: string,
      message: string,
      seen: boolean,
      createdAt: Date
  }>
}
 
export interface MarkMessageAsSeenRequest {
  senderId: string,
  messageId: string
}
 
export interface MarkMessageAsSeenResponse {
  updated: boolean
}
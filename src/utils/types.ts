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
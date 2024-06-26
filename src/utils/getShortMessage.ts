function getShortMessage(message: string){
  let shortMsj = "";
  if(message.length<50){
    shortMsj = message;
  }else{
    shortMsj = message.substring(0, 47) + "...";
  }
  return shortMsj;
}
 
export default getShortMessage;
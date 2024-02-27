declare interface Message {
  id: string;
  chatId: string;
  sender: User;
  recipient: User;
  message: string;
  datetime: Date;
  readed: boolean;
}

declare interface Chat {
  id: string;
  interlocutor: User;
  isPinned: boolean;
  lastMessage: {
    type: string;
    value: string;
    dateTime: Date;
  };
  unreadedIncomingMessages: number;
  sentMessageRead: boolean;
}

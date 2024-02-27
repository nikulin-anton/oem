import { chatListMock } from "../../db/chat";

export default defineEventHandler((event) => {
  const chatId = getRouterParam(event, "chatId");

  return chatListMock.find((chat) => chat.id === chatId);
});

import { messagesMock } from "~/server/db/messages";

export default defineEventHandler((event) => {
  const chatId = getRouterParam(event, "chatId");

  return messagesMock.get(chatId!);
});

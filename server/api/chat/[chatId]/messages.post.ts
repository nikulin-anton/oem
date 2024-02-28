import { faker } from "@faker-js/faker";
import { chatListMock } from "~/server/db/chat";
import { messagesMock } from "~/server/db/messages";
import { userMock } from "~/server/db/user";

export default defineEventHandler(async (event) => {
  const chatId = getRouterParam(event, "chatId");
  const body = await readBody(event);
  const chat = chatListMock.find((chat) => chat.id === chatId);
  const messages = messagesMock.get(chatId!);

  const newMessage: Message = {
    id: faker.string.uuid(),
    chatId: chatId!,
    sender: userMock,
    recipient: chat!.interlocutor,
    message: body.message,
    datetime: new Date(),
    readed: false,
  };

  messages?.push(newMessage);

  return newMessage;
});

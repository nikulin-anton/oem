import { getMessageMock } from "~/utils/mocks/message.mock";
import { chatListMock } from "./chat";
import { userMock } from "./user";

export const messagesMock = new Map<string, Message[]>();

chatListMock.forEach(({ interlocutor, id }) => {
  if (!messagesMock.has(id)) {
    messagesMock.set(id, []);
  }

  new Array(Math.round(Math.random() * 100)).fill(undefined).forEach(() => {
    const randomValue = Math.random() > 0.5;
    const sender = randomValue ? interlocutor : userMock;
    const recipient = randomValue ? userMock : interlocutor;
    const messageMock = getMessageMock({ sender, recipient, chatId: id });

    messagesMock.get(id)!.push(messageMock);
  });
});

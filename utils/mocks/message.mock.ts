import { faker } from "@faker-js/faker";
import { getUserMock } from "./user.mock";

export function getMessageMock(message: Partial<Message> = {}): Message {
  return {
    id: faker.string.uuid(),
    chatId: faker.string.uuid(),
    sender: getUserMock(),
    recipient: getUserMock(),
    message: faker.lorem.sentence(),
    datetime: faker.date.recent(),
    readed: true,
    ...message,
  };
}

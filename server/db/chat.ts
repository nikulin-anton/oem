import { getChatMock } from "~/utils/mocks/chat.mock";

export const chatListMock = new Array(8)
  .fill(undefined)
  .map(() => getChatMock());

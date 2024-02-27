import { getChatMock } from "~/utils/mocks/chat.mock";

const chatListMock = new Array(8).fill(undefined).map(() => getChatMock());

export default defineEventHandler((event) => chatListMock);

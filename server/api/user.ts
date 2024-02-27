import { getUserMock } from "~/utils/mocks/user.mock";

export default defineEventHandler((event) => {
  return getUserMock();
});

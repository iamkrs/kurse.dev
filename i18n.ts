import { GetRequestConfigParams } from "next-intl/dist/types/src/server/getRequestConfig";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));

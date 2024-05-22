import axios, { type AxiosResponse } from "axios";
import type { PortofolioSinglePageMeta } from "~/types/data";

/**
 * Fetching local data. The content data will extension .md
 */
export default async (slug: string) => {
  const responseMeta = await axios.get<PortofolioSinglePageMeta>(
    `/assets/portofolio/${slug}.json`
  );

  checkIfRequestError(responseMeta);

  const responseContent = await axios.get<string>(
    `/assets/portofolio/${slug}.md`
  );

  checkIfRequestError(responseContent);

  return { meta: responseMeta.data, content: responseContent.data };
};

function checkIfRequestError(resp: AxiosResponse) {
  const header = resp.headers["content-type"] as string;
  if (header.includes("text/html")) {
    throw Error("Content not found");
  }
}

import type { PortofolioSinglePageMeta } from "~/types/data";

/**
 * Fetching local data. The content data will have extension .md
 */
export default async (slug: string) => {
  const meta = await $fetch<PortofolioSinglePageMeta>(
    `/assets/portofolio/${slug}.json`
  );

  const content = await $fetch<string>(
    `/assets/portofolio/${slug}.md`,
    { responseType: "text" }
  );

  return { meta, content };
};


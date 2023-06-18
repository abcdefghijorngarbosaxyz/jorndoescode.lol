import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://www.jorndoescode.lol/sitemap.xml",
    host: "https://www.jorndoescode.lol",
  };
};

export default robots;

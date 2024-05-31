
// export interface IFrontmatter {
//   slug: string;
//   title: string;
//   date: string;
//   pubDate: string;
//   images: string;
//   shortDescription: string;
// }
export interface IFrontmatter {
  title: string;
  shortDescription: string;
  images: string[];
  slug: string;
  date: string;
  keywords: string[];
  pubDate: string;
}

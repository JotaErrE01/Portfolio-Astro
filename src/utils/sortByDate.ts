import type { MDXInstance } from "astro";
import type { IFrontmatter } from "interfaces/IFrontmatter";

export const sortByDate = <T extends IFrontmatter>(posts: MDXInstance<T>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

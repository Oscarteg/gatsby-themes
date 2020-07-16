import React from "react";
import { Link } from "gatsby";

export type TableOfContentsProps = {
  //   tableOfContents: {
  //     items: {
  //       url: string;
  //       title: string;
  //       items?: []
  //     }[];
  //   };
  items: any;
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  console.log("item", items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <a href={item.url}>{item.title}</a>
            {item.items && <TableOfContents items={item.items} />}
          </li>
        );
      })}
    </ul>
  );
}

import React from "react";

export type TableOfContentsProps = {
  // TODO: Fix typings
  items: any;
};

export default function TableOfContents({ items }: TableOfContentsProps) {
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

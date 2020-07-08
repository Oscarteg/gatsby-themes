import React from "react";
import cn from "classnames";

interface FooterListProps {
  title: string;
  items: string[];
  className?: string;
}

export default function FooterList({
  title,
  items,
  className,
}: FooterListProps) {
  return (
    <div className={cn(className)}>
      <h4 className="font-mono uppercase tracking-wide text-sm py-3 font-bold text-grey-600">
        {title}
      </h4>
      <ul className="tracking-wide font-hairline text-sm list-disc">
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import cn from "classnames";
import React, { ReactNode } from "react";

export type FooterProps = {
  children?: ReactNode;
  className?: string;
};

export default function Footer({ children, className }: FooterProps) {
  return (
    <footer className={cn(className, "bg-gray-800 text-white")}>
      {children}
    </footer>
  );
}

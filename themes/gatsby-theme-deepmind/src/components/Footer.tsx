import React, { ReactNode } from "react";
import cn from "classnames";

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

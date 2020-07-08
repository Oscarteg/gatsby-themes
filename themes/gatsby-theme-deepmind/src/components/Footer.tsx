import React, { ReactNode } from "react";

export type FooterProps = {
  children?: ReactNode;
};

export default function Footer({ children }: FooterProps) {
  return <footer>{children}</footer>;
}

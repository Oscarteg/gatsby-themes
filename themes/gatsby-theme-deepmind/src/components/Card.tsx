import React, { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg px-4 py-2">
      {children}
    </div>
  );
}

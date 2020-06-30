import React, { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <div className="bg-black">{children}</div>;
}

import { ReactNode } from "react";

type InnerLayoutProps = {
  children: ReactNode;
};

export default function InnerLayout({ children }: InnerLayoutProps) {
  return <div className="layout">{children}</div>;
}

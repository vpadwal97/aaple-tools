import { ReactNode } from "react";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "../constant/varaiables";

type InnerLayoutProps = {
  children: ReactNode;
};

export default function InnerLayout({ children }: InnerLayoutProps) {
  return <div className="layout">{children}</div>;
}

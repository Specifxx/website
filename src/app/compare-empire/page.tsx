import type { Metadata } from "next";
import { CompareEmpirePage } from "@/components/CompareEmpirePage";

export const metadata: Metadata = {
  title: "Compare Empire",
  description:
    "Compare Empire: Bill Yang's suite of 14 price-comparison websites for trading cards, hobby gear, tech and K-beauty, led by RiftCompare.",
};

export default function Page() {
  return <CompareEmpirePage />;
}

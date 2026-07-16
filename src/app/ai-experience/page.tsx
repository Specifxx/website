import type { Metadata } from "next";
import { AiExperiencePage } from "@/components/AiExperiencePage";

export const metadata: Metadata = {
  title: "AI Experience",
  description:
    "Bill Yang's hands-on AI & GenAI engineering experience — LLM API deployment and evaluation, production GenAI workflows, ML/MLOps advisory, and personal AI-agentic development practice.",
};

export default function Page() {
  return <AiExperiencePage />;
}

export const bgColors = ["#C7F5F5", "#CDE1FD", "#E7D4FF", "#FFD7ED"];

export const TAB_TYPES = {
  INFO: "info",
  LLM: "llm"
} as const;

export type TabType = (typeof TAB_TYPES)[keyof typeof TAB_TYPES];

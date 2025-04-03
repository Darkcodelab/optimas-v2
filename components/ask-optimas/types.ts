export type IViewState = "full" | "full-hidden" | "half" | "half-hidden";

export interface IChatItem {
  id: string;
  message: string;
  role: "user" | "system" | "loading";
  createdAt: Date;
}

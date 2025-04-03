export interface IChatItem {
  id: string;
  message: string;
  role: "user" | "system" | "loading";
  createdAt: Date;
}

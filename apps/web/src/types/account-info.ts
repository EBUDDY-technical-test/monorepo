import { User } from "@repo/entities";

export type AccountInfo = User & {
  token: string;
}
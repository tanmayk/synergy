import { Event } from "../event/Event";

export type EventLog = {
  createdAt: Date;
  event?: Event;
  id: string;
  logType?: "eventRejected" | "eventPublished";
  message: string;
};

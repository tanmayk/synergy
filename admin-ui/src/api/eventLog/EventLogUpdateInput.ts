import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type EventLogUpdateInput = {
  event?: EventWhereUniqueInput;
  logType?: "eventRejected" | "eventPublished";
  message?: string;
};

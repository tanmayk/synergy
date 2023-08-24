import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type EventLogCreateInput = {
  event: EventWhereUniqueInput;
  logType: "eventRejected" | "eventPublished";
  message: string;
};

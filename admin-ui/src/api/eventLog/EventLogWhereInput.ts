import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EventLogWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  logType?: "eventRejected" | "eventPublished";
  message?: StringFilter;
};

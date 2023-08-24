import { InputJsonValue } from "../../types";
import { EventLogUpdateManyWithoutEventsInput } from "./EventLogUpdateManyWithoutEventsInput";
import { UserUpdateManyWithoutEventsInput } from "./UserUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  dateDetails?: InputJsonValue;
  description?: string | null;
  endDate?: Date | null;
  eventLog?: EventLogUpdateManyWithoutEventsInput;
  eventType?: "oneDay" | "multiDay";
  gallery?: InputJsonValue;
  geoLocation?: InputJsonValue;
  headerImage?: InputJsonValue;
  location?: InputJsonValue;
  startDate?: Date;
  state?: "draft" | "underReview" | "rejected" | "published";
  status?: boolean | null;
  summary?: string | null;
  title?: string;
  volunteers?: UserUpdateManyWithoutEventsInput;
};

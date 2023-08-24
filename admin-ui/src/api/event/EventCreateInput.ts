import { InputJsonValue } from "../../types";
import { EventLogCreateNestedManyWithoutEventsInput } from "./EventLogCreateNestedManyWithoutEventsInput";
import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  dateDetails: InputJsonValue;
  description?: string | null;
  endDate?: Date | null;
  eventLog?: EventLogCreateNestedManyWithoutEventsInput;
  eventType: "oneDay" | "multiDay";
  gallery?: InputJsonValue;
  geoLocation?: InputJsonValue;
  headerImage?: InputJsonValue;
  location?: InputJsonValue;
  startDate: Date;
  state: "draft" | "underReview" | "rejected" | "published";
  status?: boolean | null;
  summary?: string | null;
  title: string;
  volunteers?: UserCreateNestedManyWithoutEventsInput;
};

import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventLogListRelationFilter } from "../eventLog/EventLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EventWhereInput = {
  dateDetails?: JsonFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  eventLog?: EventLogListRelationFilter;
  eventType?: "oneDay" | "multiDay";
  geoLocation?: JsonFilter;
  id?: StringFilter;
  location?: JsonFilter;
  startDate?: DateTimeFilter;
  state?: "draft" | "underReview" | "rejected" | "published";
  status?: BooleanNullableFilter;
  summary?: StringNullableFilter;
  title?: StringFilter;
  volunteers?: UserListRelationFilter;
};

import { JsonValue } from "type-fest";
import { EventLog } from "../eventLog/EventLog";
import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  dateDetails: JsonValue;
  description: string | null;
  endDate: Date | null;
  eventLog?: Array<EventLog>;
  eventType?: "oneDay" | "multiDay";
  gallery: JsonValue;
  geoLocation: JsonValue;
  headerImage: JsonValue;
  id: string;
  location: JsonValue;
  startDate: Date;
  state?: "draft" | "underReview" | "rejected" | "published";
  status: boolean | null;
  summary: string | null;
  title: string;
  updatedAt: Date;
  volunteers?: Array<User>;
};

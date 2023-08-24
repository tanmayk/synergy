import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  logType?: SortOrder;
  message?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  dateDetails?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  eventType?: SortOrder;
  gallery?: SortOrder;
  geoLocation?: SortOrder;
  headerImage?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  startDate?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  summary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Details" source="dateDetails" />
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Event Type" source="eventType" />
        <TextField label="Gallery" source="gallery" />
        <TextField label="Geo Location" source="geoLocation" />
        <TextField label="Header Image" source="headerImage" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="State" source="state" />
        <BooleanField label="Status" source="status" />
        <TextField label="Summary" source="summary" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

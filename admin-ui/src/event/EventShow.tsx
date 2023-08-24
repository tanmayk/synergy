import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="EventLog"
          target="eventId"
          label="Event Log"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Log Type" source="logType" />
            <TextField label="Message" source="message" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

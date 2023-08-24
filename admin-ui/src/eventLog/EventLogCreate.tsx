import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { EventTitle } from "../event/EventTitle";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <SelectInput
          source="logType"
          label="Log Type"
          choices={[
            { label: "Event Rejected", value: "eventRejected" },
            { label: "Event Published", value: "eventPublished" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};

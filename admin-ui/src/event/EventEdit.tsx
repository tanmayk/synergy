import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EventLogTitle } from "../eventLog/EventLogTitle";
import { UserTitle } from "../user/UserTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <DateInput label="End Date" source="endDate" />
        <ReferenceArrayInput
          source="eventLog"
          reference="EventLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventLogTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="eventType"
          label="Event Type"
          choices={[
            { label: "One Day", value: "oneDay" },
            { label: "Multi Day", value: "multiDay" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <div />
        <div />
        <div />
        <DateInput label="Start Date" source="startDate" />
        <SelectInput
          source="state"
          label="State"
          choices={[
            { label: "Draft", value: "draft" },
            { label: "Under Review", value: "underReview" },
            { label: "Rejected", value: "rejected" },
            { label: "Published", value: "published" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Status" source="status" />
        <TextInput label="Summary" multiline source="summary" />
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="volunteers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

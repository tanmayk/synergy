/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EventLogCreateNestedManyWithoutEventsInput } from "./EventLogCreateNestedManyWithoutEventsInput";
import { EnumEventEventType } from "./EnumEventEventType";
import { EnumEventState } from "./EnumEventState";
import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  dateDetails!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EventLogCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => EventLogCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => EventLogCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  eventLog?: EventLogCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: true,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @Field(() => EnumEventEventType)
  eventType!: "oneDay" | "multiDay";

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  gallery?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  geoLocation?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  headerImage?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  location?: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumEventState,
  })
  @IsEnum(EnumEventState)
  @Field(() => EnumEventState)
  state!: "draft" | "underReview" | "rejected" | "published";

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  status?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  volunteers?: UserCreateNestedManyWithoutEventsInput;
}

export { EventCreateInput as EventCreateInput };

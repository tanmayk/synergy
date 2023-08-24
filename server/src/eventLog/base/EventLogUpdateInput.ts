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
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumEventLogLogType } from "./EnumEventLogLogType";

@InputType()
class EventLogUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumEventLogLogType,
  })
  @IsEnum(EnumEventLogLogType)
  @IsOptional()
  @Field(() => EnumEventLogLogType, {
    nullable: true,
  })
  logType?: "eventRejected" | "eventPublished";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string;
}

export { EventLogUpdateInput as EventLogUpdateInput };

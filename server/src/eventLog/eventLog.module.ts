import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventLogModuleBase } from "./base/eventLog.module.base";
import { EventLogService } from "./eventLog.service";
import { EventLogController } from "./eventLog.controller";
import { EventLogResolver } from "./eventLog.resolver";

@Module({
  imports: [EventLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventLogController],
  providers: [EventLogService, EventLogResolver],
  exports: [EventLogService],
})
export class EventLogModule {}

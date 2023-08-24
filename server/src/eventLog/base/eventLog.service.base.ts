/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EventLog, Event } from "@prisma/client";

export class EventLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EventLogCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogCountArgs>
  ): Promise<number> {
    return this.prisma.eventLog.count(args);
  }

  async findMany<T extends Prisma.EventLogFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogFindManyArgs>
  ): Promise<EventLog[]> {
    return this.prisma.eventLog.findMany(args);
  }
  async findOne<T extends Prisma.EventLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogFindUniqueArgs>
  ): Promise<EventLog | null> {
    return this.prisma.eventLog.findUnique(args);
  }
  async create<T extends Prisma.EventLogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogCreateArgs>
  ): Promise<EventLog> {
    return this.prisma.eventLog.create<T>(args);
  }
  async update<T extends Prisma.EventLogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogUpdateArgs>
  ): Promise<EventLog> {
    return this.prisma.eventLog.update<T>(args);
  }
  async delete<T extends Prisma.EventLogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventLogDeleteArgs>
  ): Promise<EventLog> {
    return this.prisma.eventLog.delete(args);
  }

  async getEvent(parentId: string): Promise<Event | null> {
    return this.prisma.eventLog
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }
}

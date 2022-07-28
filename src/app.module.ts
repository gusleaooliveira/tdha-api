import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TaksService } from './taks/taks.service';
import { ExpensesModule } from './expenses/expenses.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RevenuesModule } from './revenues/revenues.module';

@Module({
  imports: [UsersModule, TasksModule, ExpensesModule, DashboardModule, RevenuesModule],
  controllers: [AppController],
  providers: [AppService, TaksService],
})
export class AppModule {}

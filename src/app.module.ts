import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TermConditionModule } from './termCondition/termCondition.module';
import { UserTermConditionModule } from './user-term-condition/user-term-condition.module';
import ormConfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    TodosModule,
    AuthModule,
    TermConditionModule,
    UserTermConditionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

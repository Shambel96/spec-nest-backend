import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // 👈 IMPORTANT
})
export class AppModule {}
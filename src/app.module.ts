import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-moduke/user.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [UserModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

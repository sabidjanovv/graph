import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Posts } from './entities/post.entity';
import { User } from '../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from '../users/users.resolver';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Posts])],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver, UsersResolver, UsersService],
})
export class PostsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [StudentsModule],
  controllers: [AppController, UserController, ProductsController, StudentsController],
  providers: [AppService, ProductsService, StudentsService],
})
export class AppModule {}

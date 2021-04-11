import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { RolesRepository } from './roles.repository';


@Module({
    imports: [TypeOrmModule.forFeature([RolesRepository])],
    providers: [RolesService]
})
export class RolesModule {}

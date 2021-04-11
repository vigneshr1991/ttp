import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Role } from './role.entity';

@Injectable()
@EntityRepository(Role)
export class RolesRepository extends Repository<Role> {}
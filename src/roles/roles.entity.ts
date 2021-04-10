import { Entity, Column, OneToMany } from 'typeorm';

import { BaseEntity } from "../base/base.entity";
import { UserRole } from "../utils/enums";
import { User } from 'src/users/user.entity';

@Entity(({ name: 'roles' }))
export class Role extends BaseEntity {

    @Column({
        type: "enum",
        enum: UserRole,
        nullable: false,
    })
    role: UserRole;

    @Column({ length: 100 })
    description: string;

    @OneToMany(() => User, (user) => user.roleId)
    public users: User[];
}
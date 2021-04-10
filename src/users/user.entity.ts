import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from "../base/base.entity";
import { Role } from 'src/roles/roles.entity';
import { IUser } from "../users/users.interface";

@Entity(({ name: 'users' }))
export class User extends BaseEntity implements IUser {

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    roleId: Role;

    @Column({
        type: "varchar",
        name: 'first_name',
        length: 30
    })
    firstName: string;

    @Column({
        type: "varchar",
        name: 'last_name',
        length: 30
    })
    lastName: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
    })
    email: string;

    @Column({
        type: "double",
        name: 'provider_id',
        unique: true
    })
    providerId: number;

    @Column() 
    dob: Date;

    @Column() 
    avatar: string;

    @Column({
        name: 'is_active',
        default: true,
    }) 
    isActive: boolean;
}
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from "../base/base.entity";
import { Role } from '../roles/role.entity';
import { IUser } from "../users/users.interface";
import { Provider } from '../utils/enums';

@Entity('users')
export class User extends BaseEntity implements IUser {

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
        type: "varchar",
        name: 'provider_id',
        unique: true,
        length: 30,
    })
    providerId: string;

    @Column({
        type: "enum",
        enum: Provider
    })
    provider: Provider;

    @Column({
        nullable: true
    }) 
    dob: Date;

    @Column({
        nullable: true
    }) 
    avatar: string;

    @Column({
        name: 'is_active',
        default: true,
    }) 
    isActive: boolean;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    roleId: number;
}
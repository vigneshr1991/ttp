import { Role } from "../roles/roles.entity";

export interface IUser {
    id?: null | number;
    email: string;
    firstName: string;
    lastName: string;
    roleId?: null | Role;
    providerId: number;
    dob?: null | Date
    avatar?: null | string;
    isActive: boolean;
    createdAt?: null | Date;
    modifiedAt?: null | Date;
}
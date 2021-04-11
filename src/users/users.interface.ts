import { Role } from "../roles/role.entity";
import { Provider } from "../utils/enums";

export interface IUser {
    id?: null | number;
    email: string;
    firstName: string;
    lastName: string;
    roleId?: null | number;
    role?: null | Role;
    providerId: string;
    provider: Provider;
    dob?: null | Date
    avatar?: null | string;
    isActive: boolean;
    createdAt?: null | Date;
    modifiedAt?: null | Date;
}
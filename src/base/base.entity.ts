import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @Column({
        name: 'modified_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    modifiedAt: Date;
}
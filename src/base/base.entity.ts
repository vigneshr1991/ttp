import { Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

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

    @BeforeUpdate()
    updateUpdatedAt() {
        this.modifiedAt = new Date();
    }

    @BeforeInsert()
    updateCreatedAt() {
        this.createdAt = new Date();
    }
}
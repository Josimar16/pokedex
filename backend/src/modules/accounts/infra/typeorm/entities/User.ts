import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity({ schema: 'auth', name: 'users' })
export class User {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({unique: true, nullable: true})
    nickname?: string;

    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column({select: false, default: false, nullable: true})
    redefinition_password?: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn({nullable: true, select: false})
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
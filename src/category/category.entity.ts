import { Entity, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45, unique: true })
    name: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn()
    revision: number;
}

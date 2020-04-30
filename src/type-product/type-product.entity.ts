import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class TypeProduct {
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
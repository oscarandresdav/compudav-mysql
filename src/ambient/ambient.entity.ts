import { Entity, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Company } from "src/company/company.entity";

@Entity()
export class Ambient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 3, unique: true })
    code: string;

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

    @OneToMany(type => Company, company => company.ambient)
    companies: Company[];
}

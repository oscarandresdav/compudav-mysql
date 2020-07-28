import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";
import { Document } from "src/document/document.entity";

@Entity()
export class TypeIssuance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45 })
    name: string;
    
    @Column({ length: 3 })
    code: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @OneToMany(type => Document, document => document.typeIssuance)
    documents: Document[];
    
}
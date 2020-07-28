import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";
import { Document } from "src/document/document.entity";

@Entity()
export class StatusDocument {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    name: string;
    
    @Column({ length: 25 })
    acronym: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @OneToMany(type => Document, document => document.statusDocument)
    documents: Document[];
    
}
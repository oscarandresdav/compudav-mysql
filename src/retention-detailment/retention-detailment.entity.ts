import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from "typeorm";
import { Document } from "src/document/document.entity";
import { RetentionConcept } from "src/retention-concept/retention-concept.entity";

@Entity()
export class RetentionDetailment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    tax_base: number;
    
    @Column({ type: "decimal", precision: 10, scale: 2 })
    total: number;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @ManyToOne(type => Document, document => document.retentionDetailments)
    document: Document;

    @ManyToOne(type => RetentionConcept, retentionConcept => retentionConcept.retentionDetailments)
    retentionConcept: RetentionConcept;
    
}
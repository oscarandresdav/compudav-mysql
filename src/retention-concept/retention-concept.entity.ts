import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";
import { RetentionDetailment } from "src/retention-detailment/retention-detailment.entity";

@Entity()
export class RetentionConcept {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    name: string;
    
    @Column({ length: 5 })
    code: string;
    
    @Column({ type: "smallint" })
    percentage: number;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @OneToMany(type => RetentionDetailment, retentionDetailment => retentionDetailment.retentionConcept)
    retentionDetailments: RetentionDetailment[];
    
}
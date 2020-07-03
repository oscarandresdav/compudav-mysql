import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

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
    
    @VersionColumn()
    revision: number;

}
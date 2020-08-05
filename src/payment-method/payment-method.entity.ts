import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";
import { Document } from "src/document/document.entity";

@Entity()
export class PaymentMethod {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    name: string;
    
    @Column({ length: 3 })
    code: string;

    @Column({ type: "smallint", unique: true })
    sort: number;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @OneToMany(type => Document, document => document.paymentMethod)
    documents: Document[];
    
}
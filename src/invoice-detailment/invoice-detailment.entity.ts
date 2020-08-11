import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from "typeorm";
import { Document } from "src/document/document.entity";
import { Product } from "src/product/product.entity";

@Entity()
export class InvoiceDetailment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "decimal", precision: 12, scale: 2 })
    quantity: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4, nullable: true })
    unitary_discount: number;
    
    @Column({ type: "decimal", precision: 12, scale: 2 })
    subtotal: number;
    
    @Column({ type: "text", nullable: true })
    additional_information: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
    @ManyToOne(type => Document, document => document.invoiceDetailments)
    document: Document;
    
    @ManyToOne(type => Product, product => product.invoiceDetailments)
    product: Product;

}
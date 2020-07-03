import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class Document {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 17, unique: true })
    number: string;
    
    @Column()
    date_of_issue: Date;
    
    @Column({ length: 45, unique: true })
    authorization_sri: string;
    
    @Column()
    date_of_authorization: Date;
    
    @Column({ length: 8 })
    numeric_code: string;
    
    @Column({ length: 49 })
    access_code: string;
        
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    additional_discount: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    total_discount: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal_iva0: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal_iva12: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal_no_object_iva: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal_exempt_from_iva: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    subtotal_without_taxes: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    ice_value: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    irbpnr_value: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    iva_value: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    gratuity_value: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    total_value: number;

    @Column({ type: "text", nullable: true })
    additional_information: string;
    
    @Column({ length: 15 })
    shipping_document_number: string;
    
    @Column({ type: "tinyint" })
    check_digit: number;
    
    @Column({ length: 6 })
    fiscal_year: string;
    
    @Column({ length: 3 })
    type_code_cod_doc: string;
    
    @Column({ length: 50 })
    type_label_cod_doc: string;
    
    @Column({ length: 17 })
    number_invoice_cod_doc: string;
    
    @Column()
    date_invoice_cod_doc: Date;
    
    @Column({ length: 45 })
    authorization_sri_code_doc: string;
    
    @Column({ length: 255 })
    reason_for_the_transfer: string;
    
    @Column({ length: 45 })
    number_of_the_customs_declaration: string;
    
    @Column()
    transportation_start_date: Date;
    
    @Column()
    transportation_termination_date: Date;
    
    @Column({ length: 255 })
    route: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn()
    revision: number;
 

}
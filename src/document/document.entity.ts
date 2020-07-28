import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, OneToMany } from "typeorm";
import { TypeIssuance } from "src/type-issuance/type-issuance.entity";
import { Contact } from "src/contact/contact.entity";
import { TypeDocument } from "src/type-document/type-document.entity";
import { StatusDocument } from "src/status-document/status-document.entity";
import { Carrier } from "src/carrier/carrier.entity";
import { PaymentMethod } from "src/payment-method/payment-method.entity";
import { InvoiceDetailment } from "src/invoice-detailment/invoice-detailment.entity";
import { RetentionDetailment } from "src/retention-detailment/retention-detailment.entity";

@Entity()
export class Document {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 17, unique: true })
    number: string;
    
    @Column()
    date_of_issue: Date;
    
    @Column({ length: 45, unique: true, nullable: true })
    authorization_sri: string;
    
    @Column({ nullable: true })
    date_of_authorization: Date;
    
    @Column({ length: 8, nullable: true })
    numeric_code: string;
    
    @Column({ length: 49, nullable: true })
    access_code: string;
        
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    additional_discount: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    total_discount: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal_iva0: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal_iva12: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal_no_object_iva: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal_exempt_from_iva: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    subtotal_without_taxes: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    ice_value: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    irbpnr_value: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    iva_value: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    gratuity_value: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    total_value: number;

    @Column({ type: "text", nullable: true })
    additional_information: string;
    
    @Column({ length: 15, nullable: true })
    shipping_document_number: string;
    
    @Column({ type: "tinyint", nullable: true })
    check_digit: number;
    
    @Column({ length: 6, nullable: true })
    fiscal_year: string;
    
    @Column({ length: 3, nullable: true })
    type_code_cod_doc: string;
    
    @Column({ length: 50, nullable: true })
    type_label_cod_doc: string;
    
    @Column({ length: 17, nullable: true })
    number_invoice_cod_doc: string;
    
    @Column({ nullable: true })
    date_invoice_cod_doc: Date;
    
    @Column({ length: 45, nullable: true })
    authorization_sri_code_doc: string;
    
    @Column({ length: 255, nullable: true })
    reason_for_the_transfer: string;
    
    @Column({ length: 45, nullable: true })
    number_of_the_customs_declaration: string;
    
    @Column({ nullable: true })
    transportation_start_date: Date;
    
    @Column({ nullable: true })
    transportation_termination_date: Date;
    
    @Column({ length: 255, nullable: true })
    route: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;

    @ManyToOne(type => TypeIssuance, typeIssuance => typeIssuance.documents)
    typeIssuance: TypeIssuance;

    @ManyToOne(type => TypeDocument, typeDocument => typeDocument.documents)
    typeDocument: TypeDocument;
    
    @ManyToOne(type => StatusDocument, statusDocument => statusDocument.documents)
    statusDocument: StatusDocument;

    @ManyToOne(type => Contact, contact => contact.documents)
    contact: Contact;
    
    @ManyToOne(type => Carrier, carrier => carrier.documents)
    carrier: Carrier;
    
    @ManyToOne(type => PaymentMethod, paymentMethod => paymentMethod.documents)
    paymentMethod: PaymentMethod;
    
    @OneToMany(type => InvoiceDetailment, invoiceDetailment => invoiceDetailment.document)
    invoiceDetailments: InvoiceDetailment[];
    
    @OneToMany(type => RetentionDetailment, retentionDetailment => retentionDetailment.document)
    retentionDetailments: RetentionDetailment[];
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, OneToMany } from "typeorm";

import { TypeIdentification } from "src/type-identification/type-identification.entity";
import { Document } from "src/document/document.entity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20, unique: true })
    id_number: string;
    
    @Column({ length: 255 })
    business_name: string;
    
    @Column({ length: 255, nullable: true  })
    tradename: string;
    
    @Column({ length: 255, nullable: true })
    address: string;
    
    @Column({ length: 255, nullable: true })
    landline: string;
    
    @Column({ length: 255, nullable: true })
    mobile_phone: string;
    
    @Column({ length: 255, nullable: true })
    email: string;

    @Column({ default: false, nullable: true })
    client: boolean;
    
    @Column({ default: false, nullable: true })
    provider: boolean;
    
    @Column({ default: false, nullable: true })
    special_taxpayer: boolean;

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
    
    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.contacts)
    typeIdentification: TypeIdentification;

    @OneToMany(type => Document, document => document.contact)
    documents: Document[];

}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from "typeorm";

import { TypeIdentification } from "src/type-identification/type-identification.entity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20, unique: true, nullable: false })
    id_number: string;
    
    @Column({ length: 255, nullable: false })
    business_name: string;
    
    @Column({ length: 255 })
    tradename: string;
    
    @Column({ length: 255 })
    landline: string;
    
    @Column({ length: 255 })
    mobile_phone: string;
    
    @Column({ length: 255 })
    email: string;

    @Column({ default: false })
    client: boolean;
    
    @Column({ default: false })
    provider: boolean;
    
    @Column({ default: false })
    special_taxpayer: boolean;

    @Column({ type: "text", nullable: true })
    additional_information: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn()
    revision: number;

    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.contacts)
    typeIdentification: TypeIdentification;

}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";

import { Contact } from "src/contact/contact.entity";

@Entity()
export class TypeIdentification {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 3, unique: true })
    code: string;

    @Column({ length: 45, unique: true })
    description: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn({nullable: true})
    revision: number;
    
    @OneToMany(type => Contact, contact => contact.typeIdentification)
    contacts: Contact[];
    
}
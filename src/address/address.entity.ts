import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

import { City } from "src/city/city.entity";
import { Contact } from "src/contact/contact.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    street: string;
    
    @Column({ length: 20 })
    landline: string;
    
    @Column({ length: 20 })
    mobile_phone: string;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
    @ManyToOne(type => City, city => city.addresses)
    city: City;

    @ManyToMany(type => Contact)
    @JoinTable()
    contacts: Contact[];
    
}
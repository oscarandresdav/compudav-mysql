import { Entity, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

import { Company } from "src/company/company.entity";
import { City } from "src/city/city.entity";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 3, unique: true })
    location_code: string;
    
    @Column({ length: 3, unique: true })
    emission_point_code: string;

    @Column({ length: 255, unique: true })
    name: string;
    
    @Column({ length: 255 })
    address: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 255 })
    email: string;
    
    @Column({ length: 9 })
    sequential_invoice: string;

    @Column({ length: 9 })
    sequential_retention: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn()
    revision: number;

    @ManyToOne(type => City, city => city.id)
    city: City[];

    @OneToMany(type => Company, company => company.business_name)
    company: Company;
}

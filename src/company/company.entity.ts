import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from "typeorm";

import { Ambient } from "src/ambient/ambient.entity";
import { Location } from "src/location/location.entity";

@Entity()
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, unique: true })
    business_name: string;
    
    @Column({ length: 255 })
    tradename: string;
    
    @Column({ length: 13 })
    ruc: string;
    
    @Column({ length: 255 })
    main_address: string;
    
    @Column({ length: 255 })
    logo: string;
    
    @Column({ length: 20 })
    phone: string;
    
    @Column({ default: false })
    keep_accounting_record: boolean;
    
    @Column({ length: 13 })
    special_taxpayer: string;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
    @ManyToOne(type => Ambient, ambient => ambient.companies)
    ambient: Ambient;
    
    @ManyToOne(type => Location, location => location.companies)
    location: Location;

}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, OneToMany } from "typeorm";
import { Province } from "src/province/province.entity";
import { Location } from "src/location/location.entity";
import { Address } from "src/address/address.entity";

@Entity()
export class City {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, unique: true })
    name: string;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn()
    revision: number;

    @ManyToOne(type => Province, province => province.id)
    province: Province[];

    @OneToMany(type => Location, location => location.name)
    location: Location;

    @OneToMany(type => Address, address => address.street)
    address: Address;

}
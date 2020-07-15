import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class Carrier {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20, unique: true })
    id_number: string;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 10 })
    license_plate: string;

    @Column({ length: 255 })
    landline: string;

    @Column({ length: 255 })
    mobile_phone: string;

    @Column({ length: 255 })
    email: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn({nullable: true})
    revision: number;
    
}
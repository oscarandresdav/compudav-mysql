import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";

import { Product } from "./../product/product.entity";

@Entity()
export class TypeProduct {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45, unique: true })
    name: string;

    @Column({ type: "smallint", unique: true })
    sort: number;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn({nullable: true})
    revision: number;
    
    @OneToMany(type => Product, product => product.typeProduct)
    products: Product[];
    
}
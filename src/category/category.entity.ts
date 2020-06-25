import { Entity, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Product } from "./../product/product.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45, unique: true })
    name: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn()
    revision: number;
    
    @OneToMany(type => Product, product => product.category)
    products: Product[];
    
}

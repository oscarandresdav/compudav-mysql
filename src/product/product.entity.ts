import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne } from "typeorm";

import { Category } from "./../category/category.entity";
import { IceRate } from "./../ice-rate/ice-rate.entity";
import { IvaRate } from "./../iva-rate/iva-rate.entity";
import { TypeProduct } from "./../type-product/type-product.entity";
import { UnitMeasurement } from "./../unit-measurement/unit-measurement.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45, unique: true })
    main_code: string;
    
    @Column({ length: 45, unique: true })
    aux_code: string;
    
    @Column({ length: 255, unique: true })
    name: string;

    @Column({ type: "text", nullable: true })
    detail: string;

    @Column({ type: "decimal", precision: 10, scale: 4 })
    cost: number;
    
    @Column({ type: "decimal", precision: 5, scale: 4 })
    percentage_price: number
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    price: number;

    @Column({ type: "decimal", precision: 5, scale: 4 })
    percentage_price2: number
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    price2: number;

    @Column({ type: "decimal", precision: 5, scale: 4 })
    percentage_price3: number
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    price3: number;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn()
    revision: number;

    @ManyToOne(type => Category, category => category.id)
    category: Category[];
    
    @ManyToOne(type => IceRate, iceRate => iceRate.id)
    iceRate: IceRate[];

    @ManyToOne(type => IvaRate, ivaRate => ivaRate.id)
    ivaRate: IvaRate[];

    @ManyToOne(type => TypeProduct, typeProduct => typeProduct.id)
    typeProduct: TypeProduct[];
    
    @ManyToOne(type => UnitMeasurement, measurement => measurement.id)
    unitMeasurement: UnitMeasurement[];    

}
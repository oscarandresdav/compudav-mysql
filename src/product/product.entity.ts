import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne, OneToMany } from "typeorm";

import { Category } from "./../category/category.entity";
import { IceRate } from "./../ice-rate/ice-rate.entity";
import { IvaRate } from "./../iva-rate/iva-rate.entity";
import { TypeProduct } from "./../type-product/type-product.entity";
import { UnitMeasurement } from "./../unit-measurement/unit-measurement.entity";
import { Manufacturer } from "src/manufacturer/manufacturer.entity";
import { InvoiceDetailment } from "src/invoice-detailment/invoice-detailment.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45, unique: true })
    main_code: string;
    
    @Column({ length: 45, unique: true, nullable: true })
    aux_code: string;
    
    @Column({ length: 255, unique: true })
    name: string;

    @Column({ type: "text", nullable: true })
    detail: string;

    @Column()
    stock: number;
    
    @Column({ default: 0})
    minimum_stock_level: number;
    
    @Column({ default: 0})
    stock_indicator: number;
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    cost: number;
    
    @Column({ type: "decimal", precision: 10, scale: 4 })
    percentage_price: number
    
    @Column({ type: "decimal", precision: 12, scale: 4 })
    price: number;

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
    pvp: number;

    @Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
    percentage_price2: number
    
    @Column({ type: "decimal", precision: 12, scale: 4, nullable: true })
    price2: number;

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
    pvp2: number;

    @Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
    percentage_price3: number
    
    @Column({ type: "decimal", precision: 12, scale: 4, nullable: true })
    price3: number;

    @Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
    pvp3: number;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
    @ManyToOne(type => Category, category => category.products)
    category: Category;
    
    @ManyToOne(type => Manufacturer, manufacturer => manufacturer.products)
    manufacturer: Manufacturer;
    
    @ManyToOne(type => IceRate, iceRate => iceRate.products)
    iceRate: IceRate;

    @ManyToOne(type => IvaRate, ivaRate => ivaRate.products)
    ivaRate: IvaRate;

    @ManyToOne(type => TypeProduct, typeProduct => typeProduct.products)
    typeProduct: TypeProduct;
    
    @ManyToOne(type => UnitMeasurement, measurement => measurement.products)
    unitMeasurement: UnitMeasurement;    

    @OneToMany(type => InvoiceDetailment, invoiceDetailment => invoiceDetailment.product)
    invoiceDetailments: InvoiceDetailment[];

}
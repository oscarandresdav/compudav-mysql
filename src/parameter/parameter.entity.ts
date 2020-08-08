import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class Parameter {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "smallint", unique: true })
    preset: number;

    @Column()
    printerName: string;

    @Column()
    printerFontFamily: string;

    @Column({ type: "smallint", default: 8 })
    printerFontSize: number;

    @Column({ type: "smallint", default: 58 })
    printerPageWidth: number;

    @Column({ type: "smallint", default: 140 })
    printerPageHeight: number;

    @Column({ type: "smallint", default: 0 })
    printerHeaderPositionX: number;

    @Column({ type: "smallint", default: 0 })
    printerHeaderPositionY: number;
    
    @Column({ type: "smallint", default: 0 })
    printerMainPositionX: number;
    
    @Column({ type: "smallint", default: 0 })
    printerMainPositionY: number;

    @Column({ type: "smallint", default: 0 })
    printerFooterPositionX: number;
    
    @Column({ type: "smallint", default: 0 })
    printerFooterPositionY: number;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn({nullable: true})
    revision: number;
    
}

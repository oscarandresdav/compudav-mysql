import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class TypeIssuance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45 })
    name: string;
    
    @Column({ length: 3 })
    code: string;
    
    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
}
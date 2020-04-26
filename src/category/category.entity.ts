import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class cecat_categoria {
    @PrimaryColumn({length: 10})
    cecat_codigo: string;

    @Column({length: 45})
    cecat_descripcion: string;

    @Column({default: true})
    cecat_estado: boolean;
}

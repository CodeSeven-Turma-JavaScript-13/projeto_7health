import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: 'tb_categorias'})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: false})
    nome: string;

    @Column({length: 255, nullable: true})
    descricao: string;
}
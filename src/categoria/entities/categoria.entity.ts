import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'tb_categorias'})
export class Categoria{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 100, nullable: false})
    nome: string;

    @ApiProperty()
    @Column({length: 255, nullable: true})
    descricao: string;

    //Relacionamento com Produto
    @ApiProperty({ type: () => Produto })
    @OneToMany(() => Produto,(produto)=> produto.categoria)
    produto: Produto[];
}
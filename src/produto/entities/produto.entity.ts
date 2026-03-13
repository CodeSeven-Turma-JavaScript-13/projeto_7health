import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { NumericTransformer } from "../../../util/numericTransformer";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({name: 'tb_produtos'})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    //REGISTRO DO NOME
    @Transform(({value} : TransformFnParams) => value ?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome : string;

    
    //REGISTRO DA DESCRIÇÃO
    @Transform(({value} : TransformFnParams) => value ?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;


    //REGISTRO DO PREÇO
    @IsNumber({ maxDecimalPlaces: 2})
    @IsNotEmpty()
    @IsPositive()
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: new NumericTransformer(),
    })
    preco: number;


    //REGISTRO DO CALORIA
    @Column({ type: 'int' })
    caloria: number;

    
    //REGISTRO DO IMAGEM
    @IsString()
    @IsUrl()
    @Column({ length: 500 })
    imagem: string;



    //Relacionamento com Usuario
    @ManyToOne(()=> Usuario, (usuario)=> usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;


    //Relacionamento com Categoria
    @ManyToOne(()=> Categoria, (categoria)=> categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

}
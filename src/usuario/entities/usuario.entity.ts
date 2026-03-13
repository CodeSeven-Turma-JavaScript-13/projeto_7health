import { Transform, TransformFnParams } from "class-transformer"
import { IsDateString, IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number
    

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @Column() 
    foto: string


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsDateString()
    @Column({type: "date"})
    dataNascimento: Date

    @CreateDateColumn({ type: "timestamp" })
    dataCriacao: Date

    
    //Relacionamento com Produto
    @OneToMany(() => Produto,(produto)=> produto.usuario)
    produto: Produto[];
   

} 
import { Transform, TransformFnParams } from "class-transformer"
import { IsDateString, IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"
import { ApiProperty } from "@nestjs/swagger"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number
    

    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string


    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @ApiProperty()
    @Column() 
    foto: string


    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsDateString()
    @Column({type: "date"})
    dataNascimento: Date

    @ApiProperty()
    @CreateDateColumn({ type: "timestamp" })
    dataCriacao: Date

    
    //Relacionamento com Produto
    @ApiProperty({ type: () => Produto })
    @OneToMany(() => Produto,(produto)=> produto.usuario)
    produto: Produto[];
   

} 
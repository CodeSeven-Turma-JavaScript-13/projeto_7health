import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, LessThan, MoreThan, Repository } from "typeorm";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}

    // PROCURAR TODOS
    async findAll(): Promise<Produto[]>{
        return this.produtoRepository.find()
    }


    // PROCURAR POR ID
    async findById(id: number): Promise<Produto>{
        const produto = await this.produtoRepository.findOne({
            where: {
                id
            }
        })

        if(!produto)
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

        return produto;
    }  

    
    // PROCURAR POR CALORIA
     async findAllByCaloria(maior?: number, menor?: number): Promise<Produto[]> {

    if(maior){
        return this.produtoRepository.find({
            where: { caloria: MoreThan(Number(maior)) }
        })
    }

    if(menor){
        return this.produtoRepository.find({
            where: { caloria: LessThan(Number(menor)) }
        })
    }

    return this.produtoRepository.find()
    } 


    // CRIAR PRODUTO
    async create(produto: Produto): Promise<Produto> {
     return this.produtoRepository.save(produto);

}

// ATUALIZAR PRODUTO
async update(produto: Produto): Promise<Produto>{
    if(!produto.id || produto.id <= 0)
        throw new HttpException("O ID da produto é inválido!", HttpStatus.BAD_REQUEST);

    await this.findById(produto.id);

    return this.produtoRepository.save(produto);
}


// DELETAR PRODUTO
async Delete(id: number): Promise<DeleteResult>{
   await this.findById(id);

   return this.produtoRepository.delete(id);
}

}
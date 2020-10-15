import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Image from './Image'

@Entity('orphanages') //TypeORM entende que é para o tabela orphanages
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;
    
    @Column()
    longitude:number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage,{// (FUNC1, FUNC2) => FUNC1 DEVOLVE O TIPO DO RETORNO; FUNC2: DADO UMA IMAGEM, QUAL É O RELACIONAMENTO DA OUTRA TABELA
        cascade: ['insert', 'update']
    }) 
    @JoinColumn({name: 'orphanage_id'}) //SE NAO UTILIZAR O JOIN COLUMN, O BANCO OBRIGA QUE O NOME DO CAMPO SEJA CAMEL CASE: orphanagesId que é diferente de orphanages_id
    images: Image[]

}
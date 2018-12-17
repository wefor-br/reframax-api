import { ApiModelProperty } from '@nestjs/swagger';

export class Recurso {

    @ApiModelProperty()
    readonly uuid: string;

    @ApiModelProperty()
    readonly codigo: string;

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly descricao: string;

    @ApiModelProperty()
    readonly quantidade: string;
}

export class Operario {

    @ApiModelProperty()
    readonly uuid: string;

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly matricula: string;
}

export class Equipamento {

    @ApiModelProperty()
    readonly uuid: string;

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly descricao: string;
}

export class Execucao {

    @ApiModelProperty()
    readonly uuid: string;

    @ApiModelProperty()
    readonly de: string;

    @ApiModelProperty()
    readonly ate: string;
}


export class Atividade {

    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly data: string;

    @ApiModelProperty()
    readonly status: string;

    @ApiModelProperty()
    readonly codigo: string;

    @ApiModelProperty()
    readonly duracao: string;

    @ApiModelProperty()
    readonly descricao: string;

    @ApiModelProperty({type : [Recurso]})
    readonly recursos: Recurso[];

    @ApiModelProperty({type : [Equipamento]})
    readonly equipamentos: Equipamento[];

    @ApiModelProperty({type : [Operario]})
    readonly maoDeObraAlocado: Operario[];

    @ApiModelProperty({type : [Operario]})
    readonly maoDeObraDisponivel: Operario[];

    @ApiModelProperty({type : [Execucao]})
    readonly execucoes: Execucao[];

}


export class Planejamento {

    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly data: string;

    @ApiModelProperty({type: [Atividade]})
    readonly atividades: Atividade[];
}


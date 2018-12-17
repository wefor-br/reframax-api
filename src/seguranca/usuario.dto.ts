import { ApiModelProperty } from "@nestjs/swagger";

export class Usuario {

    @ApiModelProperty()
    readonly nome: string;

    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly img: string;

    @ApiModelProperty()
    readonly matricula: string;
}

export class Login {

    @ApiModelProperty()
    readonly matricula: string;

    @ApiModelProperty()
    readonly senha: string;
}

export class Token {

    @ApiModelProperty()
    tokenDeAcesso: string;

    @ApiModelProperty()
    expiraEm: number;
}
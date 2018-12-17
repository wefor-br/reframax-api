import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Usuario, Login } from './usuario.dto';
import { SegurancaService } from './seguranca.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('seguranca')
@ApiUseTags('seguranca')
@ApiResponse({status: 500, description: 'Erro Interno'})
export class SegurancaController {

    constructor(private readonly segurancaService: SegurancaService) {}

    @Post('login')
    @ApiResponse({status : 201, description: 'Login efetuado com sucesso'})
    @ApiResponse({status : 401, description: 'Login Não Autorizado'})
    async login(@Body() login: Login) : Promise<any>{
        return await this.segurancaService.createToken(login);
    }


    @ApiBearerAuth()
    @Get('infoUsuario')
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status : 200, description: 'Informações do usuário retornadas com sucesso'})
    @ApiResponse({status : 401, description: 'Acesso Não Autorizado'})
    async infoUsuario() : Promise<Usuario>{
        return await new Usuario();
    }

}

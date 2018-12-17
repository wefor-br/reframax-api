import { Controller, Get, Post, HttpCode, Body, UseGuards } from '@nestjs/common';
import { Planejamento } from './planejamento.dto';
import { ApiUseTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../seguranca/guards/jwt-auth.guard';

@ApiBearerAuth()
@ApiUseTags('planejamentos')
@ApiResponse({status: 401, description: 'Acesso Não Autorizado'})
@ApiResponse({status: 500, description: 'Erro Interno'})
@Controller('planejamentos')
export class PlanejamentosController {

    @Get()
    @ApiResponse({status : 200, description: 'Lista de Planejamentos retornadas', })
    @UseGuards(JwtAuthGuard)
    async findAll() : Promise<Planejamento[]> {
        return Array();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status : 201, description: 'Lista de Planejamentos sincronizados'})
    async create(@Body() planejamento: Planejamento) {
        
    }
}

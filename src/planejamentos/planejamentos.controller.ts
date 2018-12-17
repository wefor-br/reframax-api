import { Controller, Get, Post, HttpCode, Body, UseGuards } from '@nestjs/common';
import { Planejamento, PlanejamentosComCheckpoint } from './planejamento.dto';
import { ApiUseTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../seguranca/guards/jwt-auth.guard';

@ApiBearerAuth()
@ApiUseTags('planejamentos')
@ApiResponse({status: 401, description: 'Acesso Não Autorizado'})
@ApiResponse({status: 500, description: 'Erro Interno'})
@Controller('planejamentos')
export class PlanejamentosController {

    @Get(':checkpoint')
    @ApiResponse({status : 200, description: 'Lista de Planejamentos retornadas', type: PlanejamentosComCheckpoint})
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<PlanejamentosComCheckpoint> {
        return await new PlanejamentosComCheckpoint();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status : 201, description: 'Lista de Planejamentos sincronizados'})
    async create(@Body() planejamento: Planejamento) {

    }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login, Token } from './usuario.dto';

@Injectable()
export class SegurancaService {

    constructor(private readonly jwtService: JwtService) {}


    async createToken(usuarioJwt: Login) {
        const tokenDeAcesso = this.jwtService.sign(usuarioJwt);

        const token : Token = {
            expiraEm: 3600,
            tokenDeAcesso,
        };

        return token;
    }

    async validateUser(payload: Login) {
        return {}
    }
}

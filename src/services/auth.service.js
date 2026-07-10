import repo from '../repositories/user.repository.js';
import createError from '../utils/app-error.js';
import hashPassword, { compareHashedPassword } from '../utils/hash-password.js';
import { createToken } from '../middlewares/auth.middleware.js';


export default {
    async loginUser({ email, password }) {
        if (!email?.trim()) throw createError('E-mail é obrigatório.', 400);
        if (!password) throw createError('Senha é obrigatória.', 400);

        const user = await repo.findByEmail( email.trim().toLowerCase());

        if (!user) {
            throw createError('E-mail ou senha inválidos.', 401);
        }

        const passwordIsValid = compareHashedPassword(
            password,
            user.password
        );

        if (!passwordIsValid) {
            throw createError('E-mail ou senha inválidos.', 401);
        }

        const token = createToken({
            id: user.id,
            email: user.email,
            roles: [
            user.role
            ],
        });

        return { user, token };
    }
}
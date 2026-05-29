import { createGameRepository, findAllGames, updateGameRepository } from "../repositories/game.repository";

export const getGames = async () => {
    return await findAllGames();
};

export const createGameService = async (
    nome: string,
    categoria: string,
    nota: number
) => {

    if (!nome || !categoria) {
        throw new Error(
            "Nome e categoria são obrigatórios"
        );
    }
    if (nota < 0 || nota > 10) {
        throw new Error(
            "Nota inválida"
        );
    }
    return await createGameRepository(
        nome,
        categoria,
        nota
    );
};

export const updateGameService = async (
    id: number,
    nome: string,
    categoria: string,
    nota: number
) => {

    if (!id) {
        throw new Error(
            "Id é obrigatório"
        );
    }

    if (!nome || !categoria) {
        throw new Error(
            "Nome e categoria são obrigatórios"
        );
    }

    if (nota < 0 || nota > 10) {
        throw new Error(
            "Nota inválida"
        );
    }

    const game = await updateGameRepository(
        id,
        nome,
        categoria,
        nota
    );

    if (!game) {
        throw new Error(
            "Game não encontrado"
        );
    }

    return game;
};
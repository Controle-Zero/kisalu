import { postAtividade, putAtividade } from "../API/atividade.api";
import Atividade from "../models/Atividade";

export async function criarAtividade(atividade: Atividade) {
  return await postAtividade(atividade);
}

export async function actualizarAtividade(atividade: Atividade) {
  return await putAtividade(atividade);
}

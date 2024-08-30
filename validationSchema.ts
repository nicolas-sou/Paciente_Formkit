import { z } from 'zod';

// Defina seu esquema de validação usando o Zod
export const patientSchema = z.object({
  nome: z.string().min(1, { message: "Nome Completo é obrigatório" }),
  idade: z.string().min(1, { message: "Idade é obrigatória" }).regex(/^\d+$/, { message: "Idade deve ser um número" }),
  cpf: z.string().min(1, { message: "CPF é obrigatório" }).regex(/^\d{11}$/, { message: "CPF deve ter 11 dígitos" }),
  data_nascimento: z.string().min(1, { message: "Data de Nascimento é obrigatória" }),
  endereco: z.string().min(1, { message: "Endereço é obrigatório" }),
  numero: z.string().min(1, { message: "Número é obrigatório" }),
  altura: z.string().min(1, { message: "Altura é obrigatória" }).regex(/^\d+(\.\d+)?$/, { message: "Altura deve ser um número" }),
  peso: z.string().min(1, { message: "Peso é obrigatório" }).regex(/^\d+(\.\d+)?$/, { message: "Peso deve ser um número" }),
  sintomas: z.string().min(1, { message: "Sintomas são obrigatórios" }),
});

/*
  Warnings:

  - You are about to drop the `Cartao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GrupoCartao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Loja` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioCartao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transacao" DROP CONSTRAINT "Transacao_grupoCartaoId_fkey";

-- DropForeignKey
ALTER TABLE "Transacao" DROP CONSTRAINT "Transacao_lojaId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioCartao" DROP CONSTRAINT "UsuarioCartao_cartaoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioCartao" DROP CONSTRAINT "UsuarioCartao_grupoCartaoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioCartao" DROP CONSTRAINT "UsuarioCartao_usuarioId_fkey";

-- DropTable
DROP TABLE "Cartao";

-- DropTable
DROP TABLE "GrupoCartao";

-- DropTable
DROP TABLE "Loja";

-- DropTable
DROP TABLE "Transacao";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "UsuarioCartao";

-- CreateTable
CREATE TABLE "cartoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupos_cartoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor_restante" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "GrupoCartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacoes" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "eh_gasto" BOOLEAN NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "lojaId" INTEGER NOT NULL,
    "grupoCartaoId" INTEGER NOT NULL,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_cartoes" (
    "id" SERIAL NOT NULL,
    "eh_admin" BOOLEAN NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cartaoId" INTEGER NOT NULL,
    "grupoCartaoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioCartao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "Transacao_grupoCartaoId_fkey" FOREIGN KEY ("grupoCartaoId") REFERENCES "grupos_cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "Transacao_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_grupoCartaoId_fkey" FOREIGN KEY ("grupoCartaoId") REFERENCES "grupos_cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `cartaoId` on the `usuarios_cartoes` table. All the data in the column will be lost.
  - You are about to drop the column `grupoCartaoId` on the `usuarios_cartoes` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `usuarios_cartoes` table. All the data in the column will be lost.
  - Added the required column `cartao_id` to the `usuarios_cartoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupo_cartao_id` to the `usuarios_cartoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `usuarios_cartoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "usuarios_cartoes" DROP CONSTRAINT "UsuarioCartao_cartaoId_fkey";

-- DropForeignKey
ALTER TABLE "usuarios_cartoes" DROP CONSTRAINT "UsuarioCartao_grupoCartaoId_fkey";

-- DropForeignKey
ALTER TABLE "usuarios_cartoes" DROP CONSTRAINT "UsuarioCartao_usuarioId_fkey";

-- AlterTable
ALTER TABLE "usuarios_cartoes" DROP COLUMN "cartaoId",
DROP COLUMN "grupoCartaoId",
DROP COLUMN "usuarioId",
ADD COLUMN     "cartao_id" INTEGER NOT NULL,
ADD COLUMN     "grupo_cartao_id" INTEGER NOT NULL,
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_cartaoId_fkey" FOREIGN KEY ("cartao_id") REFERENCES "cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_grupoCartaoId_fkey" FOREIGN KEY ("grupo_cartao_id") REFERENCES "grupos_cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cartoes" ADD CONSTRAINT "UsuarioCartao_usuarioId_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

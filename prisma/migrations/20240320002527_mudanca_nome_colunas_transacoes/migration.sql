/*
  Warnings:

  - You are about to drop the column `grupoCartaoId` on the `transacoes` table. All the data in the column will be lost.
  - You are about to drop the column `lojaId` on the `transacoes` table. All the data in the column will be lost.
  - Added the required column `empresa_id` to the `transacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupo_cartao_id` to the `transacoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transacoes" DROP CONSTRAINT "Transacao_grupoCartaoId_fkey";

-- DropForeignKey
ALTER TABLE "transacoes" DROP CONSTRAINT "Transacao_lojaId_fkey";

-- AlterTable
ALTER TABLE "transacoes" DROP COLUMN "grupoCartaoId",
DROP COLUMN "lojaId",
ADD COLUMN     "empresa_id" INTEGER NOT NULL,
ADD COLUMN     "grupo_cartao_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "Transacao_grupoCartaoId_fkey" FOREIGN KEY ("grupo_cartao_id") REFERENCES "grupos_cartoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "Transacao_lojaId_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

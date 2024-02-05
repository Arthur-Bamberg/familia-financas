-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cartao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrupoCartao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor_restante" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GrupoCartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioCartao" (
    "id" SERIAL NOT NULL,
    "eh_admin" BOOLEAN NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cartaoId" INTEGER NOT NULL,
    "grupoCartaoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioCartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "eh_gasto" BOOLEAN NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "lojaId" INTEGER NOT NULL,
    "grupoCartaoId" INTEGER NOT NULL,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loja" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "UsuarioCartao" ADD CONSTRAINT "UsuarioCartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCartao" ADD CONSTRAINT "UsuarioCartao_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "Cartao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCartao" ADD CONSTRAINT "UsuarioCartao_grupoCartaoId_fkey" FOREIGN KEY ("grupoCartaoId") REFERENCES "GrupoCartao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacao" ADD CONSTRAINT "Transacao_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacao" ADD CONSTRAINT "Transacao_grupoCartaoId_fkey" FOREIGN KEY ("grupoCartaoId") REFERENCES "GrupoCartao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

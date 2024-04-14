-- CreateTable
CREATE TABLE "unity" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "unity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "priceSale" DOUBLE PRECISION NOT NULL,
    "unity_id" BIGINT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unity_name_key" ON "unity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

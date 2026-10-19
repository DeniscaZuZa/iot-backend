const {PrismaClient} = require("../database/prisma")

class Temperatura {
    async criar(valor){
        return await Prisma.temperatura.create({
            data:{
                valor
            }
        })
    }

    async listar(){
        return await Prisma.temperatura.findMany()
    }


}

module.exports = new Temperatura()
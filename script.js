const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const newLink = await prisma.link.create({
        data: {
            description: 'First description to a blog',
            url: 'earthboundmisfit.me'
        }
    })
    const newLink2 = await prisma.link.create({
        data: {
            description: 'Second description to a blog',
            url: 'earthboundmisfit.me'
        }
    })
    const allLinks = await prisma.link.findMany();
    console.log(allLinks)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async() => {
        await prisma.$disconnect();
    })
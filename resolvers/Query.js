function feed(parent, args, context, info){
    const where = args.filter ? {
        OR: [
            { description: { contains: args.filter } },
            { url: { contains: args.filter} }
        ]
    } : {}
    return context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy
    })
}

module.exports = {
    feed
}
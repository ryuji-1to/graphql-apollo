const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Query = {
  todos: (parent, args) => {
    return prisma.todo.findMany();
  },
};

module.exports = { Query };

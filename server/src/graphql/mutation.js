const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Mutation = {
  addTodo: (_parent, args) => {
    return prisma.todo.create({
      data: {
        text: args.text,
      },
    });
  },
  toggleIsDone: (_parent, args) => {
    return prisma.todo.update({
      where: { id: Number(args.id) },
      data: { isDone: !args.isDone },
    });
  },
  deleteTodoById: (_parent, args) => {
    return prisma.todo.delete({ where: { id: Number(args.id) } });
  },
  deleteIsDoneTodos: (_parent, args) => {
    return prisma.todo.deleteMany({ where: { isDone: true } });
  },
};

module.exports = { Mutation };

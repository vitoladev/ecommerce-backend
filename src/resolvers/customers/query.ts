import { Customer } from '@prisma/client';
import { Context } from '../../context';

export const query = {
  Query: {
    customers: async (
      parent: unknown,
      args: unknown,
      { prisma }: Context
    ): Promise<readonly Customer[]> => {
      return await prisma.customer.findMany();
    },
    customerById: async (
      _parent: unknown,
      args: { readonly id: string },
      { prisma }: Context
    ): Promise<Customer | null> => {
      return await prisma.customer.findUnique({ where: { id: args.id } });
    }
  }
};

import { Customer } from '@prisma/client';
import { Context } from '../../context';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { LoginInput, tokenType } from '../../types/customer';

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
    },
    login: async (
      _parent: unknown,
      args: { readonly input: LoginInput },
      { prisma }: Context
    ): Promise<tokenType | Error> => {
      const customer = await prisma.customer.findUnique({
        where: { email: args.input.email }
      });

      if (customer) {
        const passwordIsEqual = await compare(
          args.input.password,
          customer.password
        );

        return passwordIsEqual
          ? {
              token: sign({ customerId: customer?.id }, 'TEST'),
              customer: customer
            }
          : new Error('Invalid email or password');
      } else {
        return new Error('Customer does not exist');
      }
    }
  }
};

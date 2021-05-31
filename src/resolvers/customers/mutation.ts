import { Context } from '../../context';
import { CustomerCreateInput, tokenType } from '../../types/customer';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const mutation = {
  Mutation: {
    signUp: async (
      parent: unknown,
      args: { readonly input: CustomerCreateInput },
      { prisma }: Context
    ): Promise<tokenType> => {
      const { address } = args.input;

      const hashedPassword: string = await hash(args.input.password, 10);
      const customer = await prisma.customer.create({
        data: {
          email: args.input.email,
          firstName: args.input.firstName,
          lastName: args.input.lastName,
          password: hashedPassword
        }
      });

      await prisma.address.create({
        data: {
          customerId: customer.id,
          address: address.address,
          postalCode: address.postalCode,
          city: address.city,
          state: address.state,
          district: address.district
        }
      });
      return {
        token: sign({ customerId: customer.id }, 'TEST'),
        customer: customer
      };
    }
  }
};

import { registerAs } from '@nestjs/config';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';

export default registerAs('database', () => {
  return {
    type: process.env.POSTGRES_TYPE ?? 'postgres',
    host: process.env.POSTGRES_HOST ?? 'localhost',
    port: process.env.POSTGRES_PORT
      ? parseInt(process.env.POSTGRES_PORT)
      : 5432,
    username: process.env.POSTGRES_USER ?? 'username',
    password: process.env.POSTGRES_PASSWORD ?? 'password',
    database: process.env.POSTGRES_DB ?? 'nest_project',
    entities: [User, Wish, Wishlist, Offer],
    synchronize: process.env.POSTGRES_SYNCHRONIZE ?? true,
  };
});

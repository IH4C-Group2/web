// import { env } from 'process';

// const {
//   CRYPTO_SECRET,
// } = env;

// if (!CRYPTO_SECRET) throw new Error('CRYPTO_SECRET is not defined!');

const Config = {
  // cryptoSecret: Buffer.from(CRYPTO_SECRET, 'base64'),
  cookie: {
    session: '__ih14a_2',
    language: 'ja',
  },
} as const;

export default Config;
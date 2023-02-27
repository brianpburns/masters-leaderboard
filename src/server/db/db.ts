import { Options, Sequelize } from 'sequelize';

const dbUri = process.env.DATABASE_URL || process.env.DB_URI || '';

if (!dbUri) throw new Error('Invalid dbUri value');

const localConfig: Options = {
  dialect: 'postgres',
  define: { freezeTableName: true, timestamps: false },
};

const productionConfig = {
  ...localConfig,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const postgresConfig = process.env.DATABASE_URL
  ? localConfig
  : productionConfig;

export const sequelize = new Sequelize(dbUri, postgresConfig);

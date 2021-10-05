import { DataTypes, Sequelize } from 'sequelize';

const dbUri = process.env.DATABASE_URL || process.env.DB_URI || '';

const sequelize = new Sequelize(dbUri, {
  dialect: 'postgres',
  define: { freezeTableName: true, timestamps: false },
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const Team = sequelize.define('team', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  golfer_ids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

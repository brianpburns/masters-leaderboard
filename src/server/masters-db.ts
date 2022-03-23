import { DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';
import { Team as TeamType } from '../types';

const dbUri = process.env.DATABASE_URL || process.env.DB_URI || '';

if (!dbUri) throw new Error('Invalid dbUri value');

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

type TeamAttributes = Optional<
  TeamType,
  'id' | 'owner' | 'name' | 'golfer_ids'
>;

export const Team: ModelDefined<TeamType, TeamAttributes> = sequelize.define(
  'team',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    golfer_ids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

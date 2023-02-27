import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Team as TeamType } from '../../types';
import { sequelize } from './db';

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

// Team.hasMany(League);
// Team.belongsToMany(League, {
//   through: 'League_Members',
//   as: 'league',
//   foreignKey: 'team_id',
// });

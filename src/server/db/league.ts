import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { sequelize } from './db';

type LeagueType = { id: number; name: string; selectionPhase: boolean };

type LeagueAttributes = Optional<LeagueType, 'id' | 'name' | 'selectionPhase'>;

export const League: ModelDefined<LeagueType, LeagueAttributes> =
  sequelize.define('league', {
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
    lockSelection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

// League.belongsToMany(Team, { through: 'League_Members' });

// League.findOne({ where: {id: 1}}).then(league)

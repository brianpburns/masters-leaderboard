import { DataTypes, Sequelize } from 'sequelize';

const connString =
  'postgres://tuihxjmbvlvduc:93da453319b7b85a45bc90bdff6509d5497b57cf1e4ff28fe7b12152a0fbfafe@ec2-34-194-123-31.compute-1.amazonaws.com:5432/dd1q744c8o4npr';

const sequelize = new Sequelize(connString, {
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

// export const Team = async () => {
//   return await initTeam();
// };

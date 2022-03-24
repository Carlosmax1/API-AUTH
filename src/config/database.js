
module.exports = {
  dialect: 'postgres',
  host: 'ec2-44-194-92-192.compute-1.amazonaws.com',
  username: 'vazfselzeytdkh',
  password: '91c95cd72ebcf87159365de139d73b4ca3961e855de5603a34e9e6729fe4d829',
  database: 'dcajhblu05bln',
  define: {
    timestamps: true,
    underscored: true,
  },
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }
};
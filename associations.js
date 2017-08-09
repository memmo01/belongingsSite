// module.exports = function(db) {
//   db.Insurance.belongsTo(db.User,{ foreignKey: { allowNull: false } });
//   // db.Location.belongsTo(db.User,{ foreignKey: { allowNull: false } });
//   // db.Asset.belongsTo(db.Location,{ foreignKey: { allowNull: false } });
//   // db.User.hasMany(db.Location,{ onDelete: "cascade" });
//   db.User.hasMany(db.Insurance,{ onDelete: "cascade" });
//   db.Location.hasMany(db.Asset,{ onDelete: "cascade" });
// };

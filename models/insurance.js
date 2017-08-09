module.exports = function(sequelize, DataTypes) {
	var Insurance = sequelize.define("Insurance", {

		insur_type: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		company: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		phone_num: {
			type: DataTypes.TEXT,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		agent: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		policy_num: {
			type: DataTypes.TEXT,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		start_date: {
			type: DataTypes.DATEONLY,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		info: {
			type: DataTypes.TEXT,
		},

		image: {
            type: DataTypes.STRING,
        }
	});

	return Insurance;
};

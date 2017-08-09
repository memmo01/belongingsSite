const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize.query('DROP TABLE IF EXISTS Insurances');

sequelize.query('INSERT INTO  Insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Home", "Allstate", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,04", "Need to review all claims made before selling house")');
sequelize.query('INSERT INTO  Insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Vehicle", "Geico", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,10", "Remove older vehivle from policy")');

// INSERT INTO  insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Home", "Allstate", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,04", "Need to review all claims made before selling house");

// INSERT INTO  insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Vehicle", "Geico", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,10", "Remove older vehivle from policy");

// INSERT INTO  insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Health", "Blue Cross", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,10", "7 year policy, needs reviewing");

// INSERT INTO  insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Dental", "United Health", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,10", "7 year policy, needs reviewing");

// INSERT INTO  insurances (insur_type, company, phone_num, agent, policy_num, start_date, info) VALUES ("Vision", "Coventry", "800-555-1234", "Joe Smo", "p# 568902", "2010,03,10", "7 year policy, needs reviewing");


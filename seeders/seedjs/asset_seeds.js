const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize.query('INSERT INTO Assets ( itemName, category, make, model, serial_num, bought, price, info) VALUES ("Freezer", "Appliances", "GE", "Frost Free LS", "RT-6789", "2016,11,12", "1200.23", "Has a 3 year warranty. Service 800-555-5656")');
sequelize.query('INSERT INTO Assets ( itemName, category, make, model, serial_num, bought, price, info) VALUES ("Lisas Laptop", "Electronics", "Apple", "MacBook Pro", "03456-78-0012", "2017,02,18", "1890.23", "Has a 2 year warranty. Service 800-555-5656")');
sequelize.query('INSERT INTO Assets ( itemName, category, make, model, serial_num, bought, price, info) VALUES ("Painting", "Antiques/Artworks", "Van Gogh", "Starry Night", "1", "1817,02,18", "1100890.23", "Stole it from MOMA, but no one has noticed the forgery.")');

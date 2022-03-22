========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d user_items -h localhost -u root -p 3306 -x  -e mysql -t tbl_item


========== Start Project ==========
node server


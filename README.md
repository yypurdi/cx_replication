# CX Replication
Customer eXperience - Non Identical Replication <br />
<img src="https://user-images.githubusercontent.com/15040338/80561867-15ea2e00-8a10-11ea-982a-471d58605ec2.jpg" width="23%"></img> 
<br />
Base Functions : <br />
1. Customer Maintenance <br />
2. Contract Maintenance <br />
3. Billing Information <br />
4. Payment Information <br />
<br />
Additional Funcations : <br />
<br />
1. Messaging <br />
2. Video Conference for Agent Meeting (WFH or Remote Work) <br />
3. Customer Line for Customer Interactive by Video Call (for next implementation : customer face recognation) <br />
<br />
Requirement : <br />
<br />
1. Install MySQL Server and load file import.sql (for DB Simulation) <br />
2. Install MQTT Broker (the default using mqtt://test.mosquitto.org) <br />
3. Change configuration in file cx_replication/routes/dao.js for MySQL DB access <br />
4. Change configuration in file cx_replication/routes/dao.js for MQTT Broker address <br />
5. Change Security Certificate in directory cx_replication/encryption (Optional) <br />
<br />
Run: <br />
<br />
  $npm install <br />
  $npm start <br />
<br />
Try WebApps : https://[ip_address]:3000 <br />
<br />
Username : admin <br />
Password : password <br />
<br />
Try Restfull : https://[ip_address]:3001/api-docs/ <br />
<br />

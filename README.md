
# Testes End-to-End usando Cypress and Cucumber with Smell

The purpose of this code is to perform end-to-end tests, in this case 1 test with Smells found in the table below and 8 smells(Organizing Tests, Logging In, Controlling State, Selecting Elements, Assigning Return Values
Visiting External Sites, Using after Or afterEach Hooks, Unnecessary Waiting, Web Servers and Setting a Global baseUrl) are documented at https://docs.cypress.io/guides/references/best-practices. In total 28 smells

![](https://github.com/larissabicalho/mantis-cypress/blob/20a5b03ce5e40a7a95272b02d8ca438b6103e4fe/smells.png)

## Cypress Installation

To carry out the script, configure your environment as follows:


**Step 1:** Install Cypress. The most recommended way is via npm (required [node.js](https://nodejs.org/en/download/)). In the project directory, run:
    
```bash
npm install cypress --save-dev
```

    
**Step 2:** 

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) and restart the machine
2. If you get the error "WSL 2 installation is incomplete", [download and install WSL2 Kernel](https://docs.microsoft.com/pt-br/windows/wsl/wsl2-kernel) and click Restart

![](https://i.imgur.com/4wHESjW.png)

3. Open the Docker Desktop app

![](https://i.imgur.com/cyAeSa2.png)

4. The tutorial should be shown, just skip it and you will have this screen

![](https://i.imgur.com/Myxqwmv.png)

5. Open a terminal and access the newly created directory: "C:/mantis"

6. In the directory there will be the file **docker-compose.yml** (It is necessary to replace the ip's of the containers with the ip of the Machine)

7. Run the command > `docker-compose.exe up -d`

The docker-compose file stay in reposi

8. After processing, if all goes well, the images will be downloaded and new containers created

9. To validate the creation and execution of the run the command `docker ps -a` and the containers will be available and running

10. The Docker Desktop application will display the active.


**Step 3:** 

Make your first access to Mantis at http://127.0.0.1:8989

After accessing, it will be necessary to configure the database according to the table and values below:

| Variable | Value |
|-----|------|
| Type of Database | MySQL Improved |
| Hostname (for Database Server) | mantis_db_1 |
| Username (for Database) | mantisbt |
| Password (for Database) | mantisbt |
| Database name (for Database) | bugtracker |git
| Admin Username (to create Database if required) | root |
| Admin Password (to create Database if required) | root |

After filling in, click on **Login/Continue** and wait for processing.

The first access must be done using *administrator/root* credentials. Reset the password to *administrator* or another easy-to-remember value.

To access the Mantis database (MariaDB) follow the steps below:

1. Download and install [HeidiSQL software](https://www.heidisql.com/download.php)

2. When opening the Session Manager, fill in the values below:

![](https://i.imgur.com/AhKMxvu.png)

3. Open the connection and you can check all tables and records:

![](https://i.imgur.com/EnYk6Md.png)

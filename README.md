# Project Setup

### 1. Ensure Node.js and npm are Installed
- Verify the installation by running in terminal:
  ```bash
    node -v
    npm -v
    ```

### 2.Ensure MongoDB and MongoDB Compass are Installed
- Verify MongoDB installation by running in terminal:
```bash
  mongod --version
  ```

### 3.Create Database and Collection in MongoDB
#### Using MongoDB Compass.
- Click Create Database, "jarurat_care", and create a collection  "services".
  
#### Using MongoDB Shell:
```bash
  use jarurat_care
  db.createCollection("services")
  ```

### 4.Verify Database Connection
- Ensure that MongoDB is running at localhost:27017:

```bash
  mongo --host localhost --port 27017
```
- If MongoDB is running on a different host/port, update the connection string in your .env file:

```bash
  MONGODB_URI=mongodb://localhost:27017/jarurat_care
```

### 5. SetUp Locally---

1. 🍴 Fork this repository. 

2. 📥 Clone the repository:

3. 📂 Change the working directory: 
```bash
   cd healthcare_api
   ```

4. 🛠️ Install dependencies:
```bash
   npm install
   ```

5. 🛠️ start project:
```bash
   npm start
   ```
---

## 🛠️ Available Scripts

### **`npm start`** ⚙️
Runs the app to test API on Postman 
- Open [http://localhost:8000/api/services/fetch](http://localhost:8000/api/services/fetch) to view it in your browser.
- The page will reload when edits are made.
- Console will display lint errors, if any.

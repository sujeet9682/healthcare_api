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

---
---

# API Testing Guide(e.g. Postman)

### 1. Ensure the Server is Running
To start the server, run the following command:
```bash
npm start
```
### 2. Test API Endpoints

#### **POST** `/api/services/addService`
- **Description**: Adds a new service to the `services` collection in MongoDB.
- **Add IN body > raw > JSON**(Postman):
```bash
  {
    "name": "Service Name",
    "description": "Description of the service",
    "price": 100
  }
```

#### **GET** `/api/services/getAllServices`
- **Description**: Get all services stored in the `services` collection.
- **URI**:
```bash
  http://localhost:8000/api/services/getAllServices
  ```

#### **PUT**  `/api/services/updateService/:id`
- **Description**: Updates the details of an existing service by its `id`.
- **Edit IN body > raw > JSON**(Postman):
```bash
   {
    "name": "Updated Service Name",
    "description": "Updated service description",
    "price": 150
   }
```

#### **DELETE** `/api/services/deleteService/:id`
- **Description**: Deletes a service by its `id`.
- **URI**:
```bash
  http://localhost:8000/api/services/updateService/:id
```

### 3. Error Handling
#### If you encounter any errors, ensure the following:

- The MongoDB server is running and properly connected to your application.
- The API routes are correct, and you are sending the correct request format (JSON).
- The required fields for creating and updating services are provided in the request body.

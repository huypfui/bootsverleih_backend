import dotenv from "dotenv"
dotenv.config()

//The code dotenv.config() loads environment variables from a file named ".env" located in the root directory of the project and sets them as process.env variables.

// This is achieved by using the "dotenv" module, which parses the contents of the ".env" file and adds its key-value pairs to the environment variables of the Node.js process.

// By using this code, any environment variables defined in the ".env" file can be accessed in the rest of the application via the "process.env" object. This is useful for keeping sensitive information, such as API keys, database credentials, or other configuration details separate from the application code, and only accessible to authorized users.

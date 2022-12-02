import { Client, Account } from "appwrite";

/**
 * Initialization (Configuring) of appwrite SDK by providing endpoint and project id.
 */
const client = new Client()
  .setEndpoint("https://localhost/v1")
  .setProject("63894fafd971bff73879");

  /**
 * Account initialization using SDK configuration to access appwrite services.
 */
   const account = new Account(client)

   export default account
// import { Client, Account, ID } from 'appwrite';
// import config from '../Config/config';

// export class AuthService {
//   client = new Client();

//   constructor() {
//     this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
//   }

//   async executeAuthAction(action, data) {
//     try {
//       return await action(data);
//     } catch (error) {
//       throw new Error(`Medium: ${error.message}`);
//     }
//   }

//   createAccount = async ({ email, password, name }) => {
//     const createAccountAction = async (data) => {
//       const [uniqueId, email, password, name] = data;
//       return await this.account.create(uniqueId, email, password, name);
//     };

//     if (await this.executeAuthAction(createAccountAction, [ID.unique(), email, password, name])) {
//       await this.login({ email, password });
//     }
//   };

//   login = async ({ email, password }) =>
//     this.executeAuthAction(this.account.createEmailSession, [email, password]);

//   getCurrentUser = async () => this.executeAuthAction(this.account.get, []);

//   logout = async () => this.executeAuthAction(this.account.deleteSessions, []);

//   get account() {
//     return new Account(this.client);
//   }
// }

// export default new AuthService();


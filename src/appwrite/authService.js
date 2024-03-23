import { Client, Account, ID } from "appwrite";
import config from "../config/config"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async signUp({email , password , name }){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password , name);
            if(userAccount){
                return this.logIn({email , password})
            }else{
                return userAccount;
            }
        } catch(error){
            console.log("Appwrite::signUp::error::" , error);
        }
        
    }

    async logIn({email , password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite::logIn::error::" , error);
        }
    }

    async getUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite::getUser::error::" , error);
        }
    }

    async logOut() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite::logOut::error::" , error);
        }
    }
}



const authService = new AuthService()

export default authService;
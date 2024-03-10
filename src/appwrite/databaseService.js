import { Client, Databases, ID } from "appwrite";
import config from "../config/config";

export class DatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createPost({ caption, location, featuredfile, status, userId }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique(),
                {
                    caption,
                    location,
                    featuredfile,
                    status,
                    userId
                })

        } catch (error) {
            console.log("Appwrite::createPost::error::", error);
        }
    }

    async deletePost(postId) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, postId);
            return true;
        } catch (error) {
            console.log("Appwrite::deletePost::error::", error);
            return false;
        }
    }

    async updatePost(postId , { caption, location, featuredfile, status, userId }) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, postId,
                {
                    caption,
                    location,
                    featuredfile,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite::updatePost::error::", error);
        }
    }

    async getPost(postId){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, postId);
        } catch (error) {
            console.log("Appwrite::getPost::error::", error);
        }
    }

    async getPosts(){
        try {
           return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId);
        } catch (error) {
            console.log("Appwrite::getPosts::error::", error);
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;
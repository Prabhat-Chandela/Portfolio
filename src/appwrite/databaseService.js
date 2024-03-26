import { Client, Databases, ID, Permission, Role } from "appwrite";
import config from "../config/config";

export class DatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
    }


    async createUserProfile({ name, username, email, bio, profileimage, userId }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteUsersCollectionId, userId,
                {
                    name,
                    username,
                    email,
                    bio,
                    profileimage
                },
            )

        } catch (error) {
            console.log("Appwrite::createUserProfile::error::", error);
        }
    }

    async updateUserProfile({ name, username, email, bio, profileimage, userId }) {
        try {
           return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteUsersCollectionId, userId,
            {
                name,
                username,
                email,
                bio,
                profileimage
            }
        );
        } catch (error) {
            console.log("Appwrite::updateUserProfile::error::", error);
        }
    }

    async createPost({ caption, location, featuredfile, filetype, status, userId }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwritePostsCollectionId, ID.unique(),
                {
                    caption,
                    location,
                    featuredfile,
                    status,
                    filetype,
                    userId
                })

        } catch (error) {
            console.log("Appwrite::createPost::error::", error);
        }
    }

    async deletePost(postId) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwritePostsCollectionId, postId);
            return true;
        } catch (error) {
            console.log("Appwrite::deletePost::error::", error);
            return false;
        }
    }

    async updatePost(postId, { caption, location, status, userId }) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwritePostsCollectionId, postId,
                {
                    caption,
                    location,
                    featuredfile,
                    status,
                    filetype,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite::updatePost::error::", error);
        }
    }

    async getPost(postId) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwritePostsCollectionId, postId);
        } catch (error) {
            console.log("Appwrite::getPost::error::", error);
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwritePostsCollectionId);
        } catch (error) {
            console.log("Appwrite::getPosts::error::", error);
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;
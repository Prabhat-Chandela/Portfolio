import { Client, Storage, ID } from "appwrite";
import config from "../config/config";

export class BucketService {
    client = new Client();
    bucket;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.bucket = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
           return await this.bucket.createFile([config.appwriteImageBucketId , config.appwriteVideoBucketId], ID.unique(), file);
        } catch (error) {
            console.log("Appwrite::uploadFile::error::" , error);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile([config.appwriteImageBucketId , config.appwriteVideoBucketId], fileId);
            return true;
        } catch (error) {
            console.log("Appwrite::deleteFile::error::" , error);
            return false;
        }
    }

}

const bucketService = new BucketService();
export default bucketService;


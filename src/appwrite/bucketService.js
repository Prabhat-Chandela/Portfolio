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

    async uploadImageFile(imageFile) {
        try {
           return await this.bucket.createFile(config.appwriteImageBucketId, ID.unique(), imageFile);
        } catch (error) {
            console.log("Appwrite::uploadImageFile::error::" , error);
        }
    }

    async uploadProfileImage(profileImagefile) {
        try {
            return await this.bucket.createFile(config.appwriteProfileImageBucketId, ID.unique(), profileImagefile);
        } catch (error) {
            console.log("Appwrite::uploadProfileImage::error::" , error);
        }
    }

    async deleteProfileImage(profileimageId){
        try {
            return await this.bucket.deleteFile(config.appwriteProfileImageBucketId, profileimageId);
        } catch (error) {
            console.log("Appwrite::deleteProfileImage::error::" , error);
        }
    }

    async uploadVideoFile(videoFile) {
        try {
            return await this.bucket.createFile(config.appwriteVideoBucketId, ID.unique(), videoFile);
        } catch (error) {
            console.log("Appwrite::uploadVideoFile::error::" , error);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile([config.appwriteImageBucketId , config.appwriteVideoBucketId , config.appwriteProfileImageBucketId], fileId);
            return true;
        } catch (error) {
            console.log("Appwrite::deleteFile::error::" , error);
            return false;
        }
    }

    async getFile(fileId) {
        try {
            await this.bucket.getFile([config.appwriteImageBucketId , config.appwriteVideoBucketId , config.appwriteProfileImageBucketId], fileId);
        } catch (error) {
            console.log("Appwrite::getFile::error::" , error);
        }
    }


}

const bucketService = new BucketService();
export default bucketService;


const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteImageBucketId : String(import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID),
    appwriteVideoBucketId : String(import.meta.env.VITE_APPWRITE_VIDEO_BUCKET_ID ),
}

export default config;
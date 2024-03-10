const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritePostsCollectionId : String(import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID),
    appwriteUsersCollectionId : String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteSavesCollectionId : String(import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID),
    appwriteImageBucketId : String(import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID),
    appwriteVideoBucketId : String(import.meta.env.VITE_APPWRITE_VIDEO_BUCKET_ID ),
    appwriteProfileImageBucketId : String(import.meta.env.VITE_APPWRITE_PROFILE_IMAGE_BUCKET_ID),
}   

export default config;
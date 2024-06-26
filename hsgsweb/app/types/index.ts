// types/index.ts
export interface Photo {
    id: string; // Unique identifier for the photo
    url: string; // URL to access the photo
    property: string; // Identifier for the property showcased in the photo
    style: string; // Descriptive style or design theme of the staging
    date: string; // The date when the photo was taken or staged
    location: string; // Physical location of the property
    description: string; // A brief description or notes about the photo
    tags: string[]; // An array of tags for categorization and search functionality
    roomType: string; // Type of room displayed, e.g., "Living Room", "Bedroom", etc.
    dimensions: string; // Physical dimensions of the space, e.g., "20x15 ft"
    beforeImage: string; // URL for the 'before' staging image
    afterImage: string; // URL for the 'after' staging image
    project: string; // The name of the project or campaign this photo belongs to
    status: 'draft' | 'published' | 'archived'; // Current status of the photo in the workflow
    designer: string; // Name of the designer who worked on the virtual staging
    clientFeedback: string; // Feedback given by the client on the staging
    resolution: string; // Resolution of the image, e.g., "1920x1080"
    fileSize: string; // The size of the image file, e.g., "2.5MB"
    uploadedBy: string; // Username or identifier of the person who uploaded the photo
    uploadDate: Date; // Timestamp of when the photo was uploaded
    lastModified: Date; // Timestamp of the last modification to the photo's data
}

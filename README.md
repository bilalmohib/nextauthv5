# NextAuth.js v5 with Firebase Adapter

🚀 A simple guide to set up NextAuth.js v5 with Firebase Authentication using the Firebase Adapter.

## Features

✅ Seamless integration of NextAuth.js v5 with Firebase Authentication.  
✅ Easy-to-follow steps for setting up Firebase Admin SDK and Firebase Authentication.  
✅ Clear instructions for configuring NextAuth.js with the Firebase Adapter.  

## Getting Started

1. **Clone this repository:**

   ```bash
       git clone https://github.com/bilalmohib/nextauthv5.git
   ```
2. **Install dependencies:**
    ```bash
        npm install
    ```
3. **Set up Firebase Admin SDK:**
- Create a Firebase project in the Firebase console.
- Download the service account JSON file.
- Update serviceAccount object in `service-accounts.json` with your service account credentials.
4. **Configure NextAuth.js:**
- Update [...nextauth].js file to use the Firebase Adapter.
- Replace your-project-id and other placeholders with your Firebase project credentials and dont forget to initialize Firebase by creating firebase.ts or firebase.js and placing firebase config there.


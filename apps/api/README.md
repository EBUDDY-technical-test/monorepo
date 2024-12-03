## Requirements
- firebase-tools
- npm > v18

## Setup
- Create your firebase project (if you not have it).
- Generate your Service Account Credential
  - Project Setting > Account Service > Generate new private key
  - download that json and put it inside these 2 directory:
    - /functions/src/firebase-service-account.json
    - /src/config/firebase-service-account.json
- Setup you firebase config, you can find it at **Project Setting** > **General** > Scrolldown to **Your app** section
    - copy the configuration to you .env file at the root of project

## Note
If you not have any user data in firestore, try to use my database seeding with **node seed.js*** command

## How to start
### with NPM
- run **npm run install** at the root of project
- go to functions directory and run **npm run install** or run **cd functions && npm run install** at the root of project
- build the app with **npm run build** command 
- run the **firebase emulators:start --only functions** command to start the emulator function
- run the **npm run dev** to start the backend

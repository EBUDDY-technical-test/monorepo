# How to start

## Requirements
- node v18
- npm
- firebase-tools

## Setup
- add firebase-service-account.json file, you can download it at google console 
- add your .env file for web (frontend-repo) and api (backend-repo). you can see the .env.example file for the example.
- init your firebase project using **firebase init**

## Start Development Environment
- Install npm packages using: **npm install** command
- Run dev server: **npm run dev**
- Run the function emulator: **firebase emulators:start --only functions**

# Note
- The Firebase config can actually be made into a library so that it can be used by any project that needs it.
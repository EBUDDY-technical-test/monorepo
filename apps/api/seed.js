const { credential } = require("firebase-admin")
const { initializeApp } = require("firebase-admin/app");
const { initializeFirestore } = require("firebase-admin/firestore");
const { faker } = require("@faker-js/faker");

const serviceAccount = require('./firebase-service-account.json');

const app = initializeApp({
  credential: credential.cert(serviceAccount),
});
const db = initializeFirestore(app);

const usersRef = db.collection('USERS');

const batch = db.batch();

const generateUser = (num) => {
  let users = [];

  for (let i = 0; i < num; i++) {
    const id = faker.database.mongodbObjectId();
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number({
      style: 'international',
    });
    const avatar = faker.image.avatar();

    const user = { id, name, email, phoneNumber, avatar }

    users.push(user)
  }

  return users;
}

const users = generateUser(10);

users.map(user => {
  batch.set(usersRef.doc(user.id), user)
})

batch.commit()
  .then(() => {
    console.log('Data seeded successfully');
  })
  .catch((error) => {
    console.error('Error seeding data: ', error);
  });


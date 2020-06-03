const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.todoCreated = functions.firestore
    .document('todos/{todoId}')
    .onCreate(doc => {
        const todo = doc.data();
        const notification = {
            content: 'Added a new TODO',
            user: `${todo.authorFirstName} ${todo.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
    .onCreate((user) => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then((doc) => {
                const newUser = doc.data()
                const notification = {
                    content: 'Joined to the team',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification);
            })
    })
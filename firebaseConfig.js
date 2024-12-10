// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyCwGpyvoUfbXE4rpPfLmHSdOK_VI4mT24M",
    authDomain: "lazapateria-ce24f.firebaseapp.com",
    projectId: "lazapateria-ce24f",
    storageBucket: "lazapateria-ce24f.firebasestorage.app",
    messagingSenderId: "642571845821",
    appId: "1:642571845821:web:45858a0abc0df728fd77d4",
    measurementId: "G-6JCF33H0K1"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);


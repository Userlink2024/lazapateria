// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyChvezwN6DrYXdnBvGLxnjhi4I9xUaxKfU",
  authDomain: "lazapateria-c4157.firebaseapp.com",
  projectId: "lazapateria-c4157",
  storageBucket: "lazapateria-c4157.firebasestorage.app",
  messagingSenderId: "300241769138",
  appId: "1:300241769138:web:8ca1847de3c4fb5042afab",
  measurementId: "G-HVG7615JEE"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);


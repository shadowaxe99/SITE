import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDma-qz3mQVJSmEEc_1QGxdaltfD6HZn6w',
  authDomain: 'elysium-5d9c5.firebaseapp.com',
  projectId: 'elysium-5d9c5',
  storageBucket: 'elysium-5d9c5.appspot.com',
  messagingSenderId: '878048689791',
  appId: '1:878048689791:web:1a127970e697b01e1d494a',
  measurementId: 'G-HW2948P0CS'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
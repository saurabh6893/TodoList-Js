// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, doc, addDoc } from 'firebase/firestore'
import { networkInterfaces } from 'os'

const firebaseConfig = {
  apiKey: 'AIzaSyAouTzQ4EeiSfy2Ij5XfBa4OpFD2m1KRp4',
  authDomain: 'todo-9d1e1.firebaseapp.com',
  projectId: 'todo-9d1e1',
  storageBucket: 'todo-9d1e1.appspot.com',
  messagingSenderId: '724184484709',
  appId: '1:724184484709:web:5b1821bdf5e1f27e1c2f8c',
  measurementId: 'G-2KWF69W3VV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore()

function addEvent(event) {
  event.preventDefault()
  let text = document.getElementById('todo-input')
  const addTodo = doc(firestore, 'todojs/DrTs6sGoNMOhwuqDJVdT')
  function writee() {
    const data = { text: text.value, status: 'Active' }
    setDoc(addTodo, writee)
  }
  writee()
}

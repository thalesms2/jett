import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STOREGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

// Inicia o db
const firestore = getFirestore()

// Referencia de um documento
const specialOfTheDay = doc(firestore, 'dailySpecial/06-05')

export const writeDailySpecial = () => {
    const docData = {
        description: 'Descrição teste',
        price: 3.99,
        milk: 'Intolerante',
        vegan: false,
    }
    setDoc(specialOfTheDay, docData)
    console.log('exec')
}
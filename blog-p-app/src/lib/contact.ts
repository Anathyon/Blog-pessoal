export interface ContactPayload {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

/** O formulário só usa o Firebase se as variáveis de ambiente estiverem configuradas. */
export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId)

export const LIMITS = { nome: 100, email: 150, assunto: 150, mensagem: 3000 } as const

/**
 * Envia a mensagem para a coleção `contact_messages` do Firestore.
 * O SDK do Firebase é importado sob demanda, para não pesar no carregamento inicial da página.
 */
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  if (!isFirebaseConfigured) throw new Error('firebase-not-configured')

  const [{ initializeApp, getApps, getApp }, { getAuth, signInAnonymously }, { getFirestore, addDoc, collection, serverTimestamp }] =
    await Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/firestore')])

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const auth = getAuth(app)
  if (!auth.currentUser) await signInAnonymously(auth)

  await addDoc(collection(getFirestore(app), 'contact_messages'), {
    nome: payload.nome.trim(),
    email: payload.email.trim(),
    assunto: payload.assunto.trim(),
    mensagem: payload.mensagem.trim(),
    userId: auth.currentUser?.uid ?? null,
    createdAt: serverTimestamp(),
  })
}

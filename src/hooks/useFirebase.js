import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // login with google
    const loginWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            })

    }

    // state change
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
    }, [])

    return {
        user,
        error,
        setUser,
        setError,
        setIsLoading,
        loginWithGoogle,
        logOut,
        isLoading

    }
}

export default useFirebase;
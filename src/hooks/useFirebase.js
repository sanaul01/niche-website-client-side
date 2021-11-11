import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut,
  updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password,name, history) =>{
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });

            history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
          })
          .finally(()=> setIsLoding(false));
    }

    const loginUser = (email, password, location, history) =>{
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const direction = location?.state?.from || '/';
            history.replace(direction);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(()=> setIsLoding(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoding(false)
          });
          return()=> unsubscribe;
    }, [auth]);

    const logOut = () =>{
        setIsLoding(true)
        signOut(auth).then(() => {

          }).catch((error) => {

          })
          .finally(()=> setIsLoding(false));
    }


    return{
        user,
        registerUser,
        loginUser,
        logOut,
        isLoding,
        authError
    }
};

export default useFirebase;
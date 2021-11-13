import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, getIdToken, signOut,
  updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(false);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');

    const auth = getAuth();

    const registerUser = (email, password,name, history) =>{
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to database
            saveUser(email, name)
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
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken)
              })
            } else {
              setUser({});
            }
            setIsLoding(false)
          });
          return()=> unsubscribe;
    }, [auth]);


    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res =>res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () =>{
        setIsLoding(true)
        signOut(auth).then(() => {

          }).catch((error) => {

          })
          .finally(()=> setIsLoding(false));
    };

    const saveUser = (email, displayName) =>{
      const user = {email, displayName}
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then()
    }


    return{
        user,
        isLoding,
        admin,
        token,
        registerUser,
        loginUser,
        logOut,
        authError
    }
};

export default useFirebase;
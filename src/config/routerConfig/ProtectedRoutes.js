import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Firebase/firebaseMethod';

function ProtectedRoutes(props) {
    const { component } = props;
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("onAuthState ===>" , uid);
                // ...
            } else {
                console.log("user is signed out");
            }
        });
    }, [])
    return (
        <>
        {component}
        </>
    )
}

export default ProtectedRoutes
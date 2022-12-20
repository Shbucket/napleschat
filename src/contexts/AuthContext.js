import React, {useContext, useState,  useEffect} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

const AuthContext = React.createContext()
/* A function to grab the context later */
 export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    /* setting the state */
    const [loading, setLoading] = useState(true)
    /* set to null to prevent it from always pushing to chat */
    const [user, setUser] = useState(null)
    const history = useHistory()
/*grabbing the user from the firebase authentication*/
    useEffect(()=> {
        auth.onAuthStateChanged((user) =>{
            setUser(user);
            setLoading(false);
        /*using react router dom to push application if there is a user*/
          if(user) history.push('/chats')
        })


    }, [user, history])
const value = {user}

return (
    <AuthContext.Provider value={value}>
        {!loading && children}

    </AuthContext.Provider>
)
}
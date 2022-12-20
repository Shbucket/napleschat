import React, {useContext, useState,  useEffect} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "firebase";

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [usr, setUser] = useState({})
    const history = useHistory()
/*grabbing the user from the firebase authentication*/
    useEffect(()=> {
        auth.onAuthStateChange((user) =>{
            setUser(user);
            setLoading(false);
        /*using react router dom to push application*/
            history.push('/chats')
        })
    }, [user, history])
const value = {user}

return (
    <AuthContext.Provider value={value}>
        {!loading && children}

    </AuthContext.Provider>
)
}
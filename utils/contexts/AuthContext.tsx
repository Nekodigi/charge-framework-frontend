import { auth } from "@/lib/firebase/firebase";
import { User } from "firebase/auth";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type AuthContextProps = {
  user: User | null;
  loading: boolean;
};
const AuthContext = createContext({} as AuthContextProps);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

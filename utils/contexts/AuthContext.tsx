import { auth } from "@/lib/firebase/firebase";
import axios from "axios";
import { User } from "firebase/auth";
import { useParams, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const { service_id } = useParams();

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      const onUser = async () => {
        let link_target = searchParams.get("link_target");
        if (link_target) {
          let res = await axios({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/redirect/${service_id}/${link_target}?dest_user=${user?.uid}`,
            method: "put",
            data: {},
          });
        }
      };
      onUser();
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

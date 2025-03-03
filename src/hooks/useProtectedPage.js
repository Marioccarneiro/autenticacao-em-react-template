import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { irParaHome, irParaLogin } from "../routes/coordinator";


export const useProtectedPage = () => {
    const navigate = useNavigate()

  const token = localStorage.getItem('token')
  console.log(token);

  useEffect(()=>{
    if(!token){
      irParaHome(navigate)
    }
  }, [])
}
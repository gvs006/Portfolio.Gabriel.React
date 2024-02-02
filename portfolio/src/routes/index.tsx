import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contato from '../pages/contato/Contato';
import ProjetosPessoais from '../pages/projetos-pessoais/ProjetosPessoais';


export const AppRoutes = () => {

  // const auth = useContext(AuthContext);

  // const handleLogout = async () => {
  //   await auth.signout();
  //   window.location.href = window.location.href;
  // }


  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/contact" element={<Contato></Contato>} />
      <Route path="/my-projects" element={<ProjetosPessoais></ProjetosPessoais>} />
      {/* <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} /> */}
      {/* TODO <Route path="/erro" element={<ErrorPage></ErrorPage>} /> */}

      
      
      
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
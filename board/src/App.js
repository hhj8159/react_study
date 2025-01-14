import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./component/common/NotFound";
import Write from "./component/board/Write";
import List from "./component/board/List";
import LoginForm from "./component/member/LoginForm";
import DashBoard from "./component/common/DashBoard";
import ProtectedRoute from "./component/common/ProtectedRoute";
import {AuthProvider} from "./hooks/AuthContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/list" element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
        } />
        <Route path="/write" element={
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  
  ); 
}

export default App;

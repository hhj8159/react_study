import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./component/common/NotFound";
import Write from "./component/board/Write";
import List from "./component/board/List";
import LoginForm from "./component/member/LoginForm";
import DashBoard from "./component/common/DashBoard";
import ProtectedRoute from "./component/common/ProtectedRoute";
import {AuthProvider} from "./hooks/AuthContext"
import View from "./component/board/View";
import Modify from "./component/board/Modify";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notes" element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
        } />
        <Route path="/notes/:num" element={
          <ProtectedRoute>
            <View />
          </ProtectedRoute>
        } />
        <Route path="/write" element={
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        } />
        <Route path="/notes/modify/:num" element={
          <ProtectedRoute>
            <Modify />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  
  ); 
}

export default App;

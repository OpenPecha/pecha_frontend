import "./App.css";
import UserRegistration from "./components/user-registration/UserRegistration.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import UserLogin from "./components/user-login/UserLogin.jsx";
import NavigationBar from "./components/navbar/NavigationBar.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import {AuthProvider} from "./helpers/AuthContext.js";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/texts" element={<HomePage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </QueryClientProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

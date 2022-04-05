import "./App.css";
import AuthProvider from "./auth/AuthProvider";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;

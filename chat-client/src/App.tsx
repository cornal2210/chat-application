import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AuthenticatedRoute children={<AppPage />} />}>
        {/* <Route path="conversations" element={<ConversationPage />}>
          <Route
            path=":id"
            element={
              <ConversationPageGuard children={<ConversationChannelPage />} />
            }
          />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;

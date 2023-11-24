import { Route, Routes } from 'react-router-dom';
import { GithubUserList } from './GithubUserList';
import { Username } from './ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GithubUserList />} />
      <Route path="/users" element={<Username />} />
    </Routes>
  );
}

export default App;

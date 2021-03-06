import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesListPages from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

const App = () => {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPages} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  );
};

export default App;

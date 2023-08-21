
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./pages/navbar";
import NotFoundPage from "./pages/NotFountPage";

function App() {
  return (<BrowserRouter>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Routes>
              <Route path="/" element={ <HomePage/>} />
              <Route path="/about" element={ <About/>} />
              <Route path="/articles" element={ <ArticleListPage/>} />
              <Route path="/articles/:articleId" element={ <ArticlePage/>} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;

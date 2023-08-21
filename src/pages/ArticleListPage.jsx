
import article from "./article-content";
import ArticleList from "../components/ArticleList";
const ArticleListPage =()=> {
    return(
        <>
            <h1>Articles</h1>

          <ArticleList article={article}/>
            </>
    )
}
export default ArticleListPage;
import React from "react";
import Article from "./Article"

function ArticleList( { posts } ){
    const articleListComponents = posts.map((post) =>{
        return <Article 
        key={post.id} 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        time={post.minutes}/>
    })
    return(
        <main>
            {articleListComponents}
        </main>
    );
}

export default ArticleList;
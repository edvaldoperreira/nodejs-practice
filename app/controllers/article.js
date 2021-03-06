module.exports.list = function(app, req, res) {
    
    const connection = app.config.dbConnection();
    const dao = new app.app.models.ArticleDAO(connection);
    
    dao.getNews(function (error, result) {
        res.render('home', { news: result });		
    });
}

module.exports.get = function(app, req, res) {
    const connection = app.config.dbConnection();
    const dao = new app.app.models.ArticleDAO(connection);
    const idArticle = req.query.id;
    
    dao.getArticle(idArticle, function (error, result) {
        res.render('article/article', { article: result });
    });
}

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one' : {
       title:'Article One| Aditya Bansal',
       heading: 'Article One',
       date: 'Feb 4 2017',
       content:
    `
            <p>
                Content for my first article content for my forst article content for my first article content for my first article
            </p>
            <p>
                Content for my first article content for my forst article content for my first article content for my first article
            </p>
            <p>
                Content for my first article content for my forst article content for my first article content for my first article
            </p>
            <p>
                Content for my first article content for my forst article content for my first article content for my first article
            </p> 
         `
    },
    'article-two' : {
       title:'Article Two| Aditya Bansal',
       heading: 'Article Two',
       date: 'Feb 4 2017',
       content:
    `
            <p>
                Content for my second article content for my second article content for my second article content for my second article
            </p>
            <p>
                Content for my second article content for my second article content for my second article content for my second article
            </p>
            <p>
                Content for my second article content for my second article content for my second article content for my second article
            </p>
            <p>
                Content for my second article content for my second article content for my second article content for my second article
            </p> 
         `
    },
    'article-three' : {
       title:'Article Three| Aditya Bansal',
       heading: 'Article Three',
       date: 'Feb 4 2017',
       content:
    `
            <p>
                Content for my third article content for my third article content for my third article content for my third article
            </p>
            <p>
                Content for my third article content for my third article content for my third article content for my third article
            </p>
            <p>
                Content for my third article content for my third article content for my third article content for my third article
            </p>
            <p>
                Content for my third article content for my third article content for my third article content for my third article
            </p> 
         `
    }
};

function createTemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =
`
  <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr />
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
      </div>    
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName',function(req, res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


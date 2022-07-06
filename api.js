const http = require("http");
const PORT = process.env.PORT || 4000;

const blogs = [
    {
     "blogs": "My first blog", 
     "body": "Why do we use it?\nIt's just because it is important", 
     "Author": "Anu", 
     "id": 1
    },
    {
        "blogs": "My first blog", 
        "body": "Why do we use it?\nIt's just because it is important", 
        "Author": "Paul", 
        "id": 2
       }, 
     {
      "blogs": "My first blog", 
      "body": "Why do we use it?\nIt's just because it is important", 
      "Author": "Abayomi", 
     "id": 3
    }
]


const server = http.createServer(async (req, res) => {
    //set the request route
    if (req.method === "GET") {
        switch(req.url) {
            case "/api/blogs":
        res.setHeader("Content-Type", "application/json" )
        res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(JSON.stringify(blogs));
              break;
              default:
            // response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        res.write("Hi there, This is a Vanilla Node.js API");
            //end the response
        res.end();
             

              }
        //end the response
        res.end();
    }

    
    // If no route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

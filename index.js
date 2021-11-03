const app = require("./app");

app.listen(app.get("port"), function(){
    console.log(`Server started at port ${app.get("port")}`);
})
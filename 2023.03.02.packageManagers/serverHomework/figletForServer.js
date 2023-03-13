var figlet = require("figlet");

var inputText = "Frontend Bootcamp";
const figi = figlet(inputText, 'Big', function(err, text) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.log(text);
});
module.exports = {figi}

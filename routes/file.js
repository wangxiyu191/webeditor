/**
 * Created with JetBrains WebStorm.
 * User: Wxy
 * Date: 13-6-12
 * Time: 上午1:45
 */
var fs = require("fs");
exports.index = function (req, res) {
    var action = req.body.action;
    if ("save" == action) {
        var code = req.body.code;
        var pathname=req.body.pathname;
        fs.writeFile(pathname, code, function (err) {
            if (err) {
                res.send(200,err);
                throw err;
            }
            console.log('It\'s saved!');
            res.send(200,"success");
        });
    }
    if ("compile" == action) {
    }
    if ("run" == action) {
    }
    if ("delete" == action) {
    }
}
;


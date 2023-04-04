const{constants} = require("../constants")
const errorhandler = (err, req, res, next) => {
    const statusCode= res.statusCode ? res.statusCode:500
    
    switch (statusCode) {
      case constants.VALIDATION_EROOR:
        res.json({
          titie: "Validation Failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case constants.NOT_FOUND:
        res.json({
          titie: "NOT FOUND",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.FORBIDDEN:
        res.json({
          titie: "Forbbiden",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.UNAUTHORIZED:
        res.json({
          titie: "un-authorized",
          message: err.message,
          stackTrace: err.stack,
        });
      case constants.SERVER_ERROR:
        res.json({
          titie: "Server-error",
          message: err.message,
          stackTrace: err.stack,
        });

        default:
            console.log("No Error, all GOOD !...")
        break;
    }
   
}
module.exports=errorhandler
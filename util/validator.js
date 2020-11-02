/**
 * Validator function to determing which inputted field is invalid.
 * Returns first invalid key
 * 
 * @param  {Object} fields 
 */

module.exports = {
    make
}


/**
 * Geberal validator for object fields
 * 
 * @param {Object} fields 
 */

function make (fields) {
    return new Promise((resolve, reject) => {

        for (var key in fields) {
    
            var field = fields[key];
            var error = null;

            if (field == "" || field == null || field == "null") 
                return reject({ message: `Missing ${key.charAt(0).toUpperCase() + key.slice(1)}.`, code: 400 });

            if (key == 'appid')
                error = validateAppId(field);
    
            if (error) return reject({ message: error, code: 400 });
        }
    
        return resolve(null);
    });
}


/**
 * Validate Steam Id
 * @param {String} id 
 */

function validateAppId(appid) {
    if (typeof appid != 'number')
        return "Invalid Steam App ID.";
    return null;
}


/**
 * Check if char is numeric
 * @param {Char} value 
 */

function isInt(value) {
    if (isNaN(value)) return false;
    var x = parseFloat(value);
    return (x | 0) === x;
}
"use strict";
function fatal(err) {
    console.error(err);
    process.exit(1);
}
exports.fatal = fatal;

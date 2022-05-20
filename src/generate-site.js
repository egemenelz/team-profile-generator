const { strictEqual } = require('assert');
const fs = require('fs');

/**
 * Write file promise help me to write file to desired place
 * if it get error it will rej error and stop the working on it.
 * else it will write desired file to given address
 * @param {} file 
 * @returns 
 */
const writeFile = file => {
    return new Promise((res, rej) => {
        fs.writeFile('./dist/index.html', file, err => {
            if (err) {
                rej(err);
                return;
            } else {
                res({
                    ok: true,
                    message: "Index.html file created for team profile"
                })
            }
        })
    })
}

/**
 * Copy File promise helps me to copy file from specific folder to another folder
 * We have to initiliaze where are folder will move while we are creating promise 
 * @returns 
 */
const copyFile = () => {
    return new Promise((res, rej) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            err ? rej(err) : res({ ok: true, message: 'File copied from src to dist!' })
        })
    })
}


module.exports = { writeFile, copyFile };
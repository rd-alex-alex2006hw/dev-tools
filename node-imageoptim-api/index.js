'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const assert = require('assert');
const ImageOptim = require('imageoptim-api');

function assertIsJPEGBuffer(buf) {
    assert(Buffer.isBuffer(buf));
    assert(buf.length >= 200);
    assert.equal(buf[0], 0xFF);
    assert.equal(buf[1], 0xD8);
    assert.equal(buf[2], 0xFF);
}

function convert(fileName) {
    const sourceImagePath = path.join(__dirname, fileName);
    console.log('1.convert ', fileName);
    const im = new ImageOptim();

    function saveToFile() {
        fs.statSync(sourceImagePath);

        // const tempFilePath = path.join(os.tmpdir(), crypto.randomBytes(16).toString('hex') + '.jpg');

        const saveFilePath = path.join(__dirname, 'out.jpg');
        console.log('1.saveToFile ', saveFilePath);
        return im.compress({})
            .file(sourceImagePath)
            .save(saveFilePath)
            .then(function(nothing) {
                console.log('1.compress ', saveFilePath);
//                assertIsJPEGBuffer(fs.readFileSync(saveFilePath));
//                fs.unlink(tempFilePath);
                fs.statSync(sourceImagePath);
                // assert.equal('undefined', typeof nothing);
            });
    }

    function saveToBuffer() {
        fs.statSync(sourceImagePath);

        return im.compress({})
            .file(sourceImagePath)
            .then(function(buf) {
              console.log('1.saveToBuffer ', sourceImagePath);
                fs.statSync(sourceImagePath);
                // assertIsJPEGBuffer(buf);
            });
    }
    saveToFile();
}

convert('test.png');

//modules.export convert;

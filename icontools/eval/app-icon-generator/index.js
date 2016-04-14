/**
 * Copyright (c) 2016-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs-extra');
const gm = require('gm');
const path = require('path');
const Promise = require('bluebird');

function generateAppIcon(sourceImagePath, appIconsetPath, iconHeight, iconWidth, scale) {
  return Promise.fromCallback(function (cb) {
    return gm(sourceImagePath)
      .resize(iconWidth * scale, iconHeight * scale)
      .write(path.resolve(appIconsetPath, `icon-${iconWidth}x${iconHeight}@${scale}x.png`), cb);
  });
}

function generateAppIconset(fromFilePath, toFilePath) {
  const appIconsetPath = path.resolve(toFilePath);
  const sourceImagePath = path.resolve(fromFilePath);
  const sourceContentsFilePath = path.resolve(__dirname, 'Contents.json');
  const targetContentsFilePath = path.resolve(appIconsetPath, 'Contents.json');

  return Promise.fromCallback(cb => fs.mkdirs(appIconsetPath, cb))
    .then(function () {
      return Promise.all([
        Promise.fromCallback(cb => fs.copy(sourceContentsFilePath, targetContentsFilePath, cb)),
        generateAppIcon(sourceImagePath, appIconsetPath, 25, 25, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 25, 25, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 25, 25, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 29, 29, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 29, 29, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 29, 29, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 44, 44, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 44, 44, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 44, 44, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 40, 40, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 40, 40, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 40, 40, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 50, 50, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 50, 50, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 50, 50, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 58, 58, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 58, 58, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 58, 58, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 60, 60, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 60, 60, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 60, 60, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 66, 66, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 66, 66, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 66, 66, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 76, 76, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 76, 76, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 76, 76, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 75, 75, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 75, 75, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 75, 75, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 80, 80, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 80, 80, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 80, 80, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 180, 180, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 180, 180, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 180, 180, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 120, 120, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 120, 120, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 120, 120, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 152, 152, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 152, 152, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 152, 152, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 167, 167, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 167, 167, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 167, 167, 3),
        generateAppIcon(sourceImagePath, appIconsetPath, 1024, 1024, 1),
        generateAppIcon(sourceImagePath, appIconsetPath, 1024, 1024, 2),
        generateAppIcon(sourceImagePath, appIconsetPath, 1024, 1024, 3),
      ]);
    })
    .then(function () {
      return {
        appIconsetPath,
      };
    });
}

module.exports = generateAppIconset;

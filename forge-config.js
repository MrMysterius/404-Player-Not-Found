const path = require('path');

module.exports = {
    "packagerConfig": {
        "icon": path.join(__dirname,"/app/assets/images/icon.png")
      },
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "404_player_not_found",
            "noMsi": true,
            "author": "MrMysterius",
            "setupIcon": path.join(__dirname,"/app/assets/images/icon.ico"),
            "loadingGif": path.join(__dirname,"/app/assets/images/loading.gif"),
            "iconUrl": path.join(__dirname,"/app/assets/images/icon.ico"),
            "version": "1.3.0"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {
            "icon": path.join(__dirname,"/app/assets/images/icon.png"),
            "name": "404-player-not-found",
            "version": "1.3.0",
            "maintainer": "MrMysterius"
          }
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {
            "icon": path.join(__dirname,"/app/assets/images/icon.png"),
            "name": "404-player_not_found",
            "version": "1.3.0"
          }
        }
      ]
}
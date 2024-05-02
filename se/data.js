var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "神奇走廊的盡頭",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": -1.4478635238279,
        "pitch": -0.0507468262077424,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -1.3623780094445035,
          "pitch": 0.12629643109453426,
          "rotation": 3.141592653589793,
          "target": "1-"
        }
      ],
      "infoHotspots": [ {
          "yaw": -2.0273328728974924,
          "pitch": -0.0909565010826121,
          "title": "牆壁",
          "text": "牆壁"
        }]
    },
    {
      "id": "1-",
      "name": "神奇走廊",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": -0.8722910375641746,
        "pitch": -0.040467030240520785,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": -1.4862911782649117,
          "pitch": 0.0973324184439015,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

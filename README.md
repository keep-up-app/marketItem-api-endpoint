# Market Item Endpoint

## Overview

This repo contains the market item source code for the [market-item endpoint](https://marketItem-endpoint-api.herokuapp.com).

It is one of the containers that lay between the [steam- endpoint](https://github.com/noahgreff/steam-api-endpoint) and the frontend application.

It is meant to gather data from the steam endpoint and handle all the formatting and pagination.

##### Getting a game's items

```
GET/ /item/all/:appid
```

|param|description|type|default|
|---:|---|:---:|:---:|
| **`appid`** | The unique game identifier as specified by steam's API |*string* | 


```json
{
"data": [
{
"name": "Cow Precise Automatic Rifle",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-41kP9jmcbj76YHFmlK7iGRAJwODTjJYBPod1EWHCvxb",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Cow%20Precise%20Automatic%20Rifle",
"pricing": {
"current": 0,
"text": "Unavailable",
"median": 0,
"lowest": 0
}
},
{
"name": "Digital Camouflage Welder",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-41jOcigRrbg9aHdgUiwhXFOIX6uQTlUXusf8Hmo1kNgqLj0PQNkWR1755j-w7uVhZsokWRCbrngiyEwjg",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Digital%20Camouflage%20Welder",
"pricing": {
"current": 16,
"text": "€0.16",
"median": 0,
"lowest": 0
}
},
{
"name": "Hexagon Rifle",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-41vNdeoVbjimYjVllyxhn52BSSeRzNcXuMQ4XGj1VMotLf0cK_o3nI",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Hexagon%20Rifle",
"pricing": {
"current": 15,
"text": "€0.15",
"median": 0,
"lowest": 0
}
},
{
"name": "Pharaoh Helmet",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU33sMBtej16ddTf_-hU6Xt2aifvlW3m3FGLA6CTTJQT_5dw3aiIbwSj7c",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Pharaoh%20Helmet",
"pricing": {
"current": 579,
"text": "€5.79",
"median": 0,
"lowest": 0
}
},
{
"name": "Emissive Stripes Welder",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-41iPca6Qb7605PEnFSmjGMGATyDWy1UXO8gx2qsyVN1m4rnOTJTTA5x1Jzgw4mCx48jhAx_n383",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Emissive%20Stripes%20Welder",
"pricing": {
"current": 60,
"text": "€0.60",
"median": 0,
"lowest": 0
}
},
{
"name": "Lava Gloves",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU33sMBtej16ddTf-OoRLaj-qHGj2KxhX9fISLEWDBawtItLQE",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Lava%20Gloves",
"pricing": {
"current": 5,
"text": "€0.05",
"median": 0,
"lowest": 0
}
},
{
"name": "Lava Rifle",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-41rMdmoHZvtwKHvr0iihn1IMDiJejdbRu9dw3ailC8MyUw",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Lava%20Rifle",
"pricing": {
"current": 3,
"text": "€0.03",
"median": 0,
"lowest": 0
}
},
{
"name": "Zebra Grinder",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU3yNUUt-j1-419Nc27U_jW06LCj2KFnXFHIDCYTBlPQ-QX1mrryVhhh_hF0Lc",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Zebra%20Grinder",
"pricing": {
"current": 3,
"text": "€0.03",
"median": 0,
"lowest": 0
}
},
{
"name": "Badger Gloves",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU33sMBtej16ddTf-2oVrDpxO_yj1mxjGJ2Iz2FXjtOBPod1E9nTpku",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Badger%20Gloves",
"pricing": {
"current": 3,
"text": "€0.03",
"median": 0,
"lowest": 0
}
},
{
"name": "Leopard Gloves",
"app_name": "Space Engineers",
"appid": 244850,
"app_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/244850/f9856a90000d88e9a89441a7381fe9877e91eaca.jpg",
"item_icon": "https://steamcommunity-a.akamaihd.net/economy/image/CFYo-1cKLvA_DMFmE_uVlWkoPR4_i45hr8qtxLe2wgDUgS8rTXTaFX4AhVU33sMBtej16ddTf-OsXaftxKSfoli5mXFbIA6NRDFLT_ldw3aiq_x0bVQ",
"volume": 0,
"page": "https://steamcommunity.com/market/listings/244850/Leopard%20Gloves",
"pricing": {
"current": 3,
"text": "€0.03",
"median": 0,
"lowest": 0
}
}
],
"links": {
"first": "https://market-api-endpoint.herokuapp.com/item/all/244850?page=1&range=10",
"last": "https://market-api-endpoint.herokuapp.com/item/all/244850?page=25&range=10",
"prev": null,
"next": "https://market-api-endpoint.herokuapp.com/item/all/244850?page=2&range=10"
},
"meta": {
"current_page": 1,
"last_page": 25,
"from": 0,
"to": 10,
"current_on_page": 10,
"total": 241
}
}
```

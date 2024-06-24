# scoreboard-gui
Scoreboard GUI to access the [scoreboard API](https://github.com/DresdenDukes/scoreboard)

## install
1. change `apiBaseUrl` in `config.js` to your scoreboard url
2. set folder `public/` as document root in your webserver\
nginx example:
```
server {
    root /home/pi/scoreboard-gui/public;
}
```

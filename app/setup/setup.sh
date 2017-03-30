rm -rf node_modules/ &&
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" &&
installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/" &&
npm install -g n &&
npm install &&
grunt exec:webdriver-update &&
grunt exec:webdriver-nohup &&
grunt resist
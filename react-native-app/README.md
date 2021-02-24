# mobile-app

## Local dev setup

1. Ensure node 10+ is installed
1. Ensure Xcode 9.4+ is installed
1. In Xcode, Preferences -> Locations -> select most recent Command Line Tools
1. Install CocoaPods: `sudo gem install cocoapods -v 1.9.3` (see https://github.com/react-native-mapbox-gl/maps/issues/1097)
1. Install watchman: `brew install watchman`
1. In this `mobile-app` folder: `npm install && cd ios && pod install`

## Running on ios simulator

1. Start metro: `npm start`
1. In another terminal, start app: `npm run ios`
1. Edit components in vscode as usual, and Simulator should hot reload


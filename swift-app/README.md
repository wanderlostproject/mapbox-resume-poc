# swift-app

## Local dev setup

1. Ensure Xcode 9.4+ is installed
1. In Xcode, Preferences -> Locations -> select most recent Command Line Tools
1. Install CocoaPods: `sudo gem install cocoapods -v 1.9.3` (see https://github.com/react-native-mapbox-gl/maps/issues/1097)
1. In this `swift-app` folder: `pod install`

## Running on ios simulator

1. Launch Xcode and open `mapbox-swift-poc.xcworkspace`
1. Set `MGLMapboxAccessToken` string in `Info.plist` file
1. You may need to replace `localhost` with your actual IP address in `ViewController.swift`
1. Select a simulator and run the application

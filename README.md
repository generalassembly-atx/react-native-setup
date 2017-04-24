# React Native Setup

For this homework you will be installing the React Native client on your computer and running the "Hello World" script.

## React Native for MAC OSX Only
** Note: This process will not work on a Windows Machine. 

In order to get started head over to: https://facebook.github.io/react-native/docs/getting-started.html and follow along with the instructions. Also be sure to note that there are different steps when installing for Android and IOS.

First thing you will need to do is install Node and Watchman:

```
brew install node
brew install watchman
```

After that you will need to install the React-Native-CLI:

```
npm install -g react-native-cli
```

Next tool that you are going to need is the XCode tool, which you can download from the App Store:

[XCode Can be found Here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

Now go to your directory where you wish to create the project and then open the project up in XCode:

```
react-native init Hello-World
cd Hello-World
react-native run-ios  
```

This should open up the base template for your React Native project.

## React Native for Windows on Android

On important difference between Windows and Mac OSX when it comes to React Native is that while Mac can develop for both Android and IOS. Windows computer can only develop React Native for Android for the time being. 

In order get started you will want to install Python2 and Node.js via the terminal: 
```
choco install nodejs.install
choco install python2
```

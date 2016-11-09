![Alt text](/demo.png "Demo")

# react-native-telescope
This is a react native version for Telescope. This project will out of the box support as a reader to Telescope. We will try to make this project as modular as possible.

It is opinionated to make it easy for people to start but if you have your own way of doing things it's very easy to swap things out and move them around however you see fit.

As it currently stands this project is only focused on configuring the React Native project. The Meteor side is completely up to you, you can have a vanila Telescope-Nova instance or something that you have customized. For thoughts on how to structure your Meteor App I would suggest you read the [Meteor Guide](http://guide.meteor.com/) and the [Mantra spec](http://mantrajs.com/).

## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `git clone https://github.com/spencercarli/react-native-meteor-boilerplate.git`
- From the `RNApp` directory run `npm install`

## Running on iOS Simulator

_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
 
You've got a few ways you can run the app for iOS:

- From the `RNApp` directory run `react-native run-ios`
- From the `RNApp` directory run `npm run ios` then start the project in Xcode

## Running on iOS Device

_Note_: You must be on a Mac for this.

- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `RNApp/app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).
=======
# react-native-telescope
This is a react native version for Telescope. This project will out of the box support as a reader to Telescope. We will try to make this project as modular as possible. Any PR's welcome.
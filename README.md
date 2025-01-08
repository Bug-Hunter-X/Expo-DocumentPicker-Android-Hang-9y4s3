# Expo DocumentPicker Android Hang Issue

This repository demonstrates a bug in Expo's DocumentPicker API on Android.  The picker opens, but selecting a file causes the promise to hang indefinitely.  The issue is not consistently reproducible across devices.  This repo provides code to reproduce the issue and a potential workaround.

## Reproducing the Issue

1. Clone the repository.
2. Run `npm install`.
3. Run the Android app.
4. Attempt to select a file using the DocumentPicker.  The app may hang or crash.

## Potential Workaround (see bugSolution.js)

The provided solution adds a timeout to the promise, which allows the app to continue functioning. Note that this does not resolve the underlying issue, but may offer a suitable temporary workaround.
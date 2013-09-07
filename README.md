# TiMoodstocks-Android

Titanium native module wrapper of Moodstocks image scanner SDK on Android

## Prerequisites

* Appcelerator Titanium
* Android SDK and NDK
* ant

## Setup

In `build.properties`, put in the proper paths. An example would be:

    titanium.platform=/Users/kenhkan/Library/Application Support/Titanium/mobilesdk/osx/3.1.2.GA/android
    android.platform=/usr/local/var/lib/android-sdk/platforms/android-10
    google.apis=/usr/local/var/lib/android-sdk/add-ons/addon-google_apis-google-10
    android.ndk=/usr/local/Cellar/android-ndk/r8e

## Usage

First, download a binary release on
(https://github.com/kenhkan/TiMoodstocks-Android/releases)[https://github.com/kenhkan/TiMoodstocks-Android/releases].

Then, put the ZIP file in the [Resources
directory](http://docs.appcelerator.com/titanium/3.0/#!/guide/Using_a_Module-section-30082372_UsingaModule-Installingamoduleforasingleproject).

Add the following to your project's `tiapp.xml`:

    ...
    <modules>
      <module platform="android">com.kenhkan.timoodstocks.android</module>
    </modules>
    ...

## Development

Use `ant`:

    > ant run.emulator
    > ant run
    ... run `example/app.js` in emulator

    > ant install
    ... push example to device

    > ant
    ... build the module .zip file

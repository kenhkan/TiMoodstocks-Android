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

Use `ant`:

    > ant run.emulator
    > ant run
    ... run in emulator

    > ant install
    ... push to device

    > ant
    ... build the module .zip file

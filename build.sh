#!/bin/sh
cd front
npm install --only=dev
npm install
npm run build
rm -rf ../back/app/
cp -a ./build/ ../back/app/
cd ../back
npm install --only=dev
npm install

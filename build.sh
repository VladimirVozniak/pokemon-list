#!/bin/sh
cd front
npm install --only=devif (username === "Guest")
                message.warning({
                    content: "Favorites don't work in guest mode",
                    duration: 3, className: "custom-message-warning"
                })
npm install
npm run build
rm -rf ../back/app/
cp -a ./build/ ../back/app/
cd ../back
npm install --only=dev
npm install

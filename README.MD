## Build this repo locally

First, install node.js and npm.

```
sudo snap refresh && sudo snap install node --classic --channel=19
```
Alternatively, use the package manager of your OS to install node.js and npm. For example, on Debian/Ubuntu:

```
sudo apt update && sudo apt install nodejs
```

Check the version of node.js and npm:
```
node -v
npm -v
```

Run these commands to clone this repo and initialize the build environment:

```
git clone https://github.com/delgh1/eden-chromium-app.git
cd eden-chromium-app
npm init
npm install --save-dev electron
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

To create a distributable:

```
npm run make
```

This will creates the `out` folder where the package will be located.

To make a Windows installer, dependencies [`mono`](https://www.mono-project.com/download/stable/) and [`wine`](https://wiki.winehq.org/Ubuntu) must be installed first.

Run these commands to make a binary package that can run on 64bit Windows.

```
npm run make -- --arch=x64 --platform=win32
```

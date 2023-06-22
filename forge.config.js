module.exports = {
  packagerConfig: {
    icon: 'favicon',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://bbs.edengroup.co.jp/favicon.ico',  // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        setupIcon: 'favicon.ico',  // The ICO file to use as the icon for the generated Setup.exe
      },
    },
    {
      name: '@electron-forge/maker-zip',
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
            icon: 'favicon.png',  // Path to a single image that will act as icon for the application
          }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        icon: 'favicon.png',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: 'favicon.icns',  // Path to the icon to use for the app in the DMG window
      },
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: 'favicon.ico',
      },
    },
    {
      name: '@electron-forge/maker-snap',
      config: {
        features: {
          audio: true,
          webgl: true,
        },
        summary: 'Eden\'s snap package',
      }
    },
  ],
};

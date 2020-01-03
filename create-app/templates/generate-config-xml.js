const indent = require('../utils/indent');

module.exports = (options) => {
  const { cordova } = options;
  return indent(4, `
    <allow-navigation href="*" />
    ${cordova.platforms.indexOf('android') >= 0 ? `
    <platform name="android">
      <preference name="StatusBarOverlaysWebView" value="false" />
      <preference name="android-minSdkVersion" value="21" />
      <preference name="SplashMaintainAspectRatio" value="true" />
      <splash density="land-hdpi" src="res/screen/android/drawable-hdpi/screen.png" />
      <splash density="land-mdpi" src="res/screen/android/drawable-mdpi/screen.png" />
      <splash density="land-xhdpi" src="res/screen/android/drawable-xhdpi/screen.png" />
      <splash density="land-xxhdpi" src="res/screen/android/drawable-xxhdpi/screen.png" />
      <splash density="land-xxxhdpi" src="res/screen/android/drawable-xxxhdpi/screen.png" />
      <splash density="port-hdpi" src="res/screen/android/drawable-hdpi/screen.png" />
      <splash density="port-mdpi" src="res/screen/android/drawable-mdpi/screen.png" />
      <splash density="port-xhdpi" src="res/screen/android/drawable-xhdpi/screen.png" />
      <splash density="port-xxhdpi" src="res/screen/android/drawable-xxhdpi/screen.png" />
      <splash density="port-xxxhdpi" src="res/screen/android/drawable-xxxhdpi/screen.png" />
      <icon density="ldpi" src="res/icon/android/mipmap-ldpi/ic_launcher.png" />
      <icon density="mdpi" src="res/icon/android/mipmap-mdpi/ic_launcher.png" />
      <icon density="hdpi" src="res/icon/android/mipmap-hdpi/ic_launcher.png" />
      <icon density="xhdpi" src="res/icon/android/mipmap-xhdpi/ic_launcher.png" />
      <icon density="xxhdpi" src="res/icon/android/mipmap-xxhdpi/ic_launcher.png" />
      <icon density="xxxhdpi" src="res/icon/android/mipmap-xxxhdpi/ic_launcher.png" />
    </platform>
    ` : ''}
    ${cordova.platforms.indexOf('ios') >= 0 ? `
    <platform name="ios">
      <config-file parent="CFBundleAllowMixedLocalizations" platform="ios" target="*-Info.plist">
        <true />
      </config-file>
      <preference name="StatusBarOverlaysWebView" value="true" />
      <splash src="res/screen/ios/Default@2x~universal~anyany.png" />
      <icon height="180" src="res/icon/ios/icon-60x60@3x.png" width="180" />
      <icon height="60" src="res/icon/ios/icon-60x60@1x.png" width="60" />
      <icon height="120" src="res/icon/ios/icon-60x60@2x.png" width="120" />
      <icon height="76" src="res/icon/ios/icon-76x76@1x.png" width="76" />
      <icon height="152" src="res/icon/ios/icon-76x76@2x.png" width="152" />
      <icon height="228" src="res/icon/ios/icon-76x76@3x.png" width="228" />
      <icon height="40" src="res/icon/ios/icon-40x40@1x.png" width="40" />
      <icon height="80" src="res/icon/ios/icon-40x40@2x.png" width="80" />
      <icon height="87" src="res/icon/ios/icon-29x29@3x.png" width="87" />
      <icon height="57" src="res/icon/ios/icon-57x57@1x.png" width="57" />
      <icon height="114" src="res/icon/ios/icon-57x57@2x.png" width="114" />
      <icon height="72" src="res/icon/ios/icon-72x72@1x.png" width="72" />
      <icon height="144" src="res/icon/ios/icon-72x72@2x.png" width="144" />
      <icon height="167" src="res/icon/ios/icon-83.5x83.5@2x.png" width="167" />
      <icon height="29" src="res/icon/ios/icon-29x29@1x.png" width="29" />
      <icon height="58" src="res/icon/ios/icon-29x29@2x.png" width="58" />
      <icon height="50" src="res/icon/ios/icon-50x50@1x.png" width="50" />
      <icon height="100" src="res/icon/ios/icon-50x50@2x.png" width="100" />
      <icon height="167" src="res/icon/ios/icon-83.5x83.5@2x.png" width="167" />
      <icon height="1024" src="res/icon/ios/icon-512x512@2x.png" width="1024" />
    </platform>
    ` : ''}
    ${cordova.platforms.indexOf('electron') >= 0 ? `
    <platform name="electron">
      <preference name="ElectronSettingsFilePath" value="electron-settings.json" />
      <icon src="res/icon/electron/app.png" target="app" />
      <icon src="res/icon/electron/installer.png" target="installer" />
      <preference name="ShowSplashScreen" value="false" />
      <preference name="AutoHideSplashScreen" value="true" />
    </platform>
    ` : ''}
    ${cordova.platforms.indexOf('osx') >= 0 ? `
    <platform name="osx">
      <icon src="res/icon/osx/icon-16x16.png" width="16" height="16" />
      <icon src="res/icon/osx/icon-32x32.png" width="32" height="32" />
      <icon src="res/icon/osx/icon-64x64.png" width="64" height="64" />
      <icon src="res/icon/osx/icon-128x128.png" width="128" height="128" />
      <icon src="res/icon/osx/icon-256x256.png" width="256" height="256" />
      <icon src="res/icon/osx/icon-512x512.png" width="512" height="512" />
      <icon src="res/icon/osx/icon-1024x1024.png" width="1024" height="1024" />
      <preference name="ShowSplashScreen" value="false" />
      <preference name="AutoHideSplashScreen" value="true" />
    </platform>
    ` : ''}
    <preference name="UIWebViewBounce" value="false" />
    <preference name="DisallowOverscroll" value="true" />
    <preference name="BackupWebStorage" value="local" />
    <preference name="AutoHideSplashScreen" value="false" />
    <preference name="ShowSplashScreenSpinner" value="false" />
    <preference name="SplashScreenDelay" value="0" />
    <preference name="Suppresses3DTouchGesture" value="true" />
    <preference name="Allow3DTouchLinkPreview" value="false" />
    <preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />
    <preference name="AllowInlineMediaPlayback" value="true" />
  `);
};

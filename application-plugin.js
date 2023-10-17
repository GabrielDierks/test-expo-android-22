const { withMainApplication } = require("@expo/config-plugins");

function applyPackage(mainApplication) {
  mainApplication = mainApplication.replace(
    `ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());`,
    ``
  );

  return mainApplication;
}

module.exports = function withoutFlipper(expoConfig) {
  expoConfig = withMainApplication(expoConfig, (config) => {
    config.modResults.contents = applyPackage(config.modResults.contents);
    return config;
  });

  return expoConfig;
};

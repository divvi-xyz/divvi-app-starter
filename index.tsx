import { createApp } from "@divvi/mobile";
import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import React from "react";
import CustomScreen from "./screens/CustomScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen";
import BrandLogo from "./assets/BrandLogo";
import WelcomeLogo from "./assets/WelcomeLogo";
import PlaygroundTabIcon from "./assets/PlaygroundTabIcon";

const expoConfig = Constants.expoConfig;
if (!expoConfig) {
  throw new Error("expoConfig is not available");
}
const App = createApp({
  registryName: "DivviAppStarter",
  displayName: expoConfig.name,
  deepLinkUrlScheme: expoConfig.scheme
    ? Array.isArray(expoConfig.scheme)
      ? expoConfig.scheme[0]
      : expoConfig.scheme
    : "example",
  // Uncomment this to enable the Divvi protocol and set your referrer ID and protocol IDs
  // divviProtocol: {
  //   protocolIds: ["somm"],
  //   referrerId: "some-referrer-id",
  // },
  features: {
    cloudBackup: true,
  },
  themes: {
    default: {
      assets: {
        brandLogo: BrandLogo,
        welcomeLogo: WelcomeLogo,
      },
    },
  },
  screens: {
    tabs: ({ defaultTabs }) => {
      return {
        screens: [
          defaultTabs.wallet,
          defaultTabs.activity,
          {
            name: "Playground",
            component: PlaygroundScreen,
            icon: PlaygroundTabIcon,
            label: (t) => t("playground"),
          },
        ],
        initialScreen: "activity",
      };
    },
    custom: (Screen) => (
      <>
        <Screen
          name="CustomScreen"
          component={CustomScreen}
          // TODO: make custom screens use our custom back button
          options={{ headerBackVisible: true, headerShown: true }}
        />
      </>
    ),
  },
  locales: {
    "en-US": require("./locales/en-US.json"),
    "es-419": require("./locales/es-419.json"),
    "pt-BR": require("./locales/pt-BR.json"),
    de: require("./locales/de.json"),
    "ru-RU": require("./locales/ru-RU.json"),
    "fr-FR": require("./locales/fr-FR.json"),
    "it-IT": require("./locales/it-IT.json"),
    "uk-UA": require("./locales/uk-UA.json"),
    "pl-PL": require("./locales/pl-PL.json"),
    "th-TH": require("./locales/th-TH.json"),
    "tr-TR": require("./locales/tr-TR.json"),
    "vi-VN": require("./locales/vi-VN.json"),
    "zh-CN": require("./locales/zh-CN.json"),
  },
});

registerRootComponent(App);

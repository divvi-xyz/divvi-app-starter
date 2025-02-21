# Divvi App Starter 📱

A starter template for creating Web3 apps with the [Divvi Mobile](https://github.com/divvi-xyz/divvi-mobile) framework, powered by [Expo](https://expo.dev).

## Quick Start

1. Install dependencies

   ```bash
   yarn install
   ```

2. Generate native project files

   ```bash
   yarn prebuild
   ```

   > Run this step whenever adding new native dependencies

3. Run the app

   ```bash
   # iOS
   yarn ios

   # Android
   yarn android
   ```

## Project Structure

```
divvi-app-starter/
├── index.tsx        # Entry point with the Divvi Mobile configuration
├── app.json         # Expo configuration
├── eas.json         # EAS configuration
├── assets/          # Static assets
└── screens/         # Custom screens
```

## Development

This template includes:

- ⛓️ Multi-chain support (Ethereum, Celo, Arbitrum, etc.)
- 🔌 Native Divvi protocol integration
- 📱 Expo EAS deployment configuration
- 📦 TypeScript support

## Learn More

- [Divvi Mobile Documentation](https://github.com/divvi-xyz/divvi-mobile/tree/main/docs)
- [Framework Architecture](https://github.com/divvi-xyz/divvi-mobile/blob/main/docs/architecture.md)
- [API Reference](https://github.com/divvi-xyz/divvi-mobile/blob/main/docs/api-reference.md)

## Community

- 💬 [Discord](https://discord.com/invite/EaxZDhMuDn)
- 🐦 [X/Twitter](https://x.com/letsdivvi)

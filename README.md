## ENS Homepage V2

The homepage for the ENS project, visit [here](https://ens.domains/). 

### Translations

Translations use `react-i18next` and translations are located in: `locales/language/translation.json`.

Please copy the `en.translation.json` and add the translation to allow us to add a new language

### Adding logos

If your app [integrates with ENS](https://docs.ens.domains/dapp-developer-guide/ens-enabling-your-dapp) and would like to have your logo into our website, please raise a PR following the instruction below.

#### 1. Add your company detail to src/components/Home/links.json in the following format. Please place your company name in the alphabetical order.

```
 "productname": {
    "link": "https://yourwebsite.com",
    "name": "the description of your site"
  }
```

Example

```
 "nftychat": {
    "link": "https://nftychat.xyz",
    "name": "nfty chat"
  }
```

#### 2. Add your company logo in the same name as your `productname` (please resize your logo) under one of the following directories

- src/components/Home/Ecosystem/wallets/ = wallets
- src/components/Home/Ecosystem/browsers/ = browsers
- src/components/Home/Ecosystem/apps/ = anything else

#### 3. Raise a PR. In the PR, please describe how to check if you have integrated ENS (screenshot or video is preferred)

[Reference PR](https://github.com/ensdomains/ensdomains-v2/pull/493/files)

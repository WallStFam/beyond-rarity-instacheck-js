# Beyond Rarity Instacheck Widget - JS Version

<p float="left">
  <img src="public/light-theme.png"
     alt="Light theme"
     width="250" 
     style="margin-right: 10px;" 
    />
  <img src="public/dark-theme.png"
     alt="Dark Theme"
     width="250" 
    />
</p>

### You can try a live demo [here](https://codepen.io/nicopanfili/pen/oNqedza)


## Installation
Using **NPM**:

`
npm i @beyondrarity/instacheck-js
`

Using **YARN**:

`
yarn add @beyondrarity/instacheck-js
`

## Use Instacheck-JS from CDN
If you don't want to include instacheck-js npm package in your project, you can use it directly from CDN: 

```html
<script src="https://cdn.jsdelivr.net/npm/@beyondrarity/instacheck-js@0.1.0/dist/index.js"></script>
```

## Usage
Create a container element for the widget and set the needed custom attributes:
```html
<div id="br-instacheck" 
     collectionId="wallstmoms"
     startTokenId="1"
     endTokenId="3000"
     theme="light"
/>
```

The container element should have some attributes in order to work:

Attribute | Description | Required      
------- | :---------------- | :----------:
`collectionId`  | The Collection Id which is the unique identifier for your collection (also called slug).The Collection Id is available in the URL when navigating to your collection on [Beyond Rarity](https://www.beyondrarity.com) which is in the following format:<br><br>`www.beyondrarity.com/c/[collectionId]`<br><br>For example, the URL for the `Wall St Moms` collection is https://www.beyondrarity.com/c/wallstmoms where `wallstmoms` is the `collectionId`.| `yes`
`startTokenId`  |The first token id in the collection which is normally `1` or `0`. | `yes`
`endTokenId`   |  The last token id in the collection which is normally:<br>- `equal to the supply if the first token id is 1`<br>- `or equal to the (supply - 1) if the first token id is 0`  | `yes`
`theme` | `"dark"` or `"light"` | `No`.Default value is `"light"`


Then you can initialize the widget by calling:
```js
BRInstacheck.init("#br-instacheck");
```

Optionally you can define just the container without any attributes:
```html
<div id="br-instacheck" />
```

And use a config object as second parameter on initialization:
```js
BRInstacheck.init("#br-instacheck", {
    collectionId: "wallstmoms",
    startTokenId: 1,
    endTokenId: 3000,
    theme: "dark"
});
```

`NOTE:` container element attributes take precedence over the config object values. If you define an attribute in both container and `BRInstacheck.init` config object, the value defined on the container element will be used.  


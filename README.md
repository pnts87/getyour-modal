# Simple Modal Creator

## Install

```bash
npm i github:pnts87/getyour-modal
```

## Usage

```html
  <button id="some-button" onclick="document.querySelector('getyour-modal').open()">Just a simple Button</button>

  <getyour-modal>
    <img id="some-modal-content" src="https://picsum.photos/200" />
  </getyour-modal>
  <script type="module" src="./getyour-modal.js"></script>

```

Add the modal with your content. Then get a reference of the object and call the `open()` function.

```js
const getyourModal = document.querySelector("getyour-modal")
getyourModal.open()
```

## Change src and alt of the close button

```js
const getyourModal = document.querySelector("getyour-modal")
const closeButton = getyourModal.shadowRoot.querySelector(".close-button")
closeButton.setAttribute("src", "my-src")
closeButton.setAttribute("alt", "my-alt")

```

After getting a reference of your modal button query the shadow root and get the close button by class name. It is a HTMLImageElement.

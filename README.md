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

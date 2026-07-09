# micro-object-diff-patch

> **Why use micro-object-diff-patch?**
> Synchronizing state across client/server, or storing version history, requires tracking and sharing object changes. Copying entire objects over network is expensive, and recursive diffing is complex to implement.

A lightweight JSON diffing and patching library that calculates minimal recursively-nested deltas between two objects, and applies those patches cleanly.

---

## ⚡ Features
* **Recursive nested object comparison**
* **Outputs compact and serializable JSON deltas**
* **Clean patch applier with mutative or immutable patterns**
* **Handles arrays and null values safely**

---

## 📦 Installation
```bash
npm i micro-object-diff-patch
```

---

## 🚀 Usage
```javascript
import { diff, patch } from 'micro-object-diff-patch';

const original = { name: 'Hal', config: { theme: 'dark', port: 80 } };
const updated = { name: 'Halonic', config: { theme: 'light', port: 80 } };

// Calculate diff
const delta = diff(original, updated);
console.log('Delta:', delta); // { name: 'Halonic', config: { theme: 'light' } }

// Apply diff to another object
const result = patch(original, delta);
console.log(result);
```

---

## ⚙️ API Reference
### diff(objA, objB)
* Returns a delta object mapping changed keys.
### patch(obj, delta)
* Returns a new object with delta applied.

---

## 📺 Demonstration
![Terminal Demo](./demo.gif)

---

## 📄 License
MIT License.

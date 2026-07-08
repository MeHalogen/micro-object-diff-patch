# object-diff-patch

Semantic diffing and patching for JavaScript/JSON objects.

## Usage

```ts
import { diff, patch } from 'object-diff-patch';

const delta = diff({ a: 1 }, { a: 2, b: 3 });
const res = patch({ a: 1 }, delta);
```

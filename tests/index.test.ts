import { describe, it, expect } from 'vitest';
import { diff, patch } from '../src/index.js';

describe('object-diff-patch', () => {
  it('should compute diff and patch objects', () => {
    const a = { x: 1, y: { z: 2 } };
    const b = { x: 1, y: { z: 3 }, w: 4 };

    const delta = diff(a, b);
    expect(delta).toEqual({ y: { z: 3 }, w: 4 });

    const patched = patch(a, delta);
    expect(patched).toEqual(b);
  });
});

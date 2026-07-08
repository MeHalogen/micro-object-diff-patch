export type Delta = Record<string, any>;

export function diff(objA: any, objB: any): Delta | null {
  if (objA === objB) return null;
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return objB;
  }

  const delta: Delta = {};
  let hasChanges = false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Added or updated keys
  for (const key of keysB) {
    if (!(key in objA)) {
      delta[key] = objB[key];
      hasChanges = true;
    } else {
      const subDiff = diff(objA[key], objB[key]);
      if (subDiff !== null) {
        delta[key] = subDiff;
        hasChanges = true;
      }
    }
  }

  // Removed keys (marked as null)
  for (const key of keysA) {
    if (!(key in objB)) {
      delta[key] = null;
      hasChanges = true;
    }
  }

  return hasChanges ? delta : null;
}

export function patch(obj: any, delta: Delta | null): any {
  if (!delta) return obj;
  if (typeof obj !== 'object' || obj === null) return obj;

  const copy = Array.isArray(obj) ? [...obj] : { ...obj };

  for (const key of Object.keys(delta)) {
    const val = delta[key];
    if (val === null) {
      delete copy[key];
    } else if (typeof val === 'object' && key in copy && typeof copy[key] === 'object') {
      copy[key] = patch(copy[key], val);
    } else {
      copy[key] = val;
    }
  }

  return copy;
}

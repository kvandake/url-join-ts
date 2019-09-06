# url-join-ts

Join urls and normalize on Typescript.

## Installation

```bash
npm i url-join-ts --save
```

or

```bash
yarn add url-join-ts
```

## Usage

**urlJoin(url, paths)**

```typescript
import { urlJoin } from 'url-join-ts';

urlJoin('https://example.com', 'path', 'path2');

// https://example.com/path/path2
```

**urlJoinP(url, paths, params)**

```typescript
import { urlJoinP } from 'url-join-ts';

urlJoinP('https://example.com', ['path', 'path2'], {param1: 1, param2: '2'});

// https://example.com/path/path2?param1=1&param2=2
```

## Licence
MIT

---
title: useDirection
description: Access the current direction
---
## Usage

```ts
import { useDirection } from 'akar';

// With ConfigProvider setup as follows
// <ConfigProvider dir="rtl">
const locale = useDirection(); // rtl
```

```ts
import { useDirection } from 'akar';

// With ConfigProvider setup as follows
// <ConfigProvider dir="rtl">
const locale = useDirection('ltr'); // ltr
```

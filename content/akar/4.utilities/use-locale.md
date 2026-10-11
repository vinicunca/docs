---
title: useLocale
description: Access the current locale
---
## Usage

```ts
import { useLocale } from 'akar';

// With ConfigProvider setup as follows
// <ConfigProvider locale="fr-FR">
const locale = useLocale(); // fr-FR
```

```ts
import { useLocale } from 'akar';

// With ConfigProvider setup as follows
// <ConfigProvider locale="fr-FR">
const locale = useLocale('en-US'); // en-US
```

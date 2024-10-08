import { entries, groupBy, map, pipe } from '@vinicunca/perkakas';

import { PERKAKAS_METHODS } from '../perkakas/perkakas.metadata';
import { getTags } from '../perkakas/perkakas.utils';

const grouped = pipe(
  PERKAKAS_METHODS,
  groupBy(
    ({ category }) =>
      category
      ?? 'Other',
  ),
);

const groupedEntries = entries(grouped);

const NAVBAR_ENTRIES = map(
  groupedEntries,
  ([category, funcs]) => {
    return {
      items: funcs.map((func) => ({
        link: `/perkakas/docs#${func.name.toLowerCase()}`,
        tags: getTags(func),
        text: func.name,
      })),
      text: category as string,
    };
  },
);

export const perkakasSidebar = [
  {
    link: '/perkakas/installation',
    text: 'Installation',
  },
  ...NAVBAR_ENTRIES,
];

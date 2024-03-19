import { map, pipe, toPairs } from '@vinicunca/perkakas';

import { CATEGORIZED } from '../utils/categorized.typedoc';
import { getTags } from '../utils/get-tags';

const NAVBAR_ENTRIES = pipe(
  CATEGORIZED,
  toPairs,
  map(
    ([category, funcs]) => {
      return {
        items: funcs.map((func) => ({
          link: `/perkakas/docs#${func.name}`,
          tags: getTags(func),
          text: func.name,
        })),
        text: category,
      };
    },
  ),
);

export const perkakasSidebar = NAVBAR_ENTRIES;

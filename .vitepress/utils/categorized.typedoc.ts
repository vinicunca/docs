import type { JSONOutput } from 'typedoc';

import { groupBy, pipe } from '@vinicunca/perkakas';
import DATA from '@vinicunca/perkakas/dist/metadata.json' assert { type: 'json' };

import { transformProject } from './transform.typedoc';

export const CATEGORIZED = pipe(
  DATA as JSONOutput.ProjectReflection,
  transformProject,
  groupBy(
    ({ category }) =>
      category
      ?? 'Other',
  ),
);

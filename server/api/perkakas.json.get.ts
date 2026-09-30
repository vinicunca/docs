import { defineEventHandler } from 'h3';
import { getPerkakasMethods } from '../perkakas.data';

export default defineEventHandler(() => getPerkakasMethods());

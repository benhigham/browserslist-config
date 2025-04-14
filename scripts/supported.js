#!/usr/bin/env node

import browserslist from 'browserslist';
import config from '../src/index.js';

console.log(browserslist(config).join('\n'));

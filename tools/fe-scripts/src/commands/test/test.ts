#!/usr/bin/env node
import { Command } from 'commander';

import runJest from './jest';

export default async (cmd: Command): Promise<void> => {
  const rawArgs = cmd.parent.rawArgs as string[];
  const options = rawArgs.slice(rawArgs.indexOf('test') + 1);

  await runJest(options);
};

import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import { Readable } from 'stream';
nconst config = new pulumi.Config();
const cider = config.require(cider);
const stackName = config.require(stackName);

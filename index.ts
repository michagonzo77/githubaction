import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import { Readable } from 'stream';

echo "##active_line2##"
const config = new pulumi.Config();
echo "##active_line3##"
const cider = config.require("cider");
echo "##active_line4##"
const stackName = config.require("stackName");

#! /usr/bin/env node
process.env.NODE_CONFIG_DIR = process.env.NODE_CONFIG_DIR ? process.env.NODE_CONFIG_DIR : __dirname + '/config/';

import config from ('config');
import rally from 'rally';


let restAPI = rally({

})

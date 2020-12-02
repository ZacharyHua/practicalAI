
import {mountWork} from './mount/index.js'
import { generatePixel } from "./utils";

module.exports.loop = function () {

    // 挂载拓展
    mountWork();

    

    // 搓 pixel
    generatePixel()

}   
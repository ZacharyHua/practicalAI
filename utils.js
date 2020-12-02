/**
 * 生成 pixel
 */
export function generatePixel() {
    if (Game.cpu.bucket >= 7000) Game.cpu.generatePixel()
}
import BypassDefinition from './BypassDefinition.js'

export default class Emulatorgames extends BypassDefinition {
    constructor() {
        super()
        // Custom bypass required bases can be set here
    }

    execute() {
        window.setInterval = f => setInterval(f, 100)
    }
}

export const matches = ['emulator.games/download.php']
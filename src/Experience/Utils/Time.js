import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now() / 1000
        this.current = this.start
        this.elapsed = 0
        this.delta = 16 / 1000
        this.playing = true

        window.requestAnimationFrame(() =>
        {
            this.tick = this.tick.bind(this)
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now() / 1000
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed += this.playing ? this.delta : 0

        if(this.delta > 60 / 1000)
        {
            //console.log(this.delta)
            this.delta = 60 / 1000
        }
        
        this.trigger('tick')
        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}
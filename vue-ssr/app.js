// app.js (shared between server and client)
import { createSSRApp } from 'vue'

export function createApp() {
    return createSSRApp({
        data: () => ({ count: 1 }),
        template: `<h1>hello</h1><button @click="count++">{{ count }}</button>`
    })
}
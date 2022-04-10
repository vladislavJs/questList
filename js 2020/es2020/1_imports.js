(
    async () => {
       const module = await import('./module.js')
        console.log(module.secretKey2)
        console.log(module.secretKey)
    }
)()
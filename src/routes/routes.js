const {exec} = require('child_process')
const process = require('process')
module.exports = (app) =>{

    app.post('/postreceive', (req, res) => {
        // D:\GIT\teste\git_hook_test"
        // process.platform
        exec("cd ../teste/git_hook_test && git pull", (error, stdout, stderr) => {
           
                console.log(stdout)

        })

        res.end()
    })

}

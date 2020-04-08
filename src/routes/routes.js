const {exec} = require('child_process')
const process = require('process')
module.exports = (app) =>{

    app.post('/stopdetector', (req, res) => {
        // D:\GIT\teste\git_hook_test"
        // process.platform
        exec("systemctl stop detector ", (error, stdout, stderr) => {
           	console.log('Stop detector')	
		if(error || stderr){
			console.log("[ERROR]: ",error)
			console.log("[STDERR]: ",stderr)
			return res.send('Erro')
		}		
		console.log("[STDOUT]: ",stdout)
		return res.send('Executado')
	})
    })

    app.post('/startssh', (req, res) => {
	exec('systemctl start ssh', (error, stdout, stderr) => {
		console.log('Start SSH')
		if(error || stderr){
			console.log("[ERROR]: ",error)
			console.log("[STDERR]: ",stderr)
			return res.send('Erro')
		}
		console.log("[STDOUT]: ",stdout)
		return res.send('Executado')
	
	
	})
    })

    app.post('/meminfo', (req, res) => {
        exec('free -m', (error, stdout, stderr) => {
                console.log('Status de memoria')
		if(error || stderr){
                        console.log("[ERROR]: ",error)
                        console.log("[STDERR]: ",stderr)
                        return res.send('Erro')
                }
		console.log("[STDOUT]: ",stdout)
                return res.send(stdout)


        })
    })


}

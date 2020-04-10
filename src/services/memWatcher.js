const {exec} = require('child_process');


function startDetector(){

	exec('systemctl start detector', (error, stdout, stderr) => {
		console.log('Iniciando Detector')
	})

}



function checkMem(){	

	exec('free -m | grep Mem', (error , stdout, stderr) => {
		const [,total,used,,,,] = stdout.split(' ').filter(item => item !=='')
		const usage = used/total
		console.log(`Memory usage ${usage*100}%!`)
		if(usage >= 0.7){
			exec('systemctl stop detector', (error, stdout, stderr) => {
				console.log('Parando detector')
				setTimeout(startDetector,61*1000)
			})
		}
	})
	
}

module.exports = checkMem





var cfenv = require('cfenv'); 				//Cloud Foundry Environment Variables
var appEnv = cfenv.getAppEnv(); 			// Grab environment variables

console.log('before env');




if (appEnv.isLocal) {
  
	require('dotenv').load();   
var emailAPI = process.env.SENDGRID_API_KEY;
console.log(emailAPI);

} 

if (!appEnv.isLocal) {
    
var emailAPI = process.env.SENDGRID_API_KEY;
console.log(emailAPI);

} 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(emailAPI);
console.log('Api Set');
const msg = {
  to: 'rajasany@gmail.com',
  from: 'raja.sanyal@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
console.log('Msg Set');
sgMail.send(msg);
console.log('after  send');
# Mail Manager for exun
## Paths
* Path 1: GET https://exun-mail.herokuapp.com/addmail?email={mailtoadd}
* Path 2: GET https://exun-mail.herokuapp.com
###### This is a UI path to send a notification to all emails which is secure as you have to type out the password in the environment to send it
* Path 3: POST https://exun-mail.herokuapp.com/notify/message
###### The path where the UI leads to. The body needs to contain the password else it will not send the mail.

PTP.js
===========================
PassthePopcorn Node wrapper

Author
------
Adam Schodde

License
-------
MIT

Install
-------
```
    npm install ptp
    var ptp = require('ptp');
```
Use a config file like the template provided or input your data statically to the application.

Examples
---
```
        var ptp = require('./ptp.js');
		ptp.login(username, password, passkey, function (error, data) {
		if(error) {
			throw error;
		}
		data = JSON.parse(data);
		if(data.Result === 'Ok') {
			ptp.latest(function (error, data) {
				if(error) {
					throw error;
				}
				console.log(data);
			});
		}
	});
	ptp.login(username, password, passkey, function (error, data) {
		if(error) {
			throw error;
		}
		data = JSON.parse(data);
		if(data.Result === 'Ok') {
			ptp.search('Harry Potter', function (error, data) {
				if(error) {
					throw error;
				}
				console.log(data);
			});
		}
	});
```

Output
------
```
    {
    	Result: 'OK'
    }
```
or

```
	{"TotalResults":"84696","Movies":[{"GroupId":"2455","Title":"Umberto D.","Year":"1952","Cover":"https:\/\/ptpimg.me\/5re1h3.jpg","Tags":["drama","italian"],"Directors":[{"Name":"Vittorio De Sica","Id":"1226"}],"ImdbId":"0045274","TotalLeechers":1,"TotalSeeders":52,"TotalSnatched":554,"MaxSize":8500709376,"LastUploadTime":"2012-12-18 01:11:33","Torrents":[{"Id":122968,"Quality":"Standard...
	}
```
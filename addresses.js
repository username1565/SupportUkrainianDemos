var addresses = {
	'btc'	:	['Bitcoin (BTC)',												'1cvXfGucsRredtDK4UQB8jwYG3Yqm3TC5'				]
,	'ltc'	:	['LiteCoin (LTC)',												'MQFy7DKEt2wuq5BJx3ch6Cr6RUi7Prshtr'			]
,	'doge'	:	['Dogecoin (DOGE)',												'DEDTFTVaLaPdzMPo39a2F28UpM8qGkgSTK'			]
,	'eth'	:	['Ethereum (ETH)',												'0x3D574475714520054D4aAABDf28832894fE35BD3'	]
,	'erc20'	:	['ERC20 (USDT, USDC, tokens)',									'0x3D574475714520054D4aAABDf28832894fE35BD3'	]
,	'trx'	:	['Tron (TRX)',													'TGM8zXQsm2Fi7CKnqw1d4cUYPKBmtaftrq'			]
,	'trc20'	:	['TRC-20 (USDT)',												'TGM8zXQsm2Fi7CKnqw1d4cUYPKBmtaftrq'			]
,	'rvn'	:	['RavenCoin (RVN)', 											'R9wYUJUFGM3GZrrSjHdB9JVMyhzWXN3Hs6'			]
};


var selected = 'rvn'; //default coin

function initialize(){

	var html = ''
	html	+=	'<select id="currency" name="select" style="display: inline-block;" onclick="update_address()">'
			+	'<!--Supplement an id here instead of using "name"-->'
	;

	for(var coin in addresses){
		if (addresses.hasOwnProperty(coin))
		{
			html += '<option value="'+coin+'"	'+ ( ( coin === selected ) ? 'selected' : '' ) + '>'+ addresses[coin][0] + '</option>' ;
		}
	}
	
	html += '</select>';
	
	document.getElementById('select_currency').innerHTML = html;
	
	update_address();
}

function update_address(){
	var currency = document.getElementById('currency');
//	console.log(currency.value);
	if(currency.value in addresses){
		document.getElementById('address').innerHTML = addresses[currency.value][1];
	}
}

/*
function copy_to_clipboard(text){
	navigator.clipboard.writeText(text);
}
*/

function CopyToClipboard(text) {
	console.log(text);

	if(navigator.clipboard) {
		navigator.clipboard.writeText(text);
	}
	else{
		alert(text);
	}

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";//"Copied: " + text;
}

function ResetTooltip() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy";
}

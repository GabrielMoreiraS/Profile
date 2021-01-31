window.onload = function(){

	/***CREATING A STOPWATCH ONLY USING JAVASCRIPT OR ALMOST IT***/

	//BASIC STRUCTURE
	var body = document.body;
	var header = document.createElement("header");
	var title = document.createElement("h2");
	var infoHeader = document.createElement("div");
	var otherBox = document.createElement("div");
	var message = document.createElement("p");
	var messageLink = document.createElement("a");

	var centralizer = document.createElement("div");
	var container = document.createElement("div");
	var vid = document.createElement("video");
	var song = document.createElement("audio");
	var greenOn = document.createElement("div");
	var killOn = document.createElement("div");
	var on = document.createElement("div");
	var pgOn = document.createElement("p");
	var txt1 = ["ON","RESERT"];

	var redOff = document.createElement("div");
	var pgOff = document.createElement("p");
	var txt2 = document.createTextNode("TURN OFF");
	var off = document.createElement("div");

	var blackLeft = document.createElement("div");
	var txt1_2 = document.createElement("p");
	var tx1_2 = document.createTextNode("Stop");
	var buttonStop = document.createElement("div");
	
	var blackRight = document.createElement("div");
	var txt2_2 = document.createElement("p");
	var tx2_2 = document.createTextNode("Start");
	var buttonStart = document.createElement("div");

	var glass = document.createElement("div");
	var customArea = document.createElement("div");
	var display = document.createElement("div");
	var warnings = document.createElement("h3");
	let displayH = document.createElement("h3");
	var sing = document.createElement("p");
	var displayM = document.createElement("h3");
	var sing2 = document.createElement("p");
	var displayS = document.createElement("h3");

	var selectArea = document.createElement("div");
	var backSH = document.createElement("div");
	var selectH = document.createElement("div");
	var h2H = document.createElement("h2");
	var h2Hc = document.createTextNode("HOURS");
	var extraSHR = document.createElement("div");
	var plusHR = document.createElement("div");
	var buttonHR = document.createElement("div");
	var extraSHL = document.createElement("div");
	var lessHL = document.createElement("div");
	var buttonHL = document.createElement("div");

	var backSM = document.createElement("div");
	var selectM = document.createElement("div");
	var h2M = document.createElement("h2");
	var h2Mc = document.createTextNode("MINUTES");
	var extraSMR = document.createElement("div");
	var plusMR = document.createElement("div");
	var buttonMR = document.createElement("div");
	var extraSML = document.createElement("div");
	var buttonML = document.createElement("div");
	var lessML = document.createElement("div");

	var backSS = document.createElement("div");
	var selectS = document.createElement("div");
	var h2S = document.createElement("h2");
	var h2Sc = document.createTextNode("SECONDS");
	var extraSSR = document.createElement("div");
	var plusSR = document.createElement("div");
	var buttonSR = document.createElement("div");
	var extraSSL = document.createElement("div");
	var buttonSL = document.createElement("div");
	var lessSL = document.createElement("div");

	//MAIN APPEND AREA
	body.appendChild(header);
	header.appendChild(infoHeader);
	infoHeader.appendChild(title);
	title.innerHTML = "TIMER MADE USING JAVASCRIPT";
	infoHeader.appendChild(otherBox);
	otherBox.appendChild(message);
	otherBox.appendChild(messageLink);

	body.appendChild(centralizer);
	centralizer.appendChild(container);
	container.appendChild(vid);
	container.appendChild(song);

	container.appendChild(blackLeft);
	blackLeft.appendChild(txt1_2);
	txt1_2.appendChild(tx1_2);

	container.appendChild(blackRight);
	blackRight.appendChild(txt2_2);
	txt2_2.appendChild(tx2_2);

	container.appendChild(buttonStart);
	container.appendChild(buttonStop);

	container.appendChild(customArea);
	customArea.appendChild(glass);

	customArea.appendChild(greenOn);
	greenOn.appendChild(killOn);
	greenOn.appendChild(pgOn);
	pgOn.innerHTML = txt1.join(" / ");
	killOn.appendChild(on);

	customArea.appendChild(redOff);
	redOff.appendChild(off);
	redOff.appendChild(pgOff);
	pgOff.appendChild(txt2);

	customArea.appendChild(display);
	display.appendChild(warnings);
	display.appendChild(displayH);
	display.appendChild(sing);
	display.appendChild(displayM);
	display.appendChild(sing2);
	display.appendChild(displayS);

	customArea.appendChild(selectArea);
	selectArea.appendChild(backSH);
	backSH.appendChild(selectH);
	backSH.appendChild(extraSHL);
	backSH.appendChild(extraSHR);
	selectH.appendChild(h2H);
	h2H.appendChild(h2Hc);
	selectH.appendChild(buttonHL);
	buttonHL.appendChild(lessHL);
	selectH.appendChild(buttonHR);
	buttonHR.appendChild(plusHR);

	selectArea.appendChild(backSM);
	backSM.appendChild(selectM);
	backSM.appendChild(extraSML);
	backSM.appendChild(extraSMR);
	selectM.appendChild(h2M);
	h2M.appendChild(h2Mc);
	selectM.appendChild(buttonML);
	buttonML.appendChild(lessML);
	selectM.appendChild(buttonMR);
	buttonMR.appendChild(plusMR);

	selectArea.appendChild(backSS);
	backSS.appendChild(selectS);
	backSS.appendChild(extraSSL);
	backSS.appendChild(extraSSR);
	selectS.appendChild(h2S);
	h2S.appendChild(h2Sc);
	selectS.appendChild(buttonSL);
	buttonSL.appendChild(lessSL);
	selectS.appendChild(buttonSR);
	buttonSR.appendChild(plusSR);

	//STYLE AREA
	(() => {
		var night = ()=>{
			title.style.color = "hsl(120, 100%, 40%)";
			message.style.color = "hsl(120, 100%, 40%)";
			messageLink.style.color = "hsl(120, 100%, 40%)";
		}
		var day = ()=>{
			title.style.color = "black";
			message.style.color = "black";
			messageLink.style.color = "black";
		}

		setInterval(()=>{
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			if(h >= 18 || h <= 5){
				night();
			}else{
				day();
			}
		},1);

		body.style.backgroundColor = "#000080";

		header.style.width = "100%";
		header.style.minHeight = "230px";
		header.style.padding = "33px 1%";
		header.style.backgroundColor = "#00004d";

		infoHeader.style.width = "100%";
		infoHeader.style.maxWidth = "900px";
		infoHeader.style.minHeight = "170px";
		infoHeader.style.padding = "0 1%";
		infoHeader.style.paddingTop = "5px";
		infoHeader.style.paddingBottom = "10px";
		infoHeader.style.margin = "0 auto";
		infoHeader.style.border = "5px solid black";
		infoHeader.style.borderRadius = "15px";
		infoHeader.style.backgroundColor = "hsl(151, 16%, 45%)";

		title.style.width = "100%";
		title.style.lineHeight = "60px";
		title.style.fontSize = "55px";
		title.style.fontFamily = "displayFont";
		title.style.textAlign = "center";

		otherBox.style.width = "100%";
		otherBox.style.height = "50px";
		otherBox.style.margin = "0 auto";
		otherBox.style.marginTop = "20px";

		message.style.width = "100%";
		message.style.lineHeight = "100%";
		message.style.fontFamily = "displayFont";
		message.style.fontSize = "25px";
		message.style.fontWeight = "bold";
		message.style.textAlign = "center";

		messageLink.style.width = "100%";
		messageLink.style.lineHeight = "100%";
		messageLink.style.fontFamily = "displayFont";
		messageLink.style.fontSize = "25px";
		messageLink.style.fontWeight = "bold";
		messageLink.style.textAlign = "center";
		messageLink.style.cursor = "pointer";
		messageLink.style.textDecoration = "none";
		messageLink.href = "mailto:gabriel.moreirasilva450@outlook.com";
		messageLink.target = "blankt"
		
		centralizer.style.width = "100%";
		centralizer.style.height = "550px";
		centralizer.style.margin = "0 auto";
		centralizer.style.padding = "0 1%";
		centralizer.style.paddingTop = "60px";

		container.style.width = "100%";
		container.style.maxWidth = "390px";
		container.style.height = "400px";
		container.style.backgroundImage =
		"linear-gradient(90deg, rgb(20,72,167), rgb(119,159,232), rgb(20,72,167))";
		container.style.borderRadius = "70px";
		container.style.border = "7px solid #372F2F";
		container.style.margin = "0 auto";
		container.style.position = "relative";

		vid.style.width = "100%";
		vid.style.maxWidth = "250px";
		vid.style.position = "absolute";
		vid.style.top = "-151px";
		vid.style.left = "64px";
		// vid.src = "videos/f.mp4";
		vid.style.display = "none";
		vid.controls;

		song.src = "audio/alarm.mp3";
		song.style.display = "none";

		blackLeft.style.width = "100%";
		blackLeft.style.maxWidth = "42px";
		blackLeft.style.height = "280px";
		blackLeft.style.backgroundColor = "black";
		blackLeft.style.borderTopRightRadius = "15px";
		blackLeft.style.borderBottomRightRadius = "15px";
		blackLeft.style.position = "absolute";
		blackLeft.style.top = "55px";
		blackLeft.style.left = "0";
		blackLeft.style.paddingTop = "32px";
		blackLeft.style.paddingRight = "11px";

		txt1_2.style.color = "white";
		txt1_2.style.fontSize = "15px";
		txt1_2.style.width = "100%";
		txt1_2.style.textAlign = "right";
		txt1_2.style.fontFamily = "on_Off";
		txt1_2.style.textTransform = "uppercase";

		buttonStart.style.position = "absolute";
		buttonStart.style.cursor = "pointer";	
		buttonStart.style.top = "70px";
		buttonStart.style.right = "-10px";
		buttonStart.style.width = "100%";
		buttonStart.style.maxWidth = "10px";
		buttonStart.style.height = "45px";
		buttonStart.style.border = "0";
		buttonStart.style.backgroundColor = "red";
		buttonStart.style.zIndex = "24";
		
		customArea.style.width = "100%";
		customArea.style.maxWidth = "260px";
		customArea.style.height = "392px";
		customArea.style.backgroundColor = "hsl(150, 7%, 35%)";
		customArea.style.borderBottomRightRadius = "40px";
		customArea.style.borderBottomLeftRadius = "40px";
		customArea.style.borderRight = "5px solid #7DA08F";
		customArea.style.borderLeft = "5px solid #7DA08F";
		customArea.style.borderTop = "3px solid #7DA08F";
		customArea.style.borderBottom = "5px solid #7DA08F";
		customArea.style.padding = "10px 2%";
		customArea.style.margin = "0 auto";
		customArea.style.marginTop = "-7px";
		customArea.style.position = "relative";

		blackRight.style.width = "100%";
		blackRight.style.maxWidth = "42px";
		blackRight.style.height = "280px";
		blackRight.style.backgroundColor = "black";
		blackRight.style.borderTopLeftRadius = "15px";
		blackRight.style.borderBottomLeftRadius = "15px";
		blackRight.style.position = "absolute";
		blackRight.style.top = "55px";
		blackRight.style.right = "0";
		blackRight.style.paddingTop = "32px";
		blackRight.style.paddingRight = "2px";

		txt2_2.style.color = "white";
		txt2_2.style.fontSize = "15px";
		txt2_2.style.width = "100%";
		txt2_2.style.textAlign = "right";
		txt2_2.style.fontFamily = "on_Off";
		txt2_2.style.textTransform = "uppercase";

		buttonStop.style.position = "absolute";
		buttonStop.style.cursor = "pointer";	
		buttonStop.style.top = "70px";
		buttonStop.style.left = "-10px";
		buttonStop.style.marginLeft = "0px";
		buttonStop.style.width = "100%";
		buttonStop.style.maxWidth = "10px";
		buttonStop.style.height = "45px";
		buttonStop.style.border = "0";
		buttonStop.style.backgroundColor = "red";
		buttonStop.style.zIndex = "24";

		greenOn.style.width = "100%";
		greenOn.style.maxWidth = "110px";
		greenOn.style.paddingRight = "9px";
		greenOn.style.paddingTop = "0px";
		greenOn.style.height = "25px";
		greenOn.style.position  = "relative";

		pgOn.style.color = "black";
		pgOn.style.fontSize = "16px";
		pgOn.style.fontFamily = "on_Off";
		pgOn.style.width = "100%";
		pgOn.style.textAlign = "right";

		killOn.style.width = "100%";
		killOn.style.maxWidth = "20px";
		killOn.style.height = "20px";
		killOn.style.borderRadius = "10px";
		killOn.style.position  = "absolute";
		killOn.style.left = "2px";
		killOn.style.top = "1%";
		killOn.style.zIndex = "30";
	
		on.style.backgroundColor = "green";
		on.style.width = "100%";
		on.style.maxWidth = "20px";
		on.style.height = "20px";
		on.style.borderRadius = "10px";
		on.style.cursor = "pointer";

		redOff.style.width = "100%";
		redOff.style.maxWidth = "93px";
		redOff.style.paddingRight = "9px";
		redOff.style.paddingTop = "2px";
		redOff.style.height = "25px";
		redOff.style.marginBottom = "12px";
		redOff.style.position  = "relative";

		pgOff.style.color = "black";
		pgOff.style.fontSize = "16px";
		pgOff.style.fontFamily = "on_Off";
		pgOff.style.width = "100%";
		pgOff.style.textAlign = "right";

		off.style.backgroundColor = "red";
		off.style.width = "100%";
		off.style.maxWidth = "20px";
		off.style.height = "20px";
		off.style.borderRadius = "10px";
		off.style.position  = "absolute";
		off.style.left = "2px";
		off.style.top = "8%";
		off.style.cursor = "pointer";
		off.style.zIndex = "30";

		glass.style.width = "100%";
		glass.style.maxWidth = "250px";
		glass.style.height = "387px";
		glass.style.backgroundColor = "rgba(0,38,77,0.3)";
		glass.style.position = "absolute";
		glass.style.borderBottomRightRadius = "35px";
		glass.style.borderBottomLeftRadius = "35px";
		glass.style.top = "-3px";
		glass.style.left = "0";
		glass.style.zIndex = "21";

		display.style.width = "100%";
		display.style.maxWidth = "240px";
		display.style.height = "75px";
		display.style.backgroundColor = "hsl(151, 16%, 45%)";
		display.style.borderRadius = "15px";
		display.style.border = "5px solid black";
		display.style.margin = "0 auto";
		display.style.padding = "0 1%";
		display.style.paddingTop = "7%";
		display.style.marginBottom = "25px";
		display.style.textAlign = "center";

		warnings.style.margin = "0 auto";
		warnings.style.fontFamily = "displayFont";
		warnings.style.fontSize = "50px";
		warnings.style.color = "black";

		displayH.style.width = "100%";
		displayH.style.maxWidth = "50px";
		displayH.style.margin = "0 auto";
		displayH.style.fontFamily = "displayFont";
		displayH.style.fontSize = "50px";
		displayH.style.display = "inline-block";
		displayH.style.color = "black";

		sing.style.width = "100%";
		sing.style.maxWidth = "15px";
		sing.style.margin = "0 auto";
		sing.style.fontFamily = "displayFont";
		sing.style.fontSize = "50px";
		sing.style.color = "black";
		sing.style.display = "inline-block";

		displayM.style.width = "100%";
		displayM.style.maxWidth = "50px";
		displayM.style.margin = "0 auto";
		displayM.style.fontFamily = "displayFont";
		displayM.style.fontSize = "50px";
		displayM.style.display = "inline-block";
		displayM.style.color = "black";

		sing2.style.width = "100%";
		sing2.style.maxWidth = "15px";
		sing2.style.margin = "0 auto";
		sing2.style.fontFamily = "displayFont";
		sing2.style.fontSize = "50px";
		sing2.style.color = "black";
		sing2.style.display = "inline-block";

		displayS.style.width = "100%";
		displayS.style.maxWidth = "50px";
		displayS.style.margin = "0 auto";
		displayS.style.fontFamily = "displayFont";
		displayS.style.fontSize = "50px";
		displayS.style.display = "inline-block";
		displayS.style.color = "black";

		selectArea.style.width = "100%";
		selectArea.style.maxWidth = "300px";
		selectArea.style.height = "216px";
		selectArea.style.margin = "0 auto";
		selectArea.style.padding = "5px";
		selectArea.style.paddingTop = "46px";
		selectArea.style.textAlign = "center";
		selectArea.style.position = "relative";

		backSH.style.width = "100%";
		backSH.style.maxWidth = "230px";
		backSH.style.height = "38px";
		backSH.style.borderRadius = "20px";
		backSH.style.margin = "0 auto";
		backSH.style.marginBottom = "15px";

		selectH.style.width = "100%";
		selectH.style.maxWidth = "230px";
		selectH.style.height = "38px";
		selectH.style.borderRadius = "20px";
		selectH.style.fontSize = "20px";
		selectH.style.padding = "4px 0";
		selectH.style.fontFamily = "mainFont";
		selectH.style.margin = "0 auto";
		selectH.style.color = "black";
		selectH.style.backgroundColor = "hsl(151, 16%, 45%)";
		selectH.style.position = "relative";

		extraSHL.style.width = "100%";
		extraSHL.style.maxWidth = "45px";
		extraSHL.style.height = "73px";
		extraSHL.style.marginTop = "-38px";
		extraSHL.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSHL.style.float = "left";
		extraSHL.style.paddingTop = "33px";
		extraSHL.style.borderRadius = "20px";
		extraSHL.style.display = "none";
		extraSHL.style.zIndex = "0";

		extraSHR.style.width = "100%";
		extraSHR.style.maxWidth = "45px";
		extraSHR.style.height = "73px";
		extraSHR.style.paddingLeft = "10px";
		extraSHR.style.marginTop = "-38px";
		extraSHR.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSHR.style.float = "right";
		extraSHR.style.paddingTop = "33px";
		extraSHR.style.borderRadius = "20px";
		extraSHR.style.display = "none";
		extraSHR.style.zIndex = "0";

		buttonHL.style.position = "absolute";
		buttonHL.style.cursor = "pointer";	
		buttonHL.style.top = "1px";
		buttonHL.style.left = "1px";
		buttonHL.style.width = "100%";
		buttonHL.style.maxWidth = "35px";
		buttonHL.style.height = "35px";
		buttonHL.style.border = "0";
		buttonHL.style.backgroundImage = "url(images/arrowL.png)";
		buttonHL.style.backgroundSize = "100% 100%";
		buttonHL.style.paddingTop = "11px";
		buttonHL.style.paddingLeft = "14px";
		buttonHL.style.zIndex = "24";

		lessHL.style.width = "100%";
		lessHL.style.maxWidth = "14px";
		lessHL.style.height = "14px";
		lessHL.style.backgroundSize = "100% 100%";
		lessHL.style.backgroundRepeat = "no-repeat";
		lessHL.style.margin = "0 auto";	
		lessHL.style.backgroundImage = "url(images/lessOff.png)";

		buttonHR.style.position = "absolute";
		buttonHR.style.cursor = "pointer";
		buttonHR.style.top = "1px";
		buttonHR.style.right = "1px";
		buttonHR.style.width = "100%";
		buttonHR.style.maxWidth = "35px";
		buttonHR.style.height = "35px";
		buttonHR.style.border = "0";
		buttonHR.style.backgroundImage = "url(images/arrowR.png)";
		buttonHR.style.backgroundSize = "100% 100%";
		buttonHR.style.paddingTop = "11px";
		buttonHR.style.paddingRight = "14px";
		buttonHR.style.zIndex = "24";

		plusHR.style.width = "100%";
		plusHR.style.maxWidth = "14px";
		plusHR.style.height = "14px";
		plusHR.style.backgroundSize = "100% 100%";
		plusHR.style.backgroundRepeat = "no-repeat";
		plusHR.style.margin = "0 auto";
		plusHR.style.backgroundImage = "url(images/plusOff.png)";

		backSM.style.width = "100%";
		backSM.style.maxWidth = "230px";
		backSM.style.height = "38px";
		backSM.style.borderRadius = "20px";
		backSM.style.margin = "0 auto";
		backSM.style.marginBottom = "15px";

		selectM.style.width = "100%";
		selectM.style.maxWidth = "230px";
		selectM.style.height = "38px";
		selectM.style.borderRadius = "20px";
		selectM.style.fontSize = "20px";
		selectM.style.fontFamily = "mainFont";
		selectM.style.margin = "0 auto";
		selectM.style.padding = "4px 0";
		selectM.style.color = "black";
		selectM.style.backgroundColor = "hsl(151, 16%, 45%)";
		selectM.style.position = "relative";

		extraSML.style.width = "100%";
		extraSML.style.maxWidth = "45px";
		extraSML.style.height = "73px";
		extraSML.style.marginTop = "-38px";
		extraSML.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSML.style.float = "left";
		extraSML.style.paddingTop = "33px";
		extraSML.style.borderRadius = "20px";
		extraSML.style.display = "none";
		extraSML.style.zIndex = "0";

		extraSMR.style.width = "100%";
		extraSMR.style.maxWidth = "45px";
		extraSMR.style.height = "73px";
		extraSMR.style.paddingLeft = "10px";
		extraSMR.style.marginTop = "-38px";
		extraSMR.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSMR.style.float = "right";
		extraSMR.style.paddingTop = "33px";
		extraSMR.style.borderRadius = "20px";
		extraSMR.style.display = "none";
		extraSMR.style.zIndex = "0";

		buttonML.style.position = "absolute";
		buttonML.style.cursor = "pointer";
		buttonML.style.top = "1px";
		buttonML.style.left = "1px";
		buttonML.style.width = "100%";
		buttonML.style.maxWidth = "35px";
		buttonML.style.height = "35px";
		buttonML.style.border = "0";
		buttonML.style.backgroundImage = "url(images/arrowL.png)";
		buttonML.style.backgroundSize = "100% 100%";
		buttonML.style.paddingTop = "11px";
		buttonML.style.paddingLeft = "14px";
		buttonML.style.zIndex = "24";

		lessML.style.width = "100%";
		lessML.style.maxWidth = "14px";
		lessML.style.height = "14px";
		lessML.style.backgroundSize = "100% 100%";
		lessML.style.backgroundRepeat = "no-repeat";
		lessML.style.margin = "0 auto";	
		lessML.style.backgroundImage = "url(images/lessOff.png)";

		buttonMR.style.position = "absolute";
		buttonMR.style.cursor = "pointer";
		buttonMR.style.top = "1px";
		buttonMR.style.right = "1px";
		buttonMR.style.width = "100%";
		buttonMR.style.maxWidth = "35px";
		buttonMR.style.height = "35px";
		buttonMR.style.border = "0";
		buttonMR.style.backgroundImage = "url(images/arrowR.png)";
		buttonMR.style.backgroundSize = "100% 100%";
		buttonMR.style.paddingTop = "11px";
		buttonMR.style.paddingRight = "14px";
		buttonMR.style.zIndex = "24";

		plusMR.style.width = "100%";
		plusMR.style.maxWidth = "14px";
		plusMR.style.height = "14px";
		plusMR.style.backgroundSize = "100% 100%";
		plusMR.style.backgroundRepeat = "no-repeat";
		plusMR.style.margin = "0 auto";
		plusMR.style.backgroundImage = "url(images/plusOff.png)";

		backSS.style.width = "100%";
		backSS.style.maxWidth = "230px";
		backSS.style.height = "38px";
		backSS.style.borderRadius = "20px";
		backSS.style.margin = "0 auto";
		backSS.style.marginBottom = "15px";

		selectS.style.width = "100%";
		selectS.style.maxWidth = "230px";
		selectS.style.height = "38px";
		selectS.style.fontSize = "20px";
		selectS.style.borderRadius = "20px";
		selectS.style.padding = "4px 0";
		selectS.style.fontFamily = "mainFont";
		selectS.style.margin = "0 auto";
		selectS.style.color = "black";
		selectS.style.backgroundColor = "hsl(151, 16%, 45%)";
		selectS.style.position = "relative";

		extraSSL.style.width = "100%";
		extraSSL.style.maxWidth = "45px";
		extraSSL.style.height = "73px";
		extraSSL.style.marginTop = "-38px";
		extraSSL.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSSL.style.float = "left";
		extraSSL.style.paddingTop = "33px";
		extraSSL.style.borderRadius = "20px";
		extraSSL.style.display = "none";
		extraSSL.style.zIndex = "0";

		extraSSR.style.width = "100%";
		extraSSR.style.maxWidth = "45px";
		extraSSR.style.height = "73px";
		extraSSR.style.paddingLeft = "10px";
		extraSSR.style.marginTop = "-38px";
		extraSSR.style.backgroundColor = "hsl(151, 16%, 45%)";
		extraSSR.style.float = "right";
		extraSSR.style.paddingTop = "33px";
		extraSSR.style.borderRadius = "20px";
		extraSSR.style.display = "none";
		extraSSR.style.zIndex = "0";
		
		buttonSL.style.position = "absolute";
		buttonSL.style.cursor = "pointer";
		buttonSL.style.top = "1px";
		buttonSL.style.left = "1px";
		buttonSL.style.width = "100%";
		buttonSL.style.maxWidth = "35px";
		buttonSL.style.height = "35px";
		buttonSL.style.border = "0";
		buttonSL.style.backgroundImage = "url(images/arrowL.png)";
		buttonSL.style.backgroundSize = "100% 100%";
		buttonSL.style.paddingTop = "11px";
		buttonSL.style.paddingLeft = "14px";
		buttonSL.style.zIndex = "24";

		lessSL.style.width = "100%";
		lessSL.style.maxWidth = "14px";
		lessSL.style.height = "14px";
		lessSL.style.backgroundSize = "100% 100%";
		lessSL.style.backgroundRepeat = "no-repeat";
		lessSL.style.margin = "0 auto";
		lessSL.style.backgroundImage = "url(images/lessOff.png)";
		
		buttonSR.style.position = "absolute";
		buttonSR.style.cursor = "pointer";
		buttonSR.style.top = "1px";
		buttonSR.style.right = "1px";
		buttonSR.style.width = "100%";
		buttonSR.style.maxWidth = "35px";
		buttonSR.style.height = "35px";
		buttonSR.style.border = "0";
		buttonSR.style.backgroundImage = "url(images/arrowR.png)";
		buttonSR.style.backgroundSize = "100% 100%";
		buttonSR.style.paddingTop = "11px";
		buttonSR.style.paddingRight = "14px";
		buttonSR.style.zIndex = "24";

		plusSR.style.width = "100%";
		plusSR.style.maxWidth = "14px";
		plusSR.style.height = "14px";
		plusSR.style.backgroundSize = "100% 100%";
		plusSR.style.backgroundRepeat = "no-repeat";
		plusSR.style.margin = "0 auto";
		plusSR.style.backgroundImage = "url(images/plusOff.png)";
	})();

	//RESPONSIVE DESING
	function responsive(){
		let width = window.innerWidth || document.documentElement.clientWidth
		|| document.body.clientWidth;
		if(width <= 386 && width >= 348){
			//SELECT HOURS
			backSH.style.marginTop = "-66px";
			backSH.style.marginBottom = "39px";
			extraSHL.style.display = "block";
			extraSHL.appendChild(buttonHL);
			buttonHL.style.position = "relative";

			extraSHR.style.display = "block";	
			extraSHR.appendChild(buttonHR);
			buttonHR.style.position = "relative";

			//SELECT MINUTES
			backSM.style.marginBottom = "39px";
			extraSML.style.display = "block";
			extraSML.appendChild(buttonML);
			buttonML.style.position = "relative";

			extraSMR.style.display = "block";	
			extraSMR.appendChild(buttonMR);
			buttonMR.style.position = "relative";

			//SELECT SECONDS
			extraSSL.style.display = "block";
			extraSSL.appendChild(buttonSL);
			buttonSL.style.position = "relative";

			extraSSR.style.display = "block";	
			extraSSR.appendChild(buttonSR);
			buttonSR.style.position = "relative";

			//MAIN
			customArea.style.maxWidth = "220px";
		}else if(width <= 348 && width >= 322){
			//MESSAGES
			displayH.style.fontSize = "40px";
			displayH.style.maxWidth = "40px";
			displayM.style.fontSize = "40px";
			displayM.style.maxWidth = "40px";
			displayS.style.fontSize = "40px";
			displayS.style.maxWidth = "40px";
			display.style.padding = "13px 1%";
			sing.style.maxWidth = "10px";
			sing.style.fontSize = "40px";
			sing2.style.maxWidth = "10px";
			sing2.style.fontSize = "40px";
			warnings.style.fontSize = "40px";

			//MAIN
			customArea.style.maxWidth = "195px";
		}else if(width <= 322 && width >= 310){
			//MESSAGES
			displayH.style.fontSize = "30px";
			displayH.style.maxWidth = "30px";
			displayM.style.fontSize = "30px";
			displayM.style.maxWidth = "30px";
			displayS.style.fontSize = "30px";
			displayS.style.maxWidth = "30px";
			display.style.padding = "17px 1%";
			sing.style.maxWidth = "10px";
			sing.style.fontSize = "30px";
			sing2.style.maxWidth = "10px";
			sing2.style.fontSize = "30px";
			warnings.style.fontSize = "40px";

			//MAIN
			customArea.style.maxWidth = "180px";
		}else if(width <= 310){
			//SELECT HOURS
			backSH.style.marginTop = "-66px";
			backSH.style.marginBottom = "39px";
			extraSHL.style.display = "block";
			extraSHL.appendChild(buttonHL);
			buttonHL.style.position = "relative";

			extraSHR.style.display = "block";	
			extraSHR.appendChild(buttonHR);
			buttonHR.style.position = "relative";

			//SELECT MINUTES
			backSM.style.marginBottom = "39px";
			extraSML.style.display = "block";
			extraSML.appendChild(buttonML);
			buttonML.style.position = "relative";

			extraSMR.style.display = "block";	
			extraSMR.appendChild(buttonMR);
			buttonMR.style.position = "relative";

			//SELECT SECONDS
			extraSSL.style.display = "block";
			extraSSL.appendChild(buttonSL);
			buttonSL.style.position = "relative";

			extraSSR.style.display = "block";	
			extraSSR.appendChild(buttonSR);
			buttonSR.style.position = "relative";

			//MESSAGES
			displayH.style.fontSize = "30px";
			displayH.style.maxWidth = "30px";
			displayM.style.fontSize = "30px";
			displayM.style.maxWidth = "30px";
			displayS.style.fontSize = "30px";
			displayS.style.maxWidth = "30px";
			display.style.padding = "17px 1%";
			sing.style.maxWidth = "10px";
			sing.style.fontSize = "30px";
			sing2.style.maxWidth = "10px";
			sing2.style.fontSize = "30px";
			warnings.style.fontSize = "30px";

			//MAIN
			customArea.style.maxWidth = "160px";
		}else{
			//SELECT HOURS
			backSH.style.marginTop = "0";
			backSH.style.marginBottom = "15px";
			extraSHL.style.display = "none";
			selectH.appendChild(buttonHL);
			buttonHL.style.position = "absolute";
			extraSHR.style.display = "none";
			selectH.appendChild(buttonHR);
			buttonHR.style.position = "absolute";

			//SELECT MINUTES
			backSM.style.marginBottom = "15px";
			extraSML.style.display = "none";
			selectM.appendChild(buttonML);
			buttonML.style.position = "absolute";
			extraSMR.style.display = "none";
			selectM.appendChild(buttonMR);
			buttonMR.style.position = "absolute";

			//SELECT SECONDS
			extraSSL.style.display = "none";
			selectS.appendChild(buttonSL);
			buttonSL.style.position = "absolute";
			extraSSR.style.display = "none";
			selectS.appendChild(buttonSR);
			buttonSR.style.position = "absolute";

			//MESSAGES
			displayH.style.fontSize = "50px";
			displayH.style.maxWidth = "50px";
			displayM.style.fontSize = "50px";
			displayM.style.maxWidth = "50px";
			displayS.style.fontSize = "50px";
			displayS.style.maxWidth = "50px";
			display.style.padding = "8px 1%";
			sing.style.maxWidth = "15px";
			sing.style.fontSize = "50px";
			sing2.style.maxWidth = "15px";
			sing2.style.fontSize = "50px";
			warnings.style.fontSize = "50px";

			//MAIN
			customArea.style.maxWidth = "260px";
		}
	}
	responsive();
	window.addEventListener("resize", responsive);

	//MESSAGES SYSTEM
	(function(){
		let timer = 0;
		setInterval(function(){		
			timer++;
			if(timer >= 0 && timer <= 3){
				messageLink.style.display = "none";
				message.style.display = "block";
				message.innerHTML = "Any problem?";
			}else if(timer >= 3 && timer <= 6 ){
				message.innerHTML = "Let me know!";
			}else if (timer >= 6 && timer <= 10){
				message.style.display = "none";
				messageLink.style.display = "block";
				messageLink.innerHTML = "Click here to send me a message!";
			}else{
				timer = 0;
			}
		},1000);
	})();
		
	//THE SELECTOR SYSTEM
	//HOURS
	let hours = "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20," +
	"21,22,23,24,00";
	let splitH;
	let iH = 0;

	let addHou = () => {	
		iH++;
		splitH = hours.split(",");
		splitH[iH];
		if(iH == 26){
			iH--;
		}
		return splitH[iH];	
	}

	let decreaseHou = () => {
		iH--;
		splitH = hours.split(",");
		splitH[iH];
		if(iH == -1){
			iH++;
		}
		return splitH[iH];
	}

	//HOUR'S BUTTONS
	function adH(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayH.innerHTML = addHou();
	}
	function deH(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayH.innerHTML = decreaseHou();
	}
	
	//MINUTES
	let minutes = "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20," +
	"21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50," +
	"51,52,53,54,55,56,57,58,59,00";
	let splitM;
	let iM = 0;
	
	let addMin = () => {
		iM++;
		splitM = minutes.split(",");
		splitM[iM];
		if(iM == 61){
			iM--;
		}
		return splitM[iM];
	}

	let decreaseMin = () => {
		iM--;
		splitM = minutes.split(",");
		splitM[iM];
		if(iM == -1){
			iM++;
		}
		return splitM[iM];
	}

	//MINUTE'S BUTTONS
	function deM(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayM.innerHTML = decreaseMin();	
	}
	function adM(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayM.innerHTML = addMin();	
	}

	//SECONDS
	let seconds = "00,00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20," +
	"21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50," +
	"51,52,53,54,55,56,57,58,59,00";
	let splitS;
	let iS = 0;

	let addSec = () => {
		iS++;
		splitS = seconds.split(",");
		splitS[iS];
		if(iS == 62){
			iS--;
		}
		return splitS[iS];
	}

	let decreaseSec = () => {
		iS--;
		splitS = seconds.split(",");
		splitS[iS];
		if(iS == 0){
			iS++;
		}
		return splitS[iS];
	}

	//SECOND'S BUTTONS
	function adS(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayS.innerHTML = addSec();
	}
	function deS(){
		clearInterval(start);
		buttonStart.addEventListener('click', buStart);	
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayS.innerHTML = decreaseSec();
	}

	//TURN ON SYSTEM
	on.addEventListener('click',function(){
		clearInterval(start);
		iH = 0;
		iM = 0;
		iS = 0;	
		vid.pause();
		song.pause();
	});
	
	killOn.addEventListener('click', function(){
		let date = new Date();
		let time = date.getHours();
		warnings.innerHTML = "";
		displayH.style.display = "inline-block";
		displayM.style.display = "inline-block";
		displayS.style.display = "inline-block";
		sing.style.display = "inline-block";
		sing2.style.display = "inline-block";
		displayS.innerHTML = addSec();
		displayH.innerHTML = "00";
		displayM.innerHTML = "00";
		sing.innerHTML = ":";
		sing2.innerHTML = ":";
		if(time >= 18 || time <= 5){
			pgOn.style.color = "hsl(120, 100%, 40%)";
			pgOff.style.color = "hsl(120, 100%, 40%)";
			displayH.style.color = "hsl(120, 100%, 40%)";
			displayM.style.color = "hsl(120, 100%, 40%)";
			displayS.style.color = "hsl(120, 100%, 40%)";
			selectH.style.color = "hsl(120, 100%, 40%)";
			selectM.style.color = "hsl(120, 100%, 40%)";
			selectS.style.color = "hsl(120, 100%, 40%)";
			warnings.style.color = "hsl(120, 100%, 40%)";
			lessHL.style.backgroundImage = "url(images/lOn.png)";
			plusHR.style.backgroundImage = "url(images/pOn.png)";
			lessML.style.backgroundImage = "url(images/lOn.png)";
			plusMR.style.backgroundImage = "url(images/pOn.png)";
			lessSL.style.backgroundImage = "url(images/lOn.png)";
			plusSR.style.backgroundImage = "url(images/pOn.png)";
			sing.style.color = "hsl(120, 100%, 40%)";
			sing2.style.color = "hsl(120, 100%, 40%)";
		}
		buttonHR.addEventListener('click', adH);
		buttonHL.addEventListener('click', deH);
		buttonML.addEventListener('click', deM);
		buttonMR.addEventListener('click', adM);
		buttonSR.addEventListener('click', adS);
		buttonSL.addEventListener('click', deS);
		buttonStart.addEventListener('click', buStart);
		buttonStop.addEventListener('click', buStop);
	});

	//COUNTDOWN SYSTEM
	let start;

	function buStart(){	
		if(iH == 0 && iM == 0 && iS == 1){
			clearInterval(start);
			warnings.innerHTML = "NO INFO.";
			displayH.style.display = "none";
			displayM.style.display = "none";
			displayS.style.display = "none";
			sing.style.display = "none";
			sing2.style.display = "none";
		}else{
			start = setInterval(() => {
				iS--;

				if(iM == 0 && iS == 0 && iH > 0){
					iH--;
					iM = 59;
					iS = 60;
					displayM.innerHTML = addMin();
					displayM.innerHTML = decreaseMin();
					displayH.innerHTML = splitH[iH];
					displayM.innerHTML = splitM[iM];
				}
				if(iS == 0 && iM > 0){
					iM--;
					iS = 60;
					displayM.innerHTML = splitM[iM];
				}
				displayS.innerHTML = splitS[iS];

				if(iH == 0 && iM == 0 && iS == 1){
					warnings.innerHTML = "It's over!";
					displayH.style.display = "none";
					displayM.style.display = "none";
					displayS.style.display = "none";
					sing.style.display = "none";
					sing2.style.display = "none";
					// vid.style.display = "block";
					// vid.load()
					// vid.play();
					clearInterval(start);
					song.load();
					song.play(3000);
					buttonStart.removeEventListener('click', buStart);
					buttonHR.removeEventListener('click', adH);
					buttonHL.removeEventListener('click', deH);
					buttonML.removeEventListener('click', deM);
					buttonMR.removeEventListener('click', adM);
					buttonSR.removeEventListener('click', adS);
					buttonSL.removeEventListener('click', deS);
				}
			},1000);
		}

		if(iH != 0 || iM != 0 || iS != 0 || iH == 0 || iM == 0 || iS == 1){
			buttonStart.removeEventListener('click', buStart);
		}
	}

	function buStop(){
		clearInterval(start);
		vid.pause();
		song.pause();
		buttonStart.addEventListener('click', buStart);
		buttonHR.addEventListener('click', adH);
		buttonHL.addEventListener('click', deH);
		buttonML.addEventListener('click', deM);
		buttonMR.addEventListener('click', adM);
		buttonSR.addEventListener('click', adS);
		buttonSL.addEventListener('click', deS);
	}

	off.addEventListener('click', function(){
		clearInterval(start);
		vid.pause();
		song.pause();
		buttonStop.removeEventListener('click', buStop);
		buttonStart.removeEventListener('click', buStart);
		buttonSR.removeEventListener('click', adS);
		buttonSL.removeEventListener('click', deS);
		buttonMR.removeEventListener('click', adM);
		buttonML.removeEventListener('click', deM);
		buttonHR.removeEventListener('click', adH);
		buttonHL.removeEventListener('click', deH);
		displayS.innerHTML = "";
		displayH.innerHTML = "";
		displayM.innerHTML = "";
		vid.style.display = "none";
		sing.innerHTML = "";
		sing2.innerHTML = "";
		warnings.innerHTML = "";
		pgOn.style.color = "black";
		pgOff.style.color = "black";
		selectH.style.color = "black";
		selectM.style.color = "black";
		selectS.style.color = "black";
		lessHL.style.backgroundImage = "url(images/lessOff.png)";
		plusHR.style.backgroundImage = "url(images/plusOff.png)";
		lessML.style.backgroundImage = "url(images/lessOff.png)";
		plusMR.style.backgroundImage = "url(images/plusOff.png)";
		lessSL.style.backgroundImage = "url(images/lessOff.png)";
		plusSR.style.backgroundImage = "url(images/plusOff.png)";
		iH = 0;
		iM = 0;
		iS = 0;	
	});		
}
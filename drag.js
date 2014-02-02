var startx = 0;
var starty = 0;
var dragging = 0;

var key = { 1: ['あ','い','う','え','お'],
            2: ['か','き','く','け','こ'],
            3: ['さ','し','す','せ','そ'],
            4: ['た','ち','つ','て','と'],
            5: ['な','に','ぬ','ね','の'],
            6: ['は','ひ','ふ','へ','ほ'],
            7: ['ま','み','む','め','も'],
            8: ['や','ゐ','ゆ','ゑ','よ'],
            9: ['ら','り','る','れ','ろ'],
            10: ['＼(^o^)／','','','',''],
            11: ['わ','を','ん','',''],
            12: ['、','。','？','！',''],
          };


function loaded(){
	console.log("Hello world");
	for (var i in key) {
	console.log( i + " " + key[i]);
	
	
	var element = document.getElementById(i);
	element.ondragstart = function (event){
		console.log(" start: " + event.x + " , " + event.y);
		startx = event.x;
		starty = event.y;
	};
	element.onmousedown = function (event){
		dragging = 1;
	};
	element.onmouseup = function (event){
		if(dragging == 1){
			console.log(" end: " + event.target.id);
			var input = key[event.target.id][0];
			console.log(input);
			var txt = document.getElementById('text');
			txt.value += input;
		}
		dragging = 0;
	};
	element.ondrag = function (event){
		if(dragging == 0){
			return;
		}
		var id_name = event.target.id;
		var dx = event.x - startx;
		var dy = event.y - starty;
		//console.log(" drag: " + id_name + "  (" + dx + "," + dy + ") ");
		var direction = 0;
		if(5 < dx){
			direction = 1;
		}else if( dx < -5){
			direction = 2;
		}else if( 5 < dy){
			direction = 3;
		}else if( dy < -5){
			direction = 4;
		}else{
			return;
		}
		var input = '';
		if( direction == 1){
			input = key[id_name][3];
			console.log(" right ");
		}else if( direction == 2){
			input = key[id_name][1];
			console.log(" left ");
		}else if( direction == 3){ 
			input = key[id_name][4];
			console.log(" down ");
		}else if( direction == 4){ 
			input = key[id_name][2];
			console.log(" up ");
		}
		console.log(input);
		var txt = document.getElementById('text');
		txt.value += input;
		dragging = 0;
	};
	}
}

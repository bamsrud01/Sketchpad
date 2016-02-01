$(document).ready(function() {
	createGrid(16);
	$('.box').mouseenter(function() {
		$(this).css('background',  'blue');
	});
	
	$('#choosesize').click(function() {
		changeSize();
		$('.box').mouseenter(function() {
			$(this).css('background', activeColor);
		});
	});
	
	$('#blue').click(function() {
		activeColor = 'blue';
		wipe();
		$('.box').unbind();
		$('.box').mouseenter(function() {
			$(this).css('background', 'blue');
		});
	});
	
	$('#red').click(function() {
		activeColor = 'red';
		wipe();
		$('.box').unbind();
		$('.box').mouseenter(function() {
			$(this).css('background', 'red');
		});
	});
	
	$('#random').click(function() {
		activeColor = randomColor();
		wipe();
		$('.box').unbind();
		$('.box').mouseenter(function() {
			$(this).css('background', randomColor());
		});
	});
	
	$('#trail').click(function() {
		activeColor = 'blue';
		wipe();
		$('.box').unbind();
		$('.box').css('background', 'black');
		$('.box').mouseenter(function() {
			$(this).css("opacity", "0");
			$(this).mouseleave(function() {
				$(this).fadeTo("slow", 1);
			});
		});
	});
	
	$('#black').click(function() {
		activeColor = 'black';
		wipe();
		$('.box').unbind();
		$('.box').css('background', 'black');
		$('.box').mouseenter(function() {
			$(this).css('background', drawGradient($(this)));
		});
		
	});
	
	$('#redshade').click(function() {
		activeColor = 'red';
		wipe();
		$('.box').unbind();
		$('.box').css('background', 'red');
		$('.box').mouseenter(function() {
			$(this).css('background', drawGradient($(this)));
		});
		
	});
	
	$('#blueshade').click(function() {
		activeColor = 'blue';
		wipe();
		$('.box').unbind();
		$('.box').css('background', 'blue');
		$('.box').mouseenter(function() {
			$(this).css('background', drawGradient($(this)));
		});
		
	});
	
});


/*The 'activeColor' variable keeps the color choice from reverting to blue when the grid size is changed.  See the click function for the '#choosesize' button, on line 7.*/
var activeColor = 'blue';


function createGrid(num) {
	var size = 960;
	var boxSize = (Math.floor(960 / num) - 2);
	var newsquare = $('#grid').html("");
	
	for (a = 0; a < num; a ++) {
		for (b = 0; b < num; b ++){
			newsquare.append( $('<div></div>').addClass('box').height(boxSize).width(boxSize));
		}
		newsquare.append($("<div></div>").css("clear", "both"));
	}
};

function wipe() {
	$('.box').css('background', 'white').css('opacity', '1');
};

function randomColor() {
  var r = function() { return Math.floor(Math.random()*256) };
  return "rgb(" + r() + "," + r() + "," + r() + ")";
};

function drawGradient(box) {
	var opacity = box.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { box.css('opacity', nextOpacity); }
	else { box.css('opacity', '0'); }
};	

function shadesBlue() {
	
};

function shadesRed() {
	
};

function changeSize() {
	var num = prompt("Please choose the size of the grid:");
	createGrid(num);
};

$('button').hover( function() {
	$(this).addClass('hoverButton');
}, function() {
	$(this).removeClass('hoverButton');
});
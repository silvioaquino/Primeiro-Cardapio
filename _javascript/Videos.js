<script>
	var modal = document.getElementById('myModal');
	var vid = document.getElementById("myVideo");

	function AbreVideo(){
		modal.style.display = "block";
		vid.play();
	}
	
	function FechaVideo()
	{
		vid.pause();
		modal.style.display = "none";
	
	}
</script>

<script type="text/javascript"> function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=650px' + w + ', height=450px' + h + ', top=100%' + ', left=' + left);
}
</script>
var placeholderSupport = "placeholder" in document.createElement("input");
if (!placeholderSupport) {
  $.fn.placeholder = function(){
   $(this).each(function(){
    var text = $(this).attr('placeholder');
    $(this).val(text);
    $(this).click(function(){
	 var text = $(this).attr('placeholder');
	 if ($(this).val()==text) {
	  $(this).val("");
	 }
	 });
    $(this).blur(function(){
	 var text = $(this).attr('placeholder');
	 if ($(this).val()=="") {
	  $(this).val(text);
	 }
    });
   });
   $('form').submit(function(){
    $this = $(this);
    $(this).find("[placeholder]").each(function(){
	 var text = $(this).attr('placeholder');
	 if ($(this).val()==text) {
	  $(this).val("");
	 }
    });
    setTimeout(function(){
	 $this.find("[placeholder]").each(function(){
	  var text = $(this).attr('placeholder');
	  if ($(this).val()=="") {
	   $(this).val(text);
	  }
	 });
    }, 1000);
   });
  };
  $('[placeholder]').placeholder();
}
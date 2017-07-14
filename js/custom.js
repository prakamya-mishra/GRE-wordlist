$(document).ready(function() {
    $.getJSON("wordlist.json",function(data) {
    var worddata = '';
      worddata += '<tbody>';
      var n = 1;
      $.each(data, function(key, value) {
        worddata += '<tr>';
        worddata += '<td class="active">'+n+'</td>';
        worddata += '<td class="success">'+value.FIELD1+'</td>';
        worddata += '<td class="success">'+value.FIELD2+'</td>';
        worddata += '</tr>';
        n +=1;
      });
      worddata += '</tbody>';
      $('#words').append(worddata);
    });
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
} else {
    document.getElementById("myBtn").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Chrome, Safari and Opera
document.documentElement.scrollTop = 0; // For IE and Firefox
}

document.addEventListener('DOMContentLoaded', function() {
    var buttonXPATH = document.getElementById('grab-xpath');
    var textboxXPATH = document.getElementById('xpath');
  
    buttonXPATH.addEventListener('click', function() {
        var content = textboxXPATH.value;
        window.alert("HALLO");
      });
});
  
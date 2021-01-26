$(document).ready(function(){
    //Get from the content of index page
    LoadDMFile('index');
    //Enable the click on each tab.
    var artList = ["about", "gallery", "collection", "misc"];
    artList.forEach( function(mkname){
        $("#"+mkname).click(function() {
          LoadDMFile(mkname);
          $("html, body").animate({ scrollTop: $("#showarticle").offset().top }, "fast"); 
        });
      }
    );
});

// function of loading markdown file into the showarticle section of the page.
function LoadDMFile(sName){
    htmlobj=$.ajax({url:"post/"+sName+".md",async:false});
    var converter = new showdown.Converter();
    var text = htmlobj.responseText; 
    var bhtml = converter.makeHtml(text);
    $("#showarticle").html(bhtml);
}

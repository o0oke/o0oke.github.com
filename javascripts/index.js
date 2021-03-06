$(document).ready(function(){
    //Get from the content of index page
    LoadDMFile('index');
    //Enable the click on each tab.
    var artList = ["about", "gallery", "collection", "misc"];
    artList.forEach( function(mkname){
        $("#"+mkname).click(function() {
          LoadDMFile(mkname);
        });
      }
    );
});

// function of loading markdown file into the showarticle section of the page.
function LoadDMFile(sName){
    htmlobj=$.ajax({url:"post/"+sName+".md",async:false});
    listobj=$.ajax({url:"post/"+sName+"_list.md",async:false});
    var converter = new showdown.Converter();
    var text = htmlobj.responseText; 
    var listtext = listobj.responseText; 
    var bhtml = converter.makeHtml(text);
    var listhtml = converter.makeHtml(listtext);
    $("#showarticle").html(bhtml);
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    $("#artlist").html(listhtml);
    $("html, body").animate({ scrollTop: $("#header") }, "slow"); 
}

$(document).ready(function(){
    //Get from the init folder for welcome or something you want show to user in index page
    LoadDMFile('index');
    //begins to update left list of the articles
    //can read from a single js file for article list array only.
    //ToDo: Dynamic update according to the *.md file list under post folder.
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
    var converter = new showdown.Converter();
    var text = htmlobj.responseText; 
    var bhtml = converter.makeHtml(text);
    $("#showarticle").html(bhtml);
    $('html, body').animate({ scrollTop: 0 }, 0);
}

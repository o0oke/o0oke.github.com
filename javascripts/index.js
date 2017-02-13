   
$(document).ready(function(){
    //Get from the init folder for welcome or something you want show to user in index page
    LoadDMFile('index');
    //begins to update left list of the articles
    //can read from a single js file for article list array only.
    //ToDo: Dynamic update according to the *.md file list under post folder.
    var table1 = document.getElementById('artlist');
    
    $("#about").click( function(){
      LoadDMFile("about");
    });
    $("#gallery").click( function(){
      LoadDMFile("gallery");
    });
    $("#article").click( function(){
      LoadDMFile("article");
    });
    var title=
    [
        "Test Some MarkDown Code",
        "Some Code For Check",
        "Early Childhood Education",
    ];
    var ahtml_list = "";
    
    for( n=0; n<title.length;n++ )
    {
      var titlestring = title[n].replace(/ /g, "_");
      ahtml_list += "<a id=\""+titlestring+"\" href=\"#"+titlestring+"\">"+title[n]+"</a><br>";
    }
   // ahtml_list = ahtml_list + "</ol>";
    $("#artlist").html(ahtml_list);

    //by now. all the artical and links ready, begin to enable click and show MD files.
    var linklist = table1.getElementsByTagName('a');
    for (i=0; i<linklist.length; i++) {
        var sarticle = linklist[i].id;
        $("#"+sarticle).click(function(){
          LoadDMFile(this.id); 
          }
        );
    }

});

// function of loading markdown file into the showarticle section of the page.
function LoadDMFile(sName){
    htmlobj=$.ajax({url:"post/"+sName+".md",async:false});
    var converter = new showdown.Converter();
    var text = htmlobj.responseText; 
    var html = converter.makeHtml(text);
    $("#showarticle").html(html);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}


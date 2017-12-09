$(document).ready(function(){
    $("ul#field-param li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#field-param li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#field-param li.active").removeClass("active");
            $("ul#field-param li:nth-child("+nthChild+")").addClass("active");
        }
    });
});

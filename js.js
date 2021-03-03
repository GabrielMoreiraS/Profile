var black = 0;
var info;
$('[data-button]').each(function(i){
    $(this).click(()=>{
        $('[data-button]').css("border","none");
        $(this).css("border","3px solid black");
        black = i;
        info = $(this).attr("target");
        $(".topics").css("display","none");
        $("#"+info).css("display","block");
    }).mouseover(()=>{
        $('[data-button]').css("border","none");
        $('[data-button]').eq(black).css("border","3px solid black");
        if(black != i)
            $(this).css("border","3px solid rgb(179, 177, 177, 0.5)");
    }).mouseout(()=>{
        if(black != i)
            $('[data-button]').eq(i).css("border","none");
    });
});
//Jquery is insane \o/!
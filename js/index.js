$(document).ready(function(){
	$(".slides").poposlides();
	
	$(".con2 .noactive2:eq(1)").css({"width":"900px"});
	$(".con2 .noactive2:eq(1)").find("span.overlay").css({"display":"none"});
	$(".con2 .noactive2:eq(1)").find(".con_con").css({"display":"block"});
	$(".con2 .noactive2:eq(1)").find("img").css({"height":"430px"}); 
	$(".con2 .noactive2").mouseover(function(){
		$(this).stop().find(".con_con").fadeIn(100);
		$(this).find("span.overlay").fadeOut(100);
		$(this).stop().siblings().find("span.overlay").fadeIn(100);
		$(this).stop().animate({"width":"900px"}, 500);
    	$(this).siblings().stop().animate({"width":"150px"}, 500);
    	$(this).find("img").stop().animate({"height":"430px"},400); 
	}).mouseout(function(){
		$(this).stop().find(".con_con").fadeIn(100);
		$(this).stop().siblings().find(".con_con").fadeOut(100);
		$(this).stop().find("span.overlay").fadeOut(100);
		$(this).stop().siblings().find("span.overlay").fadeIn(100);
		$(this).stop().animate({"width":"900px"}, 500);
    	$(this).siblings().stop().animate({"width":"150px"}, 500);
    	$(this).siblings().find("img").stop().animate({"height":"100%"},400); 
	});

    $(".con4 li").mouseover(function(){
        $(this).find("img").css({"opacity":"0.9"}); 
        $(this).find(".btn-dnld").css({"background-image":"url(images/download2.png)"}); 
    }).mouseout(function(){
        $(this).find("img").css({"opacity":"1"}); 
        $(this).find(".btn-dnld").css({"background-image":"url(images/download.png)"}); 
    });

    register();
    login();
    
    $("input[name=myName]").attr("onblur","checkName()");

    
    /*目标管理*/
    $(".con5 .btn").click(function(){
          $("<div class='mask'></div>").appendTo($("body"));
          var maskWidth=$(document).width();//获取当前文档页面的宽度
          var maskHeight=$(document).height();//获取当前文档页面的高度
          $(".mask").css({
            "position":"absolute",
            "left":0,
            "top":0,
            "width":maskWidth,
            "height":maskHeight,
            "background":"#000",
            "opacity":0.4,
            "z-index":1
          })
          $(".aim").show();
    })
    $(".close").click(function(){
        $(".aim").hide();
        $(".mask").remove();
    })

    changeColor();
    $("input[value='增加']").bind("click",function(){
          var inputVal=[];
          $("tr:last").find("input").not("[value='增加']").each(function(){
            inputVal.push($(this).val());
          })

          var tdLen=$("tr:first td").length;
          var tdText="";
          for(i=0;i<tdLen-1;i++){
            tdText+="<td>"+inputVal[i]+"</td>";
          }

          var tdBtn=$("<td></td>");
          $("tr:eq(1)").find("input").each(function(){
            tdBtn.append($(this).clone(true)).append(" ");
          })

          $("<tr></tr>").append(tdText).append(tdBtn).insertBefore($("tr:last"));

          $("tr:last").find("input").not(":last").each(function(){
            $(this).val("");
          })
          changeColor();   
    }) 
    $("input[value='查看']").click(function(){
        //添加遮罩层
        $("<div class='mask2'></div>").appendTo($("body"));
        var maskWidth=$(document).width();//获取当前文档页面的宽度
        var maskHeight=$(document).height();//获取当前文档页面的高度
        $(".mask2").css({
          "position":"absolute",
          "left":0,
          "top":0,
          "width":maskWidth,
          "height":maskHeight,
          "background":"#000",
          "opacity":0.4,
          "z-index":3,
        })
        var arr=[];
        $(this).parent().siblings().each(function(){
          arr.push($(this).text());
        })
        $(".popDiv").show().find("span").each(function(i){
          $(this).text(arr[i]);
        })
    })
    $(".close2").click(function(){
        $(".popDiv").hide();
        $(".mask2").remove();
    })

    $("input[value='修改']").click(function(){
        if($(this).val()=="修改"){
          $(this).val("确定");
          var $tds=$(this).parent().siblings();
          for (var i=0;i<$tds.length;i++){
            var $td=$tds[i];
            $($td).html("<input value='"+$($td).text()+"'/>");
          }
        }else{
          $(this).val("修改");
          var $tds=$(this).parent().siblings();
          for (var i=0;i<$tds.length;i++){
            var $td=$tds.eq(i);
            $td.text($td.find("input").val());
          }
        }
    })

    $("input[value='删除']").click(function(){
        $(this).parentsUntil("tbody").remove();
    })
})


function checkName(){
    var $name=$("#name");
    function updataTips(t){
        $(".validateTips").text(t).addClass("ui-state-highlight");
    }
    $.ajax({
        type:"get",
        url:"userName.txt",
        //data:该参数是用来指定传给服务器的值
        dataType:"text",//数据返回的类型
        success:function(data){
        //data参数保存了服务器返回的结果
            var userName=data;
            var arrUserName=userName.split(";");//得到一个数组

            var Flag=false;
            for(var i=0;i<arrUserName.length;i++){
                if(arrUserName[i]==$("input[name=myName]").val()){
                    Flag=true;
                    break;
                }
            }
            if($("input[name=myName]").val()!=""){
               if(Flag){
                    updataTips("用户名已存在"); 
                    $name.addClass("ui-state-error"); 
                }else{
                    updataTips("用户名可用"); 
                }
            }else{
                updataTips("用户名不能为空");
                $name.addClass("ui-state-error"); 
            }
        },
        error:function(){
            alert("请求失败");
        }
    })
}
function changeColor(){
    $("tr:first").css({"background":"#a9c6c9","color":"#ffffff","fontweight":"bold"});
    $("tr:not(:first):not(:last):even").css("background","#d4e3e5");
    $("tr:not(:first):not(:last):odd").css("background","#a9c6c9");
    $("tr:last").css("background","#a9c6c9");
}
function register(){
        var $name=$("#name");
        var $pwd=$("#password");
        var $com_pwd=$("#com_password");

        var $all=$([]).add($name).add($pwd).add($com_pwd);  //将三个input对象添加到$all中

        function updataTips(t){
            $(".validateTips").text(t).addClass("ui-state-highlight");
        }

        function checkLength(element,text,min,max){
            //element保存传递的input对象，text保存文本信息，min保存要求长度的最小值，max保存要求长度的最大值
            if(element.val().length<min || element.val().length>max){
                element.addClass("ui-state-error");
                updataTips(text+"的长度必须在"+min+"和"+max+"之间");
                return false;
            }else{
                return true;
                $("input[name=myName]").attr("onblur","checkName()");
            }
        }
        
        function check_password() {   
            if ($pwd.val() != $com_pwd.val()){     
                updataTips("两次填写的密码不一致"); 
                $pwd.addClass("ui-state-error");
                $com_pwd.addClass("ui-state-error");
                return false;
            }else{
                return true;
            }
        }
        $("#dialog-form").dialog({
            height:450,
            width:600,
            modal:true,  //以模式的方式打开对话框，即页面背景变为灰色
            autoOpen:false,
            buttons:{
                "注册":function(){
                    var bValid=true;
                    bValid = bValid && checkLength($name,'用户名',6,18);
                    bValid = bValid && checkLength($pwd,'密码',6,16);
                    bValid = bValid && checkLength($com_pwd,'密码',6,16);
                    bValid = bValid && check_password();
                    if(bValid){
                       $(this).dialog("close");
                    }; 
                },
                "取消":function(){
                    $(this).dialog("close");
                }
            },
            close:function(){
                $all.val("");
                $all.removeClass("ui-state-error");
                $(".validateTips").text("").removeClass("ui-state-highlight");
            }
        });


        $(".register").click(function(){
            $("#dialog-form").dialog("open");
        });
}

function login(){
        var $name=$("#name");
        var $pwd=$("#password");

        var $all=$([]).add($name).add($pwd);  //将三个input对象添加到$all中

        function updataTips(t){
            $(".validateTips").text(t).addClass("ui-state-highlight");
        }

        function checkLength(element,text,min,max){
            //element保存传递的input对象，text保存文本信息，min保存要求长度的最小值，max保存要求长度的最大值
            if(element.val().length<min || element.val().length>max){
                element.addClass("ui-state-error");
                updataTips(text+"的长度必须在"+min+"和"+max+"之间");
                return false;
            }else{
                return true;
                $("input[name=myName]").attr("onblur","checkName()");
            }
        }
        
        function check_password() {   
            if ($pwd.val() != $com_pwd.val()){     
                updataTips("两次填写的密码不一致"); 
                $pwd.addClass("ui-state-error");
                $com_pwd.addClass("ui-state-error");
                return false;
            }else{
                return true;
            }
        }
        $("#dialog-form1").dialog({
            height:400,
            width:600,
            modal:true,  //以模式的方式打开对话框，即页面背景变为灰色
            autoOpen:false,
            buttons:{
                "登录":function(){
                    var bValid=true;
                    bValid = bValid && checkLength($name,'用户名',6,18);
                    bValid = bValid && checkLength($pwd,'密码',6,16);
                    if(bValid){
                       $(this).dialog("close");
                    }; 
                },
                "取消":function(){
                    $(this).dialog("close");
                }
            },
            close:function(){
                $all.val("");
                $all.removeClass("ui-state-error");
                $(".validateTips").text("").removeClass("ui-state-highlight");
            }
        });


        $(".login").click(function(){
            $("#dialog-form1").dialog("open");
        });
}
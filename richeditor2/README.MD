document.execCommand的方法
http://blog.csdn.net/lhrhi/article/details/8469797
http://ueditor.baidu.com/doc/

光标控制
!!good! http://bbs.csdn.net/topics/390680532
http://www.tuicool.com/articles/veUfuuv
http://www.w3school.com.cn/xmldom/dom_document.asp
http://www.w3school.com.cn/xmldom/dom_range.asp

font-awesome字体说明
http://www.bootcss.com/p/font-awesome/design.html
http://www.bootcss.com/p/font-awesome/

document.selection和window.getSelection属性和方法详解
http://blog.csdn.net/truong/article/details/18658895

获取选中内容
http://bbs.landingbj.com/t-0-244831-1.html



type3 弹出面板的按钮增加了长期的按下状态

type4 增加光标区域锁定功能

type5 重新制作


url-loader
css-loader


//编辑div 的好的相关内容
http://codego.net/124097/
光标控制
!!good! http://bbs.csdn.net/topics/390680532
http://www.xue163.com/588880/39068/390680532.html
修改内容
http://zhidao.baidu.com/link?url=wCZPYnptiaAQZpqNxWlBBnRCpwSQO1YcSb2RFRLc0ZdlLLPEPcKxJjS97rFbuu_DeF7yP0rvFFfxCu5xD7y_qgbhdoP0V6WdofYpqw73RVe
字号大小
http://bbs.blueidea.com/forum.php?mod=viewthread&tid=1644377



~~~
<input type="text" id="theOne" value="">
<input type="button" onclick="NoHtml()" value="过滤html标签">
<script>
    function NoHtml(){
        var t=document.getElementById("theOne").value;
        t=t.replace(/({|})/g,'');   //过滤{}
        t=t.replace(/</g,'&lt;');    //置换符号<
        t=t.replace(/>/g,'&gt;');    //置换符号>
    //  t=t.replace(/<\/?[^>]*>/g,''); //*<\/?[^>]*>可以匹配<script></style></body>等，并置空。而不是替换<和>两个符号
        document.getElementById("theOne").value=t;
    }
</script>
~~~

版本说明
v101 增加纯文字输出，横向不出现滚动条
v102 增加当前文字区域的状态判断，黑体、斜体等，顶部的按钮区域会显示出这种状态
v102-2 输入url后自动关闭面板。优化下划线判断的逻辑。优化url输入面板，默认文字为灰色，改变后为黑色,判断url是否合法。hr高度调整

const icon_list = {
    "CORE":"https://static-cdn.m5stack.com/image/m5-docs_logo/core.png",
    "MODULE":"https://static-cdn.m5stack.com/image/m5-docs_logo/module.png",
    "BASE":"https://static-cdn.m5stack.com/image/m5-docs_logo/base.png",
    "STICK":"https://static-cdn.m5stack.com/image/m5-docs_logo/stick.png",
    "FACE":"https://static-cdn.m5stack.com/image/m5-docs_logo/base.png",
    "UNIT":"https://static-cdn.m5stack.com/image/m5-docs_logo/unit.png",
    "HAT":"https://static-cdn.m5stack.com/image/m5-docs_logo/hat.png",
    "ATOM":"https://static-cdn.m5stack.com/image/m5-docs_logo/atom.png",
    "APPLICATION":"https://static-cdn.m5stack.com/image/m5-docs_logo/application.png",
    "ACCESSORY":"https://static-cdn.m5stack.com/image/m5-docs_logo/accessory.png",
    "ALUMINIUM":"https://static-cdn.m5stack.com/image/m5-docs_logo/aluminium.png",
    "MINI-UNIT" : "https://static-cdn.m5stack.com/image/m5-docs_logo/mini-unit.png",
    "DESCRIPTION" : "el-icon-s-management",
    "描述" : "el-icon-s-management",
    "EASYLOADER":"el-icon-download",
    "EXAMPLE" : "el-icon-document-copy",
    "案例程序" : "el-icon-document-copy",
    "SCHEMATIC" : "el-icon-cpu",
    "原理图" : "el-icon-cpu",
    "VIDEO" : "el-icon-video-camera-solid",
    "相关视频" : "el-icon-video-camera-solid"
};

var header = new Vue({
    el: '#header',
    data: { 
        homepage: '',
        faq_link:'',
        case_link: '',
        i2c_table: '',
        comparison_table: '',
        homepage_title: '',
        faq_title: '',
        case_title: '',
        product_list_title: '',
        language_list_title: '',
        platform_list_title: '',
        isCollapse: true,
        platform:{},
        activeIndex: '1',
        pdf_notify: '',
        anchorList: [],
        related_products: ''
    },
    methods: {
            loading(str) {
                const loading = this.$loading({
                lock: true,
                text: str,
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                this.loading_target = loading
            },
            done() {
                this.loading_target.close();
            },
            handleOpen(key, keyPath) {
                $('#pc_anchor .el-menu-item.is-active').removeClass('is-active')
            },
            handleClose(key, keyPath) {
                $('#pc_anchor .el-menu-item.is-active').removeClass('is-active')
            }
        },
    mounted(){
        this.loading('Loading')
    }
})

var zoom_image = new Vue({
    el: '#zoom_image',
    data: { 
        url: '',
        srcList: [],
        show: false,
        index:0,
        rotate:0,
        width:580,
        scale:1
    },
    methods: {
        stopScroll(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        canScroll(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            document.removeEventListener("touchmove",mo,false);
        },
        close(){
            this.show = false;
            this.index = 0;
            this.rotate = 0;
            this.width = 550;
            this.scale = 1;
            this.canScroll();
        },
        next() {
            if(this.index>=this.srcList.length){
                this.index = 0;
            }else{
                this.index++;
            }
            this.url = this.srcList[this.index]
        },
        prev() {
            if(this.index<=0){
                this.index = this.srcList.length-1;
            }else{
                this.index--;
            }
            this.url = this.srcList[this.index]
        },
        left() {
            this.rotate = this.rotate - 90;
        },
        right() {
            this.rotate = this.rotate + 90;
        },
        zoom_in() {
            this.width = this.width + 50
        },
        zoom_out() {
            this.width = this.width - 50
        },
        full() {
            this.width = this.width = 800
        },
        rollImg() {
             if(event.wheelDelta > 0){
                this.scale = this.scale + 0.05;
             }else{
                this.scale = this.scale - 0.05;
             }
          }
    },
    computed: {
        img_style : function(){
            return `transition:all 0.2s ease 0s;transform: scale(${this.scale}) rotate(${this.rotate}deg); margin-left: 0px; margin-top: 0px; max-height: 100%; max-width: 100%; width:${this.width}px;`
        }
    }
})

var search_cover = new Vue({
    el: '#search_cover',
    data: { 
        activeName: 'first',
        current_page_title:'',
        related_page_title:'',
        search_note:'',
        contant_result: [
            {
                name:'',
                url:'',
                contant:this.search_note 
            }
        ],
    },
    methods: {
        start_search(){
            $('#search_cover').show(200);
            window.zoom_image.stopScroll();
        },
        close_search(){
            $('#search_cover').hide(200);
            window.zoom_image.canScroll();
        }
    }
})

function easyloader_video() {
    if($("#example_video").length >0)
    setTimeout(function(){
        $("#play-btn").on("click",function(ev){
            ev.stopPropagation();
            $(".easyloader-mask").toggleClass('video_play');
            $("#example_video")[0].play();
        })
        $("#example_video").on("click",function(ev){
            ev.preventDefault();
            $(".easyloader-mask").toggleClass('video_play');
            $("#example_video")[0].pause();
        })
    },200)
}

function anchor_create(anchor_name,anchor_id){
    var page_url = window.location.href;
    if((anchor_name == "DESCRIPTION")||(anchor_name == "描述")||(anchor_name == "EXAMPLE")||(anchor_name == "案例程序")||(anchor_name == "SCHEMATIC")||(anchor_name == "原理图")||(anchor_name == "VIDEO")||(anchor_name == "相关视频")||(anchor_name == "EASYLOADER")){
        var icon = icon_list[anchor_name];
        if(icon == undefined){
            icon = '';
        }
        header.anchorList.push(
            {
                "name" : anchor_id,
                "icon" : icon,
                "expand" : []
            }
        )
    }else if((page_url.indexOf(/uiflow/) != -1)||(page_url.indexOf(/arduino/) != -1)||(page_url.indexOf(/quick_start/) != -1)||(page_url.indexOf(/related_documents/) != -1)){
        header.anchorList.push(
            {
                "name" : anchor_name,
                "icon" : '',
                "expand" : []
            }
        )
    }
}

function anchor_search(purchase_link="none",quickstart_link="none"){
        var page_url = window.location.href;
        header.anchorList = [];
        if((page_url.slice(-4) == "/en/")||(page_url.slice(-7)== "/zh_CN/")||(page_url.slice(-3)== "/#/")){
            var anchor_list= $(".product_page > div");
            header.anchorList = [
                {
                    "name" : "core",
                    "icon" : icon_list.CORE,
                    "expand" : [
                        {
                            "name":"module",
                            "icon": icon_list.MODULE
                        },
                        {
                            "name":"base",
                            "icon": icon_list.BASE
                        }
                    ]
                },
                {
                    "name" : "atom",
                    "icon" : icon_list.ATOM,
                    "expand" : [
                        {
                            "name":"atom",
                            "icon": icon_list.ATOM
                        }
                    ]
                },
                {
                    "name" : "stick",
                    "icon" : icon_list.STICK,
                    "expand" : [
                        {
                            "name":"hat",
                            "icon": icon_list.HAT
                        }
                    ]
                },
                {
                    "name" : "face",
                    "icon" : icon_list.FACE,
                    "expand" : []
                },
                {
                    "name" : "unit",
                    "icon" : icon_list.UNIT,
                    "expand" : [
                        {
                            "name":"unit",
                            "icon": icon_list.UNIT
                        },
                        {
                            "name":"mini-unit",
                            "icon": icon_list["MINI-UNIT"]
                        }
                    ]
                },
                {
                    "name" : "application",
                    "icon" : icon_list.APPLICATION,
                    "expand" : []
                },
                {
                    "name" : "accessory",
                    "icon" : icon_list.ACCESSORY,
                    "expand" : []
                },
                {
                    "name" : "aluminium",
                    "icon" : icon_list.ALUMINIUM,
                    "expand" : []
                }
            ]
        }
        else{
            $("h2").eq(0).before("<div class='anchor-box'></div>");
            var anchor_list= $("#main h2");
        }
        for (var i=0; i< anchor_list.length ; i++){
                anchor_create(anchor_list[i].id.toUpperCase(), anchor_list[i].id);
            }
        if(page_url.indexOf(/zh_CN/) != -1) {
            var purchase_name = "购买链接" 
            var quickstart_name = "快速上手"
        }
        else {
            var purchase_name = "PURCHASE"
            var quickstart_name = "Quick-Start"
        }
        if(purchase_link!="none"){
            header.anchorList.push(
                {
                    "name" : purchase_name,
                    "icon" : 'el-icon-shopping-cart-full',
                    'link' : purchase_link,
                    "expand" : []
                }
            )            
            $("#main").append(`<h2 id="${purchase_name}"><a href="${purchase_link}" data-id="${purchase_name}" class="anchor" style="color: #007aff;"><span>${purchase_name}</span></a></h2>`);
        }
        if(quickstart_link!="none"){
            header.anchorList.unshift(
                {
                    "name" : quickstart_name,
                    "icon" : 'el-icon-guide',
                    'link' : quickstart_link,
                    "expand" : []
                }
            )    
            $(".product_pic").after(`<h2 id="${quickstart_name}" style="margin-bottom:0px;"><a href="${quickstart_link}" data-id="${quickstart_name.toUpperCase()}" class="anchor" style="color: #007aff;"><span>${quickstart_name}</span></a></h2>`);
        }
        easyloader_video();
}


function anchor_scroll(anchor_name,anchor_id,anchor_length){
    var page_url = window.location.href;
    var offset = $("#"+anchor_id).offset().top + $("#"+anchor_id).height() - $(window).scrollTop();
    if((offset > 100)&&(offset < ($("#"+anchor_id).height()+700))){
        for (var i= 0; i< anchor_length; i++){
            if( anchor_name == $(".anchor-box span").eq(i).html()){
                $(".anchor-box a").addClass("anchor-quiet");
                $(".anchor-box a").eq(i).removeClass("anchor-quiet");
                $(".anchor-box a").eq(i).addClass("anchor-active");
                if((page_url.indexOf(/uiflow/) != -1)||(page_url.indexOf(/arduino/) != -1)||(page_url.indexOf(/quick_start/) != -1)){
                    var marquee_status1 = $(".anchor-box a marquee").eq(i).attr("scrollamount");
                    $(".anchor-box a marquee").attr("scrollamount","0");
                    $(".anchor-box a marquee").eq(i).attr("scrollamount","2");
                    var marquee_status2 = $(".anchor-box a marquee").eq(i).attr("scrollamount");
                    if(marquee_status1 != marquee_status2){
                        $(".anchor-box a marquee").eq(i)[0].start();
                    }
                }
                return true
            }
        }
    }
}

var scrollFunc = function (e) {  
    e = e || window.event;  
// if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件    
    var page_url = window.location.href;
    if((page_url.slice(-4) == "/en/")||(page_url.slice(-7)== "/zh_CN/")||(page_url.slice(-3)== "/#/")){
        var anchor_list= $(".product_page > div:gt(1)");
    }
    else{
        var anchor_list= $("#main h2");  
    }
    for (var i=0; i< anchor_list.length ; i++){
        if(anchor_scroll(anchor_list[i].id.toUpperCase(), anchor_list[i].id, anchor_list.length)) break;
    }
}

scrollFunc();
/*IE、Opera注册事件*/   
if(document.attachEvent){
document.attachEvent('onmousewheel',scrollFunc);

}
//Firefox使用addEventListener添加滚轮事件  
if (document.addEventListener) {//firefox  
document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  
window.onscroll = scrollFunc;
  

function page_position() {
    var page_url = window.location.href;
    if(page_url.indexOf('id=') != -1) {
        page_move(page_url.slice(page_url.indexOf('id=')+3,));
     }
}

function search_notice(Enter,resultCount) {
    if(Enter.length > 0){
        get_search_keyword(Enter);
    }else{
        window.search_cover.contant_result = [
            {
                name:'',
                url:'',
                contant:search_cover.search_note 
            }
        ];
        $('#product_result')[0].textContent = search_cover.search_note;
    }
    if(resultCount == 0) {
        $('#product_result')[0].textContent = search_cover.search_note;
    }
}

function product_search(onEnter_content){
    $(".product_page .item").parent().css("display","inline-block");
    $('#product_result')[0].textContent = "";
    var p = $(".product_page .item .item-title");
    var sku_list = $(".product_page .item .mask_sku");
    var textEnter = onEnter_content.toLocaleLowerCase();
    var resultCount = 0;
    for (var i=0; i<p.length; i++ ) {
        if((p[i].textContent.toLocaleLowerCase().indexOf(textEnter) != -1)||(sku_list[i].textContent.toLocaleLowerCase().indexOf(textEnter) != -1)||(p[i].dataset.kw.toLocaleLowerCase().indexOf(textEnter) != -1)){
            $('#product_result').append($(".product_page .item").eq(i).clone());
            resultCount++;
            kw_content = p[i].dataset.kw;
            var kw = "";
            var sku = sku = `--SKU:<span style="color:#007bff;">${sku_list[i].textContent}</span>`;
            if(kw_content.toLocaleLowerCase().indexOf(textEnter) != -1){
                var kw_index = kw_content.toLocaleLowerCase().indexOf(textEnter);
                var kw_index_start = (function(){
                    for(var index = kw_index; index>=0; index--){
                        if((kw_content[index]==" ") || (index == 0)){
                            return index;
                        }
                    }
                })();
                var kw_index_end = (function(){
                    for(var index = kw_index; index<=kw_content.length; index++){
                        if((kw_content[index]==" ") || (index == kw_content.length)){
                            return index;
                        }
                    }
                })();
                var kw_part1 = kw_content.substring(0,kw_index_start);
                var kw_part2 = kw_content.substring(kw_index_end,);
                var kw_part3 = kw_content.substring(kw_index_start,kw_index_end);
                kw = `--<span style="color:#007bff;">${kw_part3}</span> ${kw_part1}${kw_part2}`
            }
            if(textEnter != ""){
            }else{
                $(".product_page .item").parent().css("display","block");
            }
        }
    }
    search_notice(textEnter,resultCount);
}

function faq_search(onEnter_content){
    var textEnter = onEnter_content.toLocaleLowerCase();
    var faq_title = $(".faq-item h5");
    $('#product_result')[0].textContent = "";
    var resultCount = 0;
    for (var i=0; i<faq_title.length; i++ ) {
        if(faq_title[i].textContent.toLocaleLowerCase().indexOf(onEnter_content) != -1){
            $('#product_result').append($(".faq-item").eq(i).clone(true));
            resultCount++;
        }
    }
    search_notice(textEnter,resultCount);
    if(resultCount == 0){
        $('#product_result').append($(".search-tips").clone().css("display","block"));
    }
}

function api_search(onEnter_content){
    var textEnter = onEnter_content.toLocaleLowerCase();
    var api_list = $(".el-card__body div");
    $('#product_result')[0].textContent = "";
    var resultCount = 0;
    for (var i=0; i<api_list.length; i++ ) {
        if(api_list[i].textContent.toLocaleLowerCase().indexOf(onEnter_content) != -1){
            $('#product_result').append($(".el-card__body div").eq(i).clone(true));
            resultCount++;
        }
    }
    search_notice(textEnter,resultCount);
}

function detail_search(onEnter_content){
    var textEnter = onEnter_content.toLocaleLowerCase();
    var contant_list = $('#main p');
    $('#product_result')[0].textContent = "";
    var resultCount = 0;
    for(var i =0; i<contant_list.length;i++){
        $('#main p').eq(i).attr('id',`p${i}`)
        var match_test = $('#main p').eq(i).text().toLocaleLowerCase().indexOf(textEnter);
        if(match_test != -1){
            var clone_obj = $('#main p').eq(i).clone(true);
            var start = match_test;
            var end = match_test + textEnter.length;
            var result = clone_obj.text()
            var kw_part1 = result.substring(0,start);
            var kw_part2 = result.substring(end,);
            result = kw_part1 + `<mark style="box-shadow: 0px 0px 9px 7px #9ed1f68a;">${onEnter_content}</mark>` + kw_part2;
            clone_obj.attr('id','').html(`<div onclick="page_move('p${i}');window.search_cover.close_search()" style="cursor: pointer">`+result+'</div>')
            $('#product_result').append(clone_obj);
            resultCount++;
        }
    }
    search_notice(textEnter,resultCount);
}

function onEnter(event){

    timer = setTimeout(function () {
        var onEnter_content = event.target.value.toLowerCase();
        select_search_page(onEnter_content);
        clearTimeout(timer);
        timer = null;
            }, 250); 
}
  
function select_search_page(onEnter_content){
    link = window.location.href;
    if(((link.slice(-4) == "/en/")||(link.slice(-7)== "/zh_CN/"))||((link.indexOf(/en/) == -1) && (link.indexOf(/zh_CN/) == -1))){   
        product_search(onEnter_content);
    }else if(link.slice(-4) == "/faq"){
        faq_search(onEnter_content);
    }else if(link.slice(-9) == "home_page"){
        api_search(onEnter_content);
        console.log(12)
    }else {
        detail_search(onEnter_content);
    }
}
  var Input = $('form input');
      Input.focusin(function (){
      window.search_cover.start_search();
      Input.animate({width:300});
      var count = 0;
      for(let key  in window.localStorage){
        var current_url =  window.location.href;
        if(((current_url.indexOf("/en/") != -1)&&(key.indexOf("/en/") != -1))){
            count++;
            if(count > 5){
                break;
            }
        }else if(((current_url.indexOf("/zh_CN/") != -1)&&(key.indexOf("/zh_CN/") != -1))){
            count++;
            if(count > 5){
                break;
            }
        }else{
            localStorage.clear();
            set_search_keyword();
            break;
        }
      }
  });
  
      Input.focusout(function (){
      Input.animate({width:240});
      $(".item").css("z-index","30");
      setTimeout(function(){
        },160);
    });

  function select(event){
      var s = event.textContent.toLowerCase();
      $("#thetarget").removeClass("show");
      $(".btn-group-vertical button").addClass("btn-light");
      $(event).removeClass("btn-light");
      $(event).addClass("btn-primary");
      page_move(s);
  }
  
  $(document).ready(function() {

  });
  
function change_title(language) {
    if (language == "en") {
        header.platform = {
            UIFlow:"#/en/uiflow/uiflow_home_page",
            Arduino:"#/en/arduino/arduino_home_page",
            MicroPython:"https://github.com/m5stack/UIFlow-Code",
            FreeRTOS:"#/en/quick_start/m5stickc/m5stickc_quick_start_with_AWS-FreeRTOS_Windows"
        }
        header.case_link = "#/en/case";
        header.faq_link = "#/en/faq";
        header.i2c_table = "I2C Address Table";
        header.comparison_table = "Product Comparison";
        header.homepage_title = "Product List";
        header.product_list_title = "Product";
        header.language_list_title = "Language";
        header.platform_list_title = "Platform|API";
        header.faq_title = "FAQ";
        header.case_title = "Cases";
        header.pdf_notify = "Creating PDF.....";
        header.related_products = "Related Products";
        search_cover.search_note = "No relevant information was found, please enter product keywords and search again.";
        search_cover.current_page_title = "Current Page";
        search_cover.related_page_title = "Related Page";
    } 
    if(language == "zh_CN"){
        header.platform = {
            UIFlow:"#/zh_CN/uiflow/uiflow_home_page",
            Arduino:"#/zh_CN/arduino/arduino_home_page",
            MicroPython:"https://github.com/m5stack/UIFlow-Code",
            FreeRTOS:"#/zh_CN/quick_start/m5stickc/m5stickc_quick_start_with_AWS-FreeRTOS_Windows"
        }
        header.case_link = "#/zh_CN/case";
        header.faq_link = "#/zh_CN/faq";
        header.i2c_table = "I2C地址表格";
        header.comparison_table = "产品比较说明";
        header.homepage_title = "产品列表";
        header.product_list_title = "产品信息";
        header.language_list_title = "切换语言";
        header.platform_list_title = "编程平台|API";
        header.faq_title = "常见问题";
        header.case_title = "社区案例";
        header.pdf_notify = "正在生成PDF，请稍等。";
        header.related_products = "周边产品";
        search_cover.search_note = "没有搜索到相关信息，请输入产品关键字，重新进行搜索";
        search_cover.current_page_title = "当前页面";
        search_cover.related_page_title = "相关页面";
    }
    window.search_cover.contant_result = [
        {
            name:'',
            url:'',
            contant:search_cover.search_note 
        }
    ];
    $('#product_result')[0].textContent = search_cover.search_note;
}
function language(language) {
    window.header.loading("loading...");
    var test = window.location.href;
    if ((test.indexOf(/en/) == -1) && (test.indexOf(/zh_CN/) == -1) && (test.indexOf(/ja/) == -1)) {
        var test2 = test.concat("", language+"/");
        window.location.href = test2;
        change_title(language);

    } 
    if (test.indexOf(/en/) != -1) {
        var test2 = test.replace(/en/, language);
        window.location.href = test2;
        change_title(language);

    }else if(test.indexOf(/zh_CN/) != -1){
        var test2 = test.replace(/zh_CN/, language);
        window.location.href = test2;
        change_title(language);
    }else if(test.indexOf(/ja/) != -1){
        var test2 = test.replace(/ja/, language);
        window.location.href = test2;
        change_title(language);
    }
    localStorage.clear();
    set_search_keyword();
    window.header.done();
}
function use_jpg() {
    pics = $("img");
    var page_url = window.location.href;
    for (var i= 0; i<pics.length; i++){
        if((page_url.slice(-4) == "/en/")||(page_url.slice(-7)== "/zh_CN/")||(page_url.slice(-3)== "/#/")){
            if (pics[i].src.indexOf(".webp") != -1) {
                var path = pics[i].src.substr(0,pics[i].src.indexOf(".webp"));
                pics[i].src = path+".jpg"
            }
        }else{
            if (pics[i].src.indexOf(".webp") != -1) {
                if (pics[i].src.indexOf("m5stack.oss") != -1) {
                    var path = pics[i].src.substr(0,pics[i].src.indexOf(".webp"));
                    pics[i].src = path+".jpg"
                }else{
                    if(pics[i].src.indexOf("assets") != -1) {
                        var path = pics[i].src.substr(pics[i].src.indexOf("assets"),);
                        pics[i].src = "https://static-cdn.m5stack.com/image/product_jpg/"+path.replace(".webp",".jpg");
                    }else if(pics[i].src.indexOf("image/") != -1){
                        var path = pics[i].src.substr(pics[i].src.indexOf("image"),);
                        pics[i].src = "https://static-cdn.m5stack.com/image/product_jpg/"+path.replace(".webp",".jpg");
                    }
                }
            }
        }
    }
}
function page_loading() {
    var page_url = window.location.href;
    if ((page_url.indexOf(/en/) == -1) && (page_url.indexOf(/zh_CN/) == -1)&& (page_url.indexOf(/ja/) == -1)) {
        change_title('en');
    }
    if(page_url.indexOf(/en/) != -1){
        change_title('en');
    }
    if(page_url.indexOf(/zh_CN/) != -1){
        change_title('zh_CN');
    }
    if(page_url.indexOf(/ja/) != -1){
        change_title('ja');
    }
}

function isSupportWebp() {
    if (document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0){
        return true;
    }
    use_jpg();
}

function img_zoom() {
    $('#main img').on('click',function(){
        if(this.dataset.noZoom !=''){
            window.zoom_image.url = this.src;
            window.zoom_image.srcList.push(this.src);
            for(var i=0 ; i<$('#main img').length;i++){
                if(window.zoom_image.srcList.indexOf($('#main img')[i].src) == -1){
                    window.zoom_image.srcList.push($('#main img')[i].src);
                }
            }
            window.zoom_image.show = true;
            window.zoom_image.stopScroll();
        }
    })
}

function page_move(divId) {
    try {
        var t = $("#" + divId).offset().top;
        $('html, body').animate({
            scrollTop: (t - 120)
        }, 500);
    }catch(err){

    }
}
window.onhashchange = page_loading
page_loading();


function creat_pdf() {
    window.header.loading(window.header.pdf_notify);
    window.header.$notify({
        title: 'M5Stack-Docs',
        message: window.header.pdf_notify,
        offset: 150
      });
    $('html, body').animate({scrollTop: 0}, 0); 
    $(".anchor-box").css("display","none");
    $(".related_links").css("display","none");
    $(".easyloader-box").css("display","none");
    var target = document.getElementsByTagName('body');
    html2canvas(target, {
        useCORS: true,
        logging:true,
        scale: 2,
        background: '#FFFFFF',
        onrendered:function(canvas) {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            var pageHeight = contentWidth / 592.28 * 841.89;
            var leftHeight = contentHeight;
            var position = 0;
            var imgWidth = 595.28;
            var imgHeight = 592.28/contentWidth * contentHeight;
    
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
    
            var pdf = new jsPDF('', 'pt', 'a4');
    
            if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
            } else {
                while(leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    if(leftHeight > 0) {
                    pdf.addPage();
                    }
                }
            }
            var page_url = window.location.href;
            var a = page_url.indexOf('#')
            var pdf_name = page_url.slice(a+2);
            pdf.save(pdf_name+".pdf");
        }
    })
        $(".anchor-box").removeAttr("style");
        $(".related_links").removeAttr("style");
        $(".easyloader-box").removeAttr("style");
        setTimeout(function(){
            window.header.done();
        },600)
    }

$(document).on("keypress", "form", function(event) { return event.keyCode != 13;});


Storage.prototype.setExpire = (key, value, expire) => {
	let obj = {
	data: value,
	time: Date.now(),
	expire: expire
    };
	//localStorage 设置的值不能为对象,转为json字符串
	localStorage.setItem(key, JSON.stringify(obj));
}

Storage.prototype.getExpire = key => {
    let val = localStorage.getItem(key);
    if (!val) {
        return val;
    }
    if (Date.now() - val.time > val.expire) {
        localStorage.removeItem(key);
        return null;
    }
    return val;
}

function set_search_keyword() {
    if((window.localStorage.length < 100)||( window.localStorage.getExpire("/en/faq.md") == null)){
        var links = Docsify.get("/sidebar.md").then(data=>{
            var all_link = JSON.parse(data);
            for(var key in all_link){
                for(i = 0; i<all_link[key].length;i++){
                var page_url = window.location.href;
                if(page_url.indexOf('zh_CN') != -1){
                    FilePath = all_link[key][i].replace('/en/','/zh_CN/');
                }else{
                    FilePath = all_link[key][i];
                }
                (function(FilePath){
                    Docsify.get(FilePath).then(data=>{
                        window.localStorage.setExpire(FilePath, data,259200000);
                    })
                })(FilePath)
                }
            }
        })
        }
    }

function get_search_keyword(str){
    window.search_cover.contant_result = [];
    for(let key  in window.localStorage){
        try{
            if(window.localStorage.getItem(key).toUpperCase().indexOf(str.toUpperCase()) != -1){
                var result = window.localStorage.getItem(key).replace(/<.*?>/g,"");
                result = result.replace(/\(.*?\)/g);
                result = result.replace(/[\\r\\n*#]/g,"");
                var start = result.toUpperCase().indexOf(str.toUpperCase()) -20;  
                var end = result.toUpperCase().indexOf(str.toUpperCase()) + 55;
                result = result.slice(start,end);
                key = key.replace('.md','');
                var contant_name = key;
                while(contant_name.indexOf('/') != -1){
                    contant_name = contant_name.slice(contant_name.indexOf('/')+1);
                }
                kw_start = result.toUpperCase().indexOf(str.toUpperCase());
                kw_end = result.toUpperCase().indexOf(str.toUpperCase()) + str.length;
                var kw_part1 = result.substring(0,kw_start);
                var kw_part2 = result.substring(kw_end,);
                result = kw_part1 + `<mark style="box-shadow: 0px 0px 9px 7px #9ed1f68a;">${str}</mark>` + kw_part2;
                window.search_cover.contant_result.push({
                    name:contant_name.toUpperCase(),
                    url:'#'+key,
                    contant:'------>'+result+'......'
                })
            }
        }catch(err){

        }
    }
}
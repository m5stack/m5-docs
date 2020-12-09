<div class="product_page"></div>

<script>
  
    function createProduct(data) {
     var anthors = [];
     for(let key  in data){
        var anthor = {"name" : key , "expand": []};
        for(let key1  in data[key]){
            anthor.expand.push({
              "name":key1,
              "icon": icon_list.MODULE
            });
            $(".product_page").append(`<div id=${key1.toLowerCase()}></div>`);
            data[key][key1].forEach((productInfo)=>{
            if(productInfo.category != undefined){
              $("#"+key1.toLowerCase()).append(`<p><strong>${productInfo.category}</strong></p>`);
            }
            let qsBtn = '';
            if(productInfo.qs != undefined){
              qsBtn = `<a href=${productInfo.qs} class="quickstart_btn"><button type="button" class="mask-btn1">QuickStart</button></a>`
            }
            var html = 
                `<div class='item'>
                  <a href="${productInfo.a}">
                    <img src="${productInfo.img}">
                    <p class='item-title' data-kw="${productInfo.kw}">${productInfo.p}</p>
                    <div class="mask"><p class="mask_sku">${productInfo.sku}</p></div>
                  </a>
                  ${qsBtn}
                </div> `;
            $("#"+key1.toLowerCase()).append(html);
            })
        }
        anthors.push(anthor);
      }
      header.anchorList = anthors;
    }

    $(document).ready(function(){
        $(function () {
          var x = -30;
          var y = 40;
          var newtitle = '';
          $('.item').mouseover(function (e) {
              newtitle = $(this).find(".item-title")[0].dataset.kw;
              $('body').append('<div id="tag_title" >' + newtitle + '</div>');
              $('#tag_title').css({
                  'left': (e.pageX - x + 'px'),
                  'top': (e.pageY - y + 'px')
              }).show();
          }).mouseout(function () {
              $('#tag_title').remove();
          }).mousemove(function (e) {
              $('#tag_title').css({
                  'left': (e.pageX - x + 'px'),
                  'top': (e.pageY - y + 'px')
              }).show();
          }).click(function (e) {
              $('#tag_title').remove();
          })
      });
        // anchor_search();
        scrollFunc();
     });
  
    (function(FilePath){
        Docsify.get(FilePath).then(data=>{
            const Product_Json = JSON.parse(data)
            createProduct(Product_Json);
        })
    })("./en/product_list.json")

</script>

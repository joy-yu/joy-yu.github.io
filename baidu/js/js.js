window.onload = function() {

    var show = document.getElementById('show');
    var show_list = document.getElementById('show_list');
    function show_in() {
        show_list.style.display = "block";
    }
    function show_out() {
        show_list.style.display = "none";
    }
    show.addEventListener("mouseover", show_in);
    show_list.addEventListener("mouseover", show_in);
    show_list.addEventListener("mouseout", show_out);



    var seach = document.getElementById('search');
    var search_text = search.value;
    var search_btn = document.getElementById('search_btn');

    search.addEventListener("change",function(){
        search_text = this.value;
    });
    search_btn.addEventListener("click", function(e){
        e.preventDefault();
        window.open("http://www.baidu.com/s?wd=" + search_text, "_self");
    });

}

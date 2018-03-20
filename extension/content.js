<script>
    $(document).ready(function(){
        var posts_html = document.getElementsByClassName("_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8");
        var i;
        var posts_string = "";
        for(i=0; i< posts_html.length; i++)
        {
            posts_string = posts_string + (posts_html[i]).toString() + "\n";
        }
        $.ajax({
            url: "localhost:8000/receive_post",
            data: {
                'posts_string':posts_string,
            }
        });
    });
</script>

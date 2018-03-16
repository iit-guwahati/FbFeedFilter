<script>

$(document).ready(function(){
    var username = $('#login_name').val(); 
    var password = $('#login_password').val();
    $("button").click(function(){
        $.ajax({
            url: "localhost:8000/login",
            data: {
                'username':username,
                'password':password
            }
            success: function(result){
                        console.log('logging in');
                    }
        });
    });
});

$(document).ready(function(){
    var username = $('#register_name').val(); 
    var password = $('#register_password').val();
    var emails = $('#register_email').val();
    $("button").click(function(){
        $.ajax({
            url: "localhost:8000/register", 
            data: {
                'username':username,
                'password':password,
                'email': email
            }
            success: function(result){
                console.log('please wait');
                }
        });
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "logout", success: function(result){
            console.log('logging you out');
        }});
    });
});

</script>

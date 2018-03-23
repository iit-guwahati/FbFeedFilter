<script>
 function checkLogin()
 {
    $.ajax({
        url: "localhost:8000/check_authentication",
        type: "POST",
        data: {
            'username':username_auth
        }
        success: function(response)
        {
                if(response.status)
                {
                    document.getElementById("register").style.display="none";
                    document.getElementById("login").style.display="none";
                    document.getElementById("register_btn").style.display="none";
                    document.getElementById("afterLogin").innerHTML="Welcome! You have been logged in!";
                }
                else{
                    document.getElementById("register").style.display="none";
                    document.getElementById("login").style.display="initial";
                    document.getElementById("register_btn").style.display="initial";
                    document.getElementById("afterLogin").innerHTML="";
                }
        }
    });
 }

$(document).ready(function(){
   checkLogin();
});

$(document).ready(function(){
    $("register_btn").click(function(){
        document.getElementById("register").style.display="initial";
        document.getElementById("login").style.display="none";
        document.getElementById("register_btn").style.display="none";
        document.getElementById("afterLogin").innerHTML="";
    });
});

$(document).ready(function(){
    var username = $('#login_name').val(); 
    var password = $('#login_password').val();
    $("login_btn").click(function(){
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
    $("create_id_btn").click(function(){
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


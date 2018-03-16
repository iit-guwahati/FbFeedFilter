<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "localhost8000/login", success: function(result){
            $("#login").console.log('logging in');
        }});
    });
});
</script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "localhost8000/register", success: function(result){
            $("#register").console.log('please wait');
        }});
    });
});
</script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "logout", success: function(result){
            $("#logout").console.log('logging you out');
        }});
    });
});
</script>
</head>
<body>

<button id='login'>Login</button>
<button id='logout'>Logout</button>
<button id='register'>Register</button>

</body>
</html>

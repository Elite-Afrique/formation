@if($errors->any())
        <ul>
            @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
 @endif
<form method="POST">
    @csrf
    <input type="input" name="id" value="{{ $user[0]['id'] }}">
   
    <input type="password" name="password" placeholder="new password">
    <br><br>
    <input type="password" name="password_confirmation" placeholder="confirm password">
    <br><br>
    <input type="submit">

</form>

var socket = io.connect('http://192.168.1.94:2020', {'forceNew':true});

socket.on ('messages', function(data){
    console.log(data);
    render(data);
});

function render (data){
    var html = data.map(function(message, index){
        return (`
        <div class="message">
        <strong> ${mesagge.nickname} </strong> dice:
        <p> ${message.text} <p/>
        </div>
        `);

    }); . join ('');
    document.getElementById('messages').innerHTML() = html;
}
var api_key = '';
var id = '';

$(function() {
	getData();
	$('#get').click(function(){
		getData();
	});
});

function getData()
{
	$.post( "https://www.ltcrabbit.com/index.php?page=api&action=getuserstatus&api_key=" + api_key + "&id=" + id, function( data ) {
		if(typeof data !== 'object')
			data = $.parseJSON(data);
		$("#username").html(data.getuserstatus.username);
		$("#balance").html(data.getuserstatus.balance);
		$("#hashrate").html(data.getuserstatus.hashrate);
		$("#sharerate").html(data.getuserstatus.sharerate);
	});

	$.post( "https://www.ltcrabbit.com/index.php?page=api&action=getuserworkers&api_key=" + api_key + "&id=" + id, function( data ) {
		if(typeof data !== 'object')
			data = $.parseJSON(data);
		html = '<table><thead><tr><th>ID</th><th>username</th><th>monitor</th><th>active</th><th>hashrate</th></tr></thead><tbody>';
		for (var index in data.getuserworkers) {
			html += '<tr><td>' + data.getuserworkers[index].id + '</td>';
			html += '<td>' + data.getuserworkers[index].username + '</td>';
			html += '<td>' + data.getuserworkers[index].monitor + '</td>';
			html += '<td>' + data.getuserworkers[index].active + '</td>';
			html += '<td>' + data.getuserworkers[index].hashrate + '</td></tr>';
		}
		html += '</tbody></table>';
		$('#worker').html(html);
	});
}
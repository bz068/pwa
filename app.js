var template = "<article>\n\
<h3>#POS. TOPIC</h3>\n\
	<li><span>Topic:</span> <strong>TOPIC</strong></li>\n\
    <li><span>Location:</span> <strong>LOCATION</strong></li>\n\
    <li><span>Price:</span> <strong>PRICE</strong></li>\n\
	</ul>\n\
</article>";
var content = '';
for(var i=0; i<courses.length; i++) {
	var entry = template.replace(/POS/g,(i+1))
				.replace(/TOPIC/g,courses[i].topic)
                .replace(/LOCATION/g,courses[i].location)
                .replace(/PRICE/g,courses[i].price);
entry = entry.replace('<a href=\'http:///\'></a>','-');
	content += entry;
};
document.getElementById('content').innerHTML = content; 


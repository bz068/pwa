var template = "<article>\n\
	<img src='data/img/placeholder.png' data-src='data/img/course.jpg' alt='NAME'>\n\
	<h3>#POS. TOPIC</h3>\n\
	<ul>\n\
	<li><span>Topic:</span> <strong>TOPIC</strong></li>\n\
    <li><span>Location:</span> <strong>LOCATION</strong></li>\n\
    <li><span>Price:</span> <strong>PRICE</strong></li>\n\
	</ul>\n\
</article>";
var content = '';
for(var i=0; i<courses.length; i++) {
	var entry = template.replace(/POS/g,(i+1))
				.replace(/TOPIC/g,data[i].topic)
                .replace(/LOCATION/g,data[i].location)
                .replace(/PRICE/g,data[i].price);
entry = entry.replace('<a href=\'http:///\'></a>','-');
	content += entry;
};
document.getElementById('content').innerHTML = content;
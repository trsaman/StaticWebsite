var visitorName = prompt("Enter thy name:");
var visitorAgeString = prompt("Enter thy age:");
var visitorAgeInteger = parseInt(visitorAgeString);
var checkVisitorAge = Number.isInteger(visitorAgeInteger);
var visitorAge;

if (visitorName == null || visitorName == ""){
	visitorName = "a nameless visitor";
}

if (checkVisitorAge == false || visitorAgeInteger <= 1 || visitorAgeInteger > 120){
	visitorAge = "unknown";
}

else {
	visitorAge = visitorAgeInteger+" years old";
}

document.write("<h1>Credits</h1>");
document.write("<p>The existence of this bleg will not have been possible if it weren't for the following people:</p>")
document.write("<p><span>Harold Hull</span>, for always bringing joy by just showing up wherever I am; also for being my original inspiration for this project.  You will always be my number one supporter and fan. </p>");
document.write("<p><span>Horace Hull</span>, for keeping Harold from straying too far from social norms.  Never leave him alone in a situation where he is prone to make a faux pas.</p>")
document.write("<p><span>Kristoff Davies</span>, for having Harold, Horace, and me over at his place so that I could have material to be written for this project.  You are also the reason how my (somewhat sordid) attraction to DDR players got started.</p>");
document.write("<p><span>Shawn Quentin</span>, for being my original inspiration for playing DDR.  Never forget that.</p>");
document.write("<p><span>Ulysses Bernhaardt</span>, for giving this project to his students.  I would not have known the friends I have made from DDR better if it were not for this project.</p>");
document.write("<p>And <span>"+visitorName+"</span>, whose age is "+visitorAge+", who deigned to read the whole blog just for poops and giggles.</p>");

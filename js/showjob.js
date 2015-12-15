// Click to show job details
var which_job_is_active = "";

$(document).ready(function() {
	$(".section_content_container").hide(); //hide all
});

function display_job(name_of_the_job_id) {
    if ($(name_of_the_job_id).is(':hidden')) {
    	$(name_of_the_job_id).show(500);
   		$('html, body').animate({ scrollTop: $(name_of_the_job_id).offset().top }, 500); 
   	}
   	else {
   		$(name_of_the_job_id).hide(500);
   	}
}
function closeJob(name_of_the_job_id) {
	$(name_of_the_job_id).hide(500);
   	$('html, body').animate({ scrollTop: $('#work').offset().top }, 500); 
}

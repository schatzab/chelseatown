// Click the nav bar to show different sections of page


var which_job_is_active = "";

$(document).ready(function() {
	$(".section_content_container").hide(); //hide all
});

function display_job(name_of_the_job_id) {


    if(name_of_the_job_id != "") {
        $(which_job_is_active).slideUp(500,function() {
            $(name_of_the_job_id).slideDown(500);
        });
    }
    else $(name_of_the_job_id).show(); 

    which_job_is_active = name_of_the_job_id;
}

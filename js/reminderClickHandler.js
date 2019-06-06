///this will show the reminders description if clicked.
$(document).ready(function(){
    //reminder tabs
    $(".reminder_desc").hide();
    $(".reminder_tab").click(function(event) {
        var tab_desc = $(event.target).find("p");
        var tab_icon = $(event.target).find("input");

        tab_desc.slideToggle();
    });

    //delete tabs
    $(".delete_button").click(function(event){
        var delete_index = $(event.target).data('internal-id');
        
        //load remind data
        var reminder_structure = JSON.parse(localStorage.getItem('reminders'));

        //delete array index
        reminder_structure.splice(delete_index, 1);

        //save new remind data and refresh the page
        localStorage.setItem('reminders', JSON.stringify(reminder_structure));
        location.reload();
    });
});


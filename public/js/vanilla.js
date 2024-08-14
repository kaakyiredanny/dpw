$(document).ready(() => {
    $('#showmenu').click(() => {
        $('.navbar').show('slow')
        $('#hidemenu').show('slow')
        $('#showmenu').hide('slow')
    })

    $('#hidemenu').click(() => {
        $('.navbar').hide('slow')
        $('#showmenu').show('slow')
        $('#hidemenu').hide('slow')
    })


    

})
// start progress bar
$(document).ready(function(){

    let progress = setInterval(function() {
        let $bar = $('.progress-bar');

        if ($bar.width()>=400) {
            clearInterval(progress)
            $('.progress-bar').removeClass('active')
        } else {
            $bar.width($bar.width()+40)
        }
        
    }, 1000)
})
// end progress bar




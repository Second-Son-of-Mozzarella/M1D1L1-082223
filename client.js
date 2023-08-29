$(function () {

     // preload audio
     var toast = new Audio('toast.wav');
    $('.code').on('click', function (e) {
        
        e.preventDefault();

        let name = $(this).data('name');
        let discount = $(this).data('discount');
        
                // first pause the audio (in case it is still playing)
                toast.pause();
                // reset the audio
                toast.currentTime = 0;
         // play audio
         toast.play();
         $('#code').text(discount);
         $('#productName').text(name);
        $('#liveToast').toast({ autohide: false }).toast('show');
        $('#liveToast').show();
    });

    $(document).on('keyup', function(e){

        if(e.key == "Escape") $('#liveToast').hide();
    });
});
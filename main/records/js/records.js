// ------------step-wizard-------------
$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var target = $(e.target);

      if (target.parent().hasClass('disabled')) {
          return false;
      }
  });

  $(".next-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');


      $(document).ready(function() {
        $('selector').click(function() {
            $('selector.active').removeClass("active").removeClass('checked-img');

            $(this).addClass("active");
        });
    });


      active.next().removeClass('disabled')
      // $('.checked-img').css('display','block')

      nextTab(active);

  });
  $(".prev-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');

      // if(active) {
      //   active.next().addClass('ticked')
      // }
      prevTab(active);


  });
});




function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
  // $('#check').show()
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');

});



//  activating submenus on clicking the hmo radio button

const hmoRadio = document.getElementById('hmo')
const referralRadio = document.getElementById('referral')


// check for active class on clicking nec


const ifHmoIsChecked = () =>{
  if(hmoRadio.checked){
    document.getElementById('selectHmo').style.display = 'block'
  } else {
    document.getElementById('selectHmo').style.display = 'none'
  }
}



const checkReferral = () => {
  if(referralRadio.checked) {
    document.getElementById('selectReferral').style.display = 'block'
  } else {
    document.getElementById('selectReferral').style.display = 'none'
  }
}










$(document).ready(function () {
  // MODAL
  var modalText = {
    discover: {
      title: 'Ethical Hacking',
      tag: 'FOOD ORDERING PLATFORM.',
      detail:
        'Ethical Hacking Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.',
      link: ''
    },
    ordering: {
      title: 'Vanzel Tecnologies',
      tag: 'WHITE-LABEL ONLINE ORDERING SOLUTION.',
      detail:
        'Vanzel Tecnologies is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.',
      link: ''
    },
    newrelic: {
      title: 'NewRelic.com',
      tag: 'APPLICATION PERFORMANCE MONITORING.',
      detail:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: ''
    },
    roambi: {
      title: 'Roambi.com',
      tag: 'BUSINESS ANALYTICS.',
      detail:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: ''
    },
    walker: {
      title: 'Tarjeta Digital',
      tag: 'PERFORMANCE METRICS.',
      detail:
        'Tarjeta Digital Token offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.'
    },
    powur: {
      title: 'Powur.com',
      tag: 'CONSUMER POWERED MARKETING.',
      detail:
        'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: ''
    },
    mystand: {
      title: 'MyStand',
      tag: 'CROWD-FUNDED CHARITY.',
      detail:
        ''
    },
    never: {
      title: 'Lokycuts',
      tag: 'lokycuts ALS AWARENESS.',
      detail:
        ''
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail:
        ''
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});

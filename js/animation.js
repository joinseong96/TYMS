$(function(){
  
    gsap.registerPlugin(ScrollTrigger);

    $(".color_title").each(function() {
      ScrollTrigger.create({
      trigger: ".color_content",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".color_list").each(function() {
      ScrollTrigger.create({
      trigger: ".color_content",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".color_describe div").each(function() {
      ScrollTrigger.create({
      trigger: ".color_content",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".type_title").each(function() {
        ScrollTrigger.create({
        trigger: ".type_content",
        toggleActions: "restart none reverse none",
        start: "top center",
        onEnter: () => $(this).addClass('active'),
        onLeave: () => $(this).removeClass('active'),
        onEnterBack: () => $(this).addClass('active'),
        onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".type_list").each(function() {
      ScrollTrigger.create({
      trigger: ".type_list_wrap",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".type_describe").each(function() {
      ScrollTrigger.create({
      trigger: ".type_content",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".about_circle_img div").each(function() {
      ScrollTrigger.create({
      trigger: ".about_content_top",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".about_describe").each(function() {
      ScrollTrigger.create({
      trigger: ".about_content_top",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".sub_page_title").each(function() {
      ScrollTrigger.create({
      trigger: ".sub_page",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".sub_left_inner").each(function() {
      ScrollTrigger.create({
      trigger: ".sub_top",
      toggleActions: "restart none reverse none",
      start: "top center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".sub_right_inner").each(function() {
      ScrollTrigger.create({
      trigger: ".sub_top",
      toggleActions: "restart none reverse none",
      start: "30% center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });


    $(".brand_list_inner").each(function() {
      ScrollTrigger.create({
      trigger: ".brand_top",
      toggleActions: "restart none reverse none",
      start: "20% center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".brand_bottom .brand_list_wrap").each(function() {
      ScrollTrigger.create({
      trigger: ".brand_bottom",
      toggleActions: "restart none reverse none",
      start: "top 80%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });


    $(".design_banner").each(function() {
      ScrollTrigger.create({
      trigger: ".design_top",
      toggleActions: "restart none reverse none",
      start: "top 90%",
      end: "bottom top",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });

    $(".diagonal_list_inner").each(function() {
      ScrollTrigger.create({
      trigger: ".design_bottom",
      toggleActions: "restart none reverse none",
      start: "14% center",
      end: "bottom top",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
});

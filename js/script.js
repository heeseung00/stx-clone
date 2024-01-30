window.onload = function () {
  //     // 내 마음대로 이름을 지정해주는 것. 이것을 '선언'이라고 한다.
  //     //해석: 내가 선언한 상수 'button'안에 .visual-bt라는 클래스를 딱 찍어서 불러오겠다는 뜻.
  //     // 여기서 '=' 같다는 뜻이 아니라, 안에 넣겠다는 의미이다.

  //     // 비주얼 이동 버튼 스크롤 기능.
  //     const button = document.querySelector(".visual-bt")

  //     // 버튼에 addEventListener는 어떤 이벤트(행동)을 실행하겠다는 뜻이다.
  //     // 비주얼 클릭했을 때 스크롤이 이동하는 함수를 실행한다.
  //     button.addEventListener("click" , function(){
  //         // 버튼을 클릭했을 때, 실행해라.  scrollTosection()을
  //         // scrollTosection() #business 영역으로 이동 하라느 뜻.
  //       scrollTosection("#business");
  //     })

  //     function scrollTosection(sectionId){
  //         // sectionId로 지정된 요소를 찾아서 section 변수에 저장한다.
  //         const section = document.querySelector(sectionId);
  //             if(section){
  //                 // scrollIntoView()메서드는 부드러운 스크롤 효과를 적용하도록 지정합니다.
  //                 section.scrollIntoView({behavior:"smooth"})
  //             }
  //     }

  // }

  const button = document.querySelector(".visual-bt");
  button.addEventListener("click", function () {
    scrollTosection("#header");
  });
  function scrollTosection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // top 버튼 스크롤 기능
  // topBtn변수 선언 -> 원하는 id 값을 선택 -> 그 id에 어떤 이벤트를 줄 건데, "click" 했을 때 이벤트 발동.
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    // 조건문
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 9999,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        bottom: 0,
        behavior: "smooth",
      });
    }
  });

  //화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    // 만약
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });

  // 안내창 스크립트-1
  //   const body = document.querySelector("body");
  //   const modal = document.querySelector(".modal-wrap");
  //     modal.addEventListener("click", function () {
  //       modal.style.display = "none";
  //       fadeout(modal);
  //     });

  // 안내창 스크립트
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");

  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);

  modal.addEventListener("click", function () {
    modal.style.display = "none";

    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });
};

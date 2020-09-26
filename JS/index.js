$(document).ready(function() {
  $('.Offers__List').slick({
    slidesToShow: 4,
    margin: 10,
    speed: 200,
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow slick-disabled" aria-label="Previous" role="button" aria-disabled="true" style="display: block; box-shadow:0 0 5px 5px #00000033; border-radius: 50%">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block; box-shadow:0 0 5px 5px #00000033; border-radius: 50%" aria-disabled="false">Next</button>',
    useTransform: false,
    responsive: [{
        breakpoint: 1124,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

/*Navbar toggle */
var navb = document.getElementsByClassName("Navbar")[0];
var isclosed = true;

function myFunction(x) {
  x.classList.toggle("change");
  navb.classList.toggle("MobNav");
  navb.childNodes[1].classList.toggle("Mobile__Navbar__lang");
  navb.childNodes[1].childNodes[3].classList.toggle("mob__lang--name");
  navb.childNodes[1].childNodes[5].classList.toggle("mob__lang--flag");
  navb.childNodes[1].childNodes[1].childNodes[1].classList.toggle("mob__tooltiptext");
  navb.childNodes[1].childNodes[7].childNodes[1].classList.toggle("mob__tooltiptext");
  navb.childNodes[3].classList.toggle("Mobile__Navbar__buttons");
  navb.childNodes[3].childNodes[1].classList.toggle("Mobile__Navbar__button");
  navb.childNodes[3].childNodes[3].classList.toggle("Mobile__Navbar__button");
  navb.childNodes[3].childNodes[5].classList.toggle("Mobile__Navbar__button");
  navb.childNodes[3].childNodes[7].classList.toggle("Mobile__Navbar__button");
  navb.childNodes[3].childNodes[9].classList.toggle("Mobile__Navbar__button");
  navb.childNodes[1].classList.toggle("Navbar__lang");
  navb.childNodes[1].childNodes[3].classList.toggle("lang--name");
  navb.childNodes[1].childNodes[5].classList.toggle("lang--flag");
  navb.childNodes[1].childNodes[1].childNodes[1].classList.toggle("tooltiptext");
  navb.childNodes[1].childNodes[7].childNodes[1].classList.toggle("tooltiptext");
  navb.childNodes[3].classList.toggle("Navbar__buttons");
  navb.childNodes[3].childNodes[1].classList.toggle("Navbar__button");
  navb.childNodes[3].childNodes[3].classList.toggle("Navbar__button");
  navb.childNodes[3].childNodes[5].classList.toggle("Navbar__button");
  navb.childNodes[3].childNodes[7].classList.toggle("Navbar__button");
  navb.childNodes[3].childNodes[9].classList.toggle("Navbar__button");
  if (isclosed) {
    isclosed = false;
  } else {
    isclosed = true;
  }
}

function onresizenav() {
  var size = window.innerWidth;
  var tgl = document.getElementsByClassName("Toggle")[0];
  if (size >= 730.037 && !isclosed) {
    myFunction(tgl);
  }
}
window.addEventListener('resize', onresizenav);


/* Language changer */
function lang__change() {
  var test = $(".lang__right--arrow");
  if (test[0].childNodes[1].className == "mob__tooltiptext") {
    var next = $(".mob__tooltiptext");
    var last = $(".mob__lang--name");
    var flag = $(".mob__lang--flag");
    next[0].childNodes[1].innerHTML = last[0].innerHTML;
    last[0].innerHTML = next[1].childNodes[1].innerHTML;
    next[1].childNodes[1].innerHTML = next[0].childNodes[1].innerHTML;
    next[0].childNodes[3].setAttribute("src", flag[0].attributes.src.value);
    flag[0].setAttribute("src", next[1].childNodes[3].attributes.src.value);
    next[1].childNodes[3].setAttribute("src", next[0].childNodes[3].attributes.src.value);
  } else {
    var next = $(".tooltiptext");
    var last = $(".lang--name");
    var flag = $(".lang--flag");
    var mob__last = $(".mob__lang--name");
    var mob__flag = $(".mob__lang--flag");
    next[0].childNodes[1].innerHTML = last[0].innerHTML;
    last[0].innerHTML = next[1].childNodes[1].innerHTML;
    next[1].childNodes[1].innerHTML = next[0].childNodes[1].innerHTML;
    next[0].childNodes[3].setAttribute("src", flag[0].attributes.src.value);
    flag[0].setAttribute("src", next[1].childNodes[3].attributes.src.value);
    next[1].childNodes[3].setAttribute("src", next[0].childNodes[3].attributes.src.value);
  }
}

/* Search viech element color change on click */

function change__search__li(n) {
  var li = $(".Search__li");
  for (var index = 0; index < li.length; index++) {
    li[index].classList.remove("Search__li--selected");
  }
  li[n].classList.add("Search__li--selected");
}


/* start and finish changer */

function change__destinations() {
  var start = $("#Search__Information--SPoint");
  var finish = $("#Search__Information--FPoint");
  var temp = start.val();
  start.val(finish.val());
  finish.val(temp);
}

/* Search select lists source:w3scools*/
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "Search__Type": */
x = document.getElementsByClassName("Search__Type");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });

    /*Set first one as selected */
    if (j == 0) {
      c.classList.add("same-as-selected");
    }

    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


/* Offers carousel */
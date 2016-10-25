    var menuButton = document.querySelector('#menu-button');
    var asideBar = document.querySelector('aside');
    var main = document.querySelector('main');
    var navLinks = document.querySelector('.nav__links');

    menuButton.onclick = function(){
        asideBar.classList.toggle('active');
    };

    asideBar.onclick = function(){
        asideBar.classList.toggle('active');
    }

    main.onclick = function(){
        if (asideBar.classList.value === 'active' ) {
            asideBar.classList.remove('active')
        };
    };

    

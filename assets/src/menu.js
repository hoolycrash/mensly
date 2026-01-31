function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const button = document.getElementById('hamburgerbutton');

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        button.innerHTML = `menu_open`;  // Menu is open
        button.classList.add('activerailingicon');
    } else {
        button.innerHTML = `menu`;  // Menu is closed
        button.classList.remove('activerailingicon');
    }
}


function closeMenu() {
    document.querySelector('.nav-menu').classList.remove('show');
    document.getElementById('hamburgerbutton').innerHTML = `-`;
    document.getElementById('hamburgerbutton').classList.remove('activerailingicon');
}

window.onload = () => {
    const navItems = [
        { icon: 'menu_book_2', text: 'Speiseplan', link: 'index.html' },
        { icon: 'near_me', text: 'Karte', link: 'map.html' },
        { icon: 'settings', text: 'Einstellungen', link: 'settings.html' },
        
    ];

    const navRail = document.querySelector('.nav-rail');
    const navMenu = document.querySelector('.nav-menu');

    
    let navLinksHTML = '';
    //let navLinksHTML = '<img src="./assets/logo.svg" class="logo">';
    navItems.forEach(item => {

        if (thissite === item.text) {
            navLinksHTML += `
            <a href="${item.link}" class="activelink">
                <div class="material-symbols-outlined railingicon activerailingicon">${item.icon}</div><br><span id="#NAV${item.text}">${item.text}</span>
            </a>
        `;
        } else {
            navLinksHTML += `
            <a href="${item.link}">
                <div class="material-symbols-outlined railingicon">${item.icon}</div><br><span id="#NAV${item.text}">${item.text}</span>
            </a>
        `;
        }
        
    });

    navRail.innerHTML = navLinksHTML;
   

  
};
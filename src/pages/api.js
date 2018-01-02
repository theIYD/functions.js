window.onload = () => {
    getFunctions('rootRef/functions1');
}

const navBtn = document.querySelector('.nav_btn');
const navBtnInside = document.querySelector('.nav_btn_inside');
const api_nav = document.querySelector('.api-nav');

navBtn.addEventListener('click', () => {
    if(api_nav.style.height === '0px') {
        api_nav.style.height = '250px';
    } else {
        api_nav.style.height = '0px';
    }
});

const list = document.querySelector('.api_list'); 
list.addEventListener('click', (e) => {
    var target = e.target; 
    while (target && target.parentNode !== list) {
        target = target.parentNode; 
        if(!target) { return; } 
    }
    if (target.tagName === 'LI'){
        api_nav.style.height = '0px';
    }
});

function card(method, category, desc, return_type) {
    let eachCard = document.createElement('div');
    let each_method = document.createElement('li');
    eachCard.className = 'card';
    eachCard.id = `${method.split('(')[0].replace(/`/, '')}`;
    eachCard.innerHTML = `
        <h4>${method.split('(')[0].replace(/`/, '')}</h4>
        <p><em>${category}</em></p><hr class="divide"><br>
        <p>${desc}</p>
        <p><em><strong>returns: </strong>${return_type}</em></p>
    `;
    
    each_method.innerHTML= `<a href="#${method.split('(')[0].replace(/`/, '')}">${method.split('(')[0].replace(/`/, '')}</a>`;

    document.querySelector('.card-wrap').appendChild(eachCard);
    document.querySelector('.api_list').appendChild(each_method);
}

function getFunctions(url) {
    var _0xf251=['\x68\x74\x74\x70\x73\x3a\x2f\x2f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73\x6a\x73\x2d\x65\x34\x66\x32\x36\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x69\x6f\x2e\x63\x6f\x6d','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73\x6a\x73\x2d\x65\x34\x66\x32\x36','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73\x6a\x73\x2d\x65\x34\x66\x32\x36\x2e\x61\x70\x70\x73\x70\x6f\x74\x2e\x63\x6f\x6d','\x31\x35\x37\x30\x36\x35\x34\x39\x31\x34\x31\x37','\x41\x49\x7a\x61\x53\x79\x43\x42\x38\x6d\x33\x30\x45\x79\x55\x43\x4b\x6c\x4f\x51\x32\x53\x36\x30\x4e\x78\x67\x56\x47\x63\x63\x39\x62\x54\x71\x6a\x74\x4b\x45','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73\x6a\x73\x2d\x65\x34\x66\x32\x36\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d'];(function(_0x429fdc,_0x5b23e5){var _0x4a09b4=function(_0x50d09a){while(--_0x50d09a){_0x429fdc['\x70\x75\x73\x68'](_0x429fdc['\x73\x68\x69\x66\x74']());}};_0x4a09b4(++_0x5b23e5);}(_0xf251,0x9a));var _0x1f25=function(_0x4bfdfc,_0x84a11d){_0x4bfdfc=_0x4bfdfc-0x0;var _0x3b3f33=_0xf251[_0x4bfdfc];return _0x3b3f33;};var config={'\x61\x70\x69\x4b\x65\x79':_0x1f25('0x0'),'\x61\x75\x74\x68\x44\x6f\x6d\x61\x69\x6e':_0x1f25('0x1'),'\x64\x61\x74\x61\x62\x61\x73\x65\x55\x52\x4c':_0x1f25('0x2'),'\x70\x72\x6f\x6a\x65\x63\x74\x49\x64':_0x1f25('0x3'),'\x73\x74\x6f\x72\x61\x67\x65\x42\x75\x63\x6b\x65\x74':_0x1f25('0x4'),'\x6d\x65\x73\x73\x61\x67\x69\x6e\x67\x53\x65\x6e\x64\x65\x72\x49\x64':_0x1f25('0x5')};firebase['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x41\x70\x70'](config);

    const db = firebase.database();
    let ref = firebase.database().ref(url);
    ref.on('value', (snapshot) => {
        snapshot.forEach(child => {
            //console.log(child.val());
            card(child.val().title, child.val().topic, child.val().description, child.val().return_type);
        });
    });
}
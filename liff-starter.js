window.onload = function (e) {
    liff.init(function () {
        makeList();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('home').src = 'bg.jpg';
    } else {
        makeList();
    }
    }
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeList(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    };
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('vids'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    } else {
        liff.closeWindow();
    }
}
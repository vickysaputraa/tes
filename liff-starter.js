window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};


function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
        document.getElementById('textx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dGV4dCZ0ZXh0PVRlc3Rpbmc=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('imagex').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9aW1hZ2UmaW1nPWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5n')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('videox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dmlkZW8mb2N1PWh0dHBzOi8vdGlueXVybC5jb20veThvZzNvcjUmcGl1PWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5n')
            }]).then(function () {
                liff.closeWindow();
            });
        });
    } else {
        makeText();
        makeImage();
        makeVideo();
    }
    }
//line://app/1602687308-DgedGk9A?type=text&text=Testing
//function buttText(){
  //  document.getElementById('textx').addEventListener('click', function () {
    //    liff.sendMessages([{
      //      type: 'text',
        //    text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dGV4dCZ0ZXh0PVRlc3Rpbmc=')
//        }]).then(function () {
  //          liff.closeWindow();
    //    });
//    }
//}

//function buttImage(){
  //  document.getElementById('imagex').addEventListener('click', function () {
    //    liff.sendMessages([{
      //      type: 'text',
        //    text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9aW1hZ2UmaW1nPWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5n')
//        }]).then(function () {
  //          liff.closeWindow();
    //    });
//    }
//}

//function buttVideo(){
  //  document.getElementById('videox').addEventListener('click', function () {
    //    liff.sendMessages([{
      //      type: 'text',
        //    text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dmlkZW8mb2N1PWh0dHBzOi8vdGlueXVybC5jb20veThvZzNvcjUmcGl1PWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5n')
//        }]).then(function () {
  //          liff.closeWindow();
    //    });
//    }
//}

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

function makeText(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
const
    sd = document.getElementById('splash-c')
ld = document.getElementById('learn-c')
dd = document.getElementById('download-c')
cd = document.getElementById('contribute-c')

function disp(e) {
    switch (e) {
        case 's':
            dispHelp('splash-c')
            break
        case 'l':
            dispHelp('learn-c')
            break
        case 'd':
            dispHelp('download-c')
            break
        case 'c':
            dispHelp('contribute-c')
            break
    }
}
function dispHelp(e) {
    sd.style.display = 'none'
    ld.style.display = 'none'
    cd.style.display = 'none'
    dd.style.display = 'none'
    document.getElementById(e).style.display = 'block'
}

disp('s')
const buttonInput = function() {
    let image = document.getElementById('crops-top-image'), opacity;

    if (image.style.opacity == 1) {
        opacity = 0;
    } else {
        opacity = 1;
    }

    image.setAttribute(`style`, `
        opacity: ${opacity};
    `);

    console.log('hey this works! 😚')
}

function hey(user, password) {
    console.log(`${user} is de user en ${password} is het wachtwoord`)
}

const obj = {
    width: 100,
    height: 50
}



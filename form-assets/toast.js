const toasts = document.getElementById('toasts');

document.addEventListener('DOMContentLoaded', () => {
    createNotification();
});




function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = "ZenFitness";
    toasts.appendChild(notif);

}



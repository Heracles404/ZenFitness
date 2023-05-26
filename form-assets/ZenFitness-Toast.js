const toasts = document.getElementById('toasts');

document.addEventListener('DOMContentLoaded', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = "ZenFitness";
    toasts.appendChild(notif);

    // Delay before adding the entrance animation class
    setTimeout(() => {
        notif.classList.add('toast-enter');
    }, 100);

    setTimeout(() => {
        notif.classList.remove('toast-enter');
        notif.classList.add('toast-exit');
        
    }, 100000); // Adjust the delay before the exit animation starts here
}


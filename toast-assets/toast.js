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

        // Delay before removing the notification element
        setTimeout(() => {
            notif.remove();
        }, 500); // Adjust the duration of the exit animation here
    }, 2000); // Adjust the delay before the exit animation starts here
}
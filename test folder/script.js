document.getElementById('openDialog').addEventListener('click', function() {
    document.getElementById('dialog').classList.remove('hidden');
});

document.getElementById('closeDialog').addEventListener('click', function() {
    document.getElementById('dialog').classList.add('hidden');
});

// Close the dialog when clicking outside of the dialog content
// window.onclick = function(event) {
//     const dialog = document.getElementById('dialog');
//     if (event.target === dialog) {
//         dialog.classList.add('hidden');
//     }
// };

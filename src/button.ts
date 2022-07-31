const button = document.querySelector('#buttonId')!; ////! to remove error from button.addEventListener or write button?.addEventListener

button.addEventListener('click', () => {
  console.log('click');
});

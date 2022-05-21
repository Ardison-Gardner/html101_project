function showHide() {
  let linkSection = document.getElementById('links')
  let btn = document.getElementById('showHideLinks')
  if (linkSection.style.visibility === 'hidden') {
    linkSection.style.visibility = 'visible'
    btn.value = 'Hide Links'
  } else {
    linkSection.style.visibility = 'hidden'
    btn.value = 'Show Links'
  }
}

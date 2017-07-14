window.onload = () => {
  const preElement = document.getElementsByTagName('pre')[0]
  const button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', () => {
    clipboard.copy({
      'text/html': preElement.innerHTML
    })
    alert('copied')
  })
}

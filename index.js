function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let lis = document.getElementById('nested').querySelectorAll('div.target')[0]

  return lis
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    let theNum = parseInt(lis[i].innerHTML)
    theNum += n
    lis[i].innerHTML = theNum.toString()
  }
  return lis
}

function deepestChild() {
  let current = document.querySelectorAll('div#grand-node div div div div')[0]
  return current

}

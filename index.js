const changingH1Text = function(){
    let h1Title = document.getElementsByTagName('h1')
    h1Title[0].innerText = "WebShop From Áron"
}
changingH1Text()

const changingBackgroundColor = function(){
    document.body.style.backgroundColor = "lightblue"
}
changingBackgroundColor()

const footerText = function(){
    let footer = document.getElementById('foot')
    footer.innerHTML = "Áron's WebShop <br>Not Hungary, Not Debrecen "
}
footerText()

const randomPriceColor = function(){
    let elementsWithPriceClass = document.getElementsByClassName('price')
    for (let i = 0; i < elementsWithPriceClass.length; i++){
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    elementsWithPriceClass[i].style.color = "#" + randomColor;    
    }
  }
  randomPriceColor()

  const addCssClassToLinks = function(){
    let arrayOfLinks = document.getElementsByTagName('a')
    for (let i = 0; i < arrayOfLinks.length; i++){
    arrayOfLinks[i].classList = "link"
    }
  }
  addCssClassToLinks()

  const imgVisibiltyToggle = function(){
    let imagesOnTheSite = document.getElementsByTagName("img")
    for (let i = 0; i < imagesOnTheSite.length; i++){
        imagesOnTheSite[i].classList.toggle("hidden")
    }
}
imgVisibiltyToggle()

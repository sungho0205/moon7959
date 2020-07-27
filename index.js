Array.from(document.querySelectorAll('.pill')).forEach(el => {
    el.addEventListener('click', e => {
        let bg = e.target.style.backgroundColor, color = e.target.style.color
        document.querySelector('.about-skilled h2').classList.add('active')
        document.querySelector('.about-skilled h2').innerHTML = e.target.getAttribute('data-lang')
        switch (e.target.getAttribute('data-lang')) {
            case 'JavaScript':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="70"></div><br>자바스크립트는 웹 브라우저 내에서 주로 사용되는 스크립트 프로그래밍 언어입니다. jQuery 등을 최대한 사용하지 않으려고 노력하고 있습니다. 이 페이지 역시 순수 자바스크립트로만 이루어졌습니다. <a href="https://ko.wikipedia.org/wiki/자바스크립트" target="_blank">위키백과</a>'
                break
            case 'TypeScript':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="30"></div><br>타입스크립트는 마이크로소프트에서 개발, 유지하고 있고, 엄격한 문법이 사용되는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어입니다. 참고로 저는 모든 변수의 타입을 any로 선언하는 능력을 지니고 있습니다. <a href="https://ko.wikipedia.org/wiki/타입스크립트" target="_blank">위키백과</a>'
                break
            case 'HTML':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="99.9"></div><br>HTML은 솔직히 기본이죠 ㅎㅎ 물론 ejs도 합니다. <a href="https://ko.wikipedia.org/wiki/HTML" target="_blank">위키백과</a>'
                break
            case 'CSS':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="90"></div><br>CSS는 마크업 언어가 실제 표시되는 방법을 기술하는 언어입니다. 자바스크립트와 마찬가지로 Semantic UI나 Bootstrap 같은 프레임워크를 쓰지 않으려고 최대한 노력하고 있고, 이 페이지도 순수 CSS로 직접 구현했습니다. <a href="https://ko.wikipedia.org/wiki/종속형_시트" target="_blank">위키백과</a>'
                break
            case 'Python':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="40"></div><br>파이썬은 플랫폼에 독립적이며 인터프리터식, 객체지향적, 동적 타이핑 대화형 언어입니다. 라고 위키백과가 그러네요 ㅎㅎ 파이썬은 거의 접었습니다! (와!) <a href="https://ko.wikipedia.org/wiki/파이썬" target="_blank">위키백과</a>'
                break
            default:
                document.querySelector('.about-skilled h2').classList.remove('active')
                document.querySelector('.about-skilled h2').innerHTML = '언어를 클릭해서 자세히 알아보세요!'
                break
        }
        document.querySelector('.about-skilled .desc .progress').innerHTML = `<div class="progress-bar" style="background-color: ${bg}; color: ${color};"><div class="number">${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%</div></div>`
        setTimeout(() => {
            document.querySelector('.about-skilled .desc .progress .progress-bar').style.width = `${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%`
        }, 100)
    })
})
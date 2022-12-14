import * as React from "react";
import "./MainPageText.scss";

function MainPageText() {
  return (
    <div class="main__page-class">
      <div class="main__page-text">
      {/* &emsp; */}
      <p className="main_page-par"><b className="main_page-dates">1900-17</b>  Механико-оптическое и часовое отделение Ремесленного училища цесаревича
Николая</p>
      <p className="main_page-par"><b className="main_page-dates">1917-20</b>  Петроградское ремесленное училище по механико-оптическому и часовому делу
и Профшкола точной механики, оптики и часового производства</p>
      <p className="main_page-par"><b className="main_page-dates">1920-30</b>  Ленинградский техникум точной механики и оптики</p>
      <p className="main_page-par"><b className="main_page-dates">1930-91</b>  Ленинградский институт точной механики и оптики, широко известный в стране
и мире под аббревиатурой ЛИТМО (Ленинградский ордена Трудового Красного
Знамени институт точной механики и оптики; с 1980)</p>
      <p className="main_page-par"><b className="main_page-dates">1991-94</b>  Санкт-Петербургский институт точной механики и оптики</p>
      <p className="main_page-par"><b className="main_page-dates">1994-2003</b>  Санкт-Петербургский государственный институт точной механики и оптики
(технический университет)</p>
      <p className="main_page-par"><b className="main_page-dates">2003-2011</b>  Санкт-Петербургский государственный университет информационных техноло-
гий, механики и оптики</p>
      <p className="main_page-par"><b className="main_page-dates">c 2011</b>  Санкт-Петербургский национальный исследовательский университет информа-
ционных технологий, механики и оптики (Университет ИТМО)</p>
      <span class="main__page__header-link-2"><a href="http://is.ifmo.ru/main/alumni.pdf">See more</a></span>
        <div class="main__page-header"></div>
      </div>
    </div>
  );
}

export default MainPageText;

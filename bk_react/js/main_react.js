function Baskin(){
    return(
        <>
            <SkipComponent/>
            <Modal/>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )
}

function SkipComponent(){
    return(
        <>
            <ul className="skip">
                <li><a href="#">콘텐츠 바로가기</a></li>
            </ul>
        </>
    );
}

function Modal(){
    return(
        <>
            <div class="modal_back"></div>
        </>
    );
}

function Header(){
    return (
        <>
            <header id="header">
                <h1><a href="#"><img src="img/logo.png" alt="logo" /></a></h1>
                <div id="menu">
                    <a href="#">FOM</a>
                    <a href="#">STORE</a>
                    <a href="#">단체주문</a>
                    <button class="hm"><img src="img/btn_menu.png" alt="btn" /></button>
                </div>
            </header>
        </>
    );
}

function Content(){
    return (
        <>
            <nav class="menu">
	 <div class="head">
	   <button class="cross">&#735;</button>
	 <ul class="cf">
	   <li class="fr"><a href="#">LOGIN</a></li>
	     <li><a href="#">JOIN</a></li>
		   <li class="search"><a href="#"><img src="img/btn_search.png" alt="im" /></a></li>
	 </ul>
	 </div>
	  <ul class="mm">
         <li><a href="#">BRAND<img src="img/ico_nav.png" alt="menu" /></a>
            <ul class="sub">
                <li><a href="#">MENU1</a></li>
                <li><a href="#">MENU2</a></li>
            </ul>
         </li>
		 
		   <li><a href="#">PRODUCT<img src="img/ico_nav.png" alt="menu" /></a>
            <ul class="sub">
                <li><a href="#">MENU1</a></li>
                <li><a href="#">MENU2</a></li>
            </ul>
         </li>
		 
				   <li><a href="#">STORE<img src="img/ico_nav.png" alt="menu" /></a>
            <ul class="sub">
                <li><a href="#">MENU1</a></li>
                <li><a href="#">MENU2</a></li>
            </ul>
         </li>
		 
		 
		 		   <li><a href="#">EVENT<img src="img/ico_nav.png" alt="menu" /></a>
            <ul class="sub">
                <li><a href="#">MENU1</a></li>
                <li><a href="#">MENU2</a></li>
            </ul>
         </li>
		 
		 		   <li><a href="#">ABOUT<img src="img/ico_nav.png" alt="menu" /></a>
            <ul class="sub">
                <li><a href="#">MENU1</a></li>
                <li><a href="#">MENU2</a></li>
            </ul>
         </li>
		 
		
		</ul>
	 </nav>

    <div id="main">
        <a href="#"><img src="img/banner.jpg" alt="b" /></a>
    </div>

    <div id="slide">
        <ul class="cf main_banner">
            <li><img src="img/b1.png" alt="b1" /></li>
            <li><img src="img/b2.png" alt="b1" /></li>
            <li><img src="img/b3.png" alt="b1" /></li>
        </ul>
    </div>

    <section id="list">
        <h3>BR EVENT</h3>
        <ul class="cf slick_">
            <li><a href="#"><img src="img/list1.png" alt="lst1" />
             <span class="im"><img src="img/stit_store.gif" alt="sit_store" /></span>
             <span class="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
             <span class="txt1">상시진행</span>
            </a></li>
            <li><a href="#"><img src="img/list2.png" alt="lst1" />
                <span class="im"><img src="img/stit_store.gif" alt="sit_store" /></span>
                <span class="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
                <span class="txt1">상시진행</span>
               </a></li>
               <li><a href="#"><img src="img/list1.png" alt="lst1" />
             <span class="im"><img src="img/stit_store.gif" alt="sit_store" /></span>
             <span class="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
             <span class="txt1">상시진행</span>
            </a></li>
        </ul>
    </section>



    <section id="list1">
        <h3>BR MENU</h3>
        <div class="ban">
            <img src="img/listgroup.png" alt="ban" />
        </div>

      </section>  

      <section id="store">
        <h3>BR STORE</h3>
          <img src="img/fban.jpg" alt="fban" />
     </section>   


     <section id="deli">
        <h3>HAPPY ORDER & DELIVERY</h3>
          <img src="img/deli.jpg" alt="fban" />
     </section>   

     <section id="sns">
        <h3>SNS</h3>
        <ul>
          <li><a href="#"><img src="img/f.png" alt="f" /></a></li>
          <li><a href="#"><img src="img/t.png" alt="f" /></a></li>
          <li><a href="#"><img src="img/b.png" alt="f" /></a></li>
          <li><a href="#"><img src="img/u.png" alt="f" /></a></li>
          <li><a href="#"><img src="img/i.png" alt="f" /></a></li>
        </ul>
       
     </section> 

     <h4 class="line">

        <a href="#"><img src="img/tt.png" alt="tt" /></a>
     </h4>

     <div id="listimg">
     <ul class="cf">
        <li><a href="#"><img src="img/ff.png" alt="flist" /></a></li>
        <li><a href="#"><img src="img/ff.png" alt="flist" /></a></li>
        <li><a href="#"><img src="img/ff.png" alt="flist" /></a></li>
        <li><a href="#"><img src="img/ff.png" alt="flist" /></a></li>
     </ul>
     </div>
        </>
    );
}

function Footer(){
    return (
        <>
            <footer id="footer">
        <nav id="fmenu">
            <ul class="cf">
                <li><a href="#">채용문의</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">윤리신고센터</a></li>
                <li><a href="#" class="pr">개인정보처리방침</a></li>
                <li><a href="#">영상정보처리기기운영관리방침</a></li>
                <li><a href="#">거래희망회사 사전등록</a></li>
            </ul>
        </nav>

        <div class="foot">
            <ul class="cf">
             <li><a href="#"><img class="fs" src="img/foot1.png" alt="ff1" />
            <span>해피포인트</span></a></li>
            <li class="m1"><a href="#"><img class="fs" src="img/foot2_1.png" alt="ff1" />
                <span>해피포인트</span></a></li>
            <li><a href="#"><img class="fs" src="img/foot3.png" alt="ff1" />
                <span>해피포인트</span></a></li>
            <li class="m2"><a href="#"><img class="fs" src="img/foot4.gif" alt="ff1" />
                 <span>해피포인트</span></a></li>
            <li><a href="#"><img class="fs" src="img/foot5_1.png" alt="ff1" />
                 <span>해피포인트</span></a></li>  
            <li><a href="#"><img class="fs" src="img/foot6.gif" alt="ff1" />
                 <span>해피포인트</span></a></li>                                                    
            </ul>
        </div>
		<div class="customer">
		<p class="center"><a href="#">고객센터</a></p>
				<p class="tel"><a href="#">080-222-1234</a></p>
		</div>
		
		<div class="site">
		<button type="button">FAMILY SITE</button>
		<ul>
		<li><a href="#">aaaa</a></li>
				<li><a href="#">bbbb</a></li>
						<li><a href="#">cccc</a></li>
								<li><a href="#">ddddd</a></li>
										<li><a href="#">eeeee</a></li>
		</ul>
		
		</div>
		<div class="info">
		<div class="foot cf">
		<p class="info1">사업자 등록번호 : 303-81-09535</p>
		<p class="info2">비알코리아(주) 대표이사 도세호</p>
			<address>
			서울특별시 서초구 남부순환로 2620</address>	
			
		<p class="info3">개인정보관리책임자 : 김경우</p>
		
		</div>
		</div>
		
     </footer>
        </>
    )
}




ReactDOM.render(
    <Baskin/>,
    document.getElementById("root")
);
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="co-main-container">
        <!-- header area img start -->

        <header class="header-part">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-1 col-md-2">
                        <div class="header-img-area">
                            <img src="./gallery/edu-bd-logo.png" alt="photo">
                        </div>
                    </div>
                    <div class="col-lg-11 col-md-10">
                        <div class="head-box">
                            <h1>চাকিনীয়া সরকারি প্রাথমিক বিদ্যালয়</h1>
                            <div class="school-det">
                                <h4>চাকিনীয়া, খানসামা , দিনাজপুর</h4>
                                <h5>স্থাপিতঃ ১১-১১-১১১১</h5>
                                <h5>
                                    কোড নং: ১২১২
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- header area img start -->

        <!-- menubar area start -->
        <section class="menubar-section ">

            <div class="navbar-menu">

                <div class="topnav" id="myTopnav">
                    <a href="#home" class="active">প্রচ্ছদ</a>
                    <a href="#news">প্রশাসন</a>
                    <a href="#contact">শিক্ষার্থীদের তথ্য</a>

                    <a href="#about">ভর্তি</a>
                    <a href="#about">ডাউনলোড</a>
                    <a href="#about">রুটিন</a>
                    <a href="#about">ফলাফল</a>
                    <a href="#about">নোটিশ</a>
                    <a href="#about">ব্লগ</a>
                    <a href="#about">গ্যালারি</a>
                    <a href="#about">বিভিন্ন তথ্য</a>
                    <a href="#about">যোগাযোগ</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>


            </div>

        </section>

    </div>


        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer>

        <div class="footer-content d-flex justify-content-between">
            <p href="#">All © rights reserved md rejaul islam reja</P>
            <p>Design & Developed BY <a href="#">REJAUL ISLAM</a></p>
        </div>
    </footer>

        
        `
    }
}
customElements.define('my-footer', MyFooter)
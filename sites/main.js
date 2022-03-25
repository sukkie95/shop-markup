
function changeImage() {
        var image = document.getElementById('shoe1');
       
            image.src = "photos/womanshoe1.jpg";

            var image = document.getElementById('shoe2');
       
            image.src = "photos/womanshoe2.jpeg";


            var image = document.getElementById('shoe3');
       
            image.src = "photos/womanshoe3.jpg";
                              var changeHref2 = document.getElementById("seeMore").href = "women.html#shoes";

     
    }
function changeImage2() {
        var image = document.getElementById('shoe1');
       
            image.src = "photos/menshoe1.jpg";

            var image = document.getElementById('shoe2');
       
            image.src = "photos/menshoe2.jpg";

            var image = document.getElementById('shoe3');
            image.src = "photos/menshoe3.jpg"

              var changeHref = document.getElementById("seeMore").href = "men.html#shoes";





            
    }
function changeImage3() {
        var image = document.getElementById('shoe1');
       
            image.src = "photos/menshoe1.jpg";

            var image = document.getElementById('shoe2');
       
            image.src = "photos/menshoe2.jpg";

            var image = document.getElementById('shoe3');
            image.src = "photos/menshoe3.jpg";


            
    }

  



    function changes1(){
   let change_img =   document.getElementById("change_img");
   change_img.src = "photos/pinkdress.jpeg";
   let change_price1 = document.getElementById("change_price");
   change_price1.innerHTML ="25$";
    }
    function changes2(){
   let change_img =   document.getElementById("change_img");
   change_img.src = "photos/shirt.jpeg";
   let change_price2 = document.getElementById("change_price");
   change_price2.innerHTML ="15$";
    }

    function changes3(){
   let change_img2 =    document.getElementById("change_img");
   change_img2.src = "photos/shoeBoard.jpg";
   let change_price3 = document.getElementById("change_price");
   change_price3.innerHTML ="20$";
    }



    function add()
    {
        a = Number(document.getElementById('QTY').value);
        b = Number(document.getElementById('QTY').value);
        c = a * b;
    
        document.getElementById('TOTAL').value = c;
    }


    function clickid(){
        var clickid = document.getElementById("clickid");
        clickid.style.zIndex = "0";

    }

    function clickid2(){
        var clickid = document.getElementById("clickid");
        clickid.style.zIndex = "1";

    }
    var change_faq = document.getElementById("faq-text1");

    function change_faq1(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ="You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account."

    }


    function change_faq2(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ="You can easily change all your information on your account.  Go to login page (https://hytestshop.dev.eficode.fi/login) and log in, then click “my account” and “edit”. Here you can change all your contact information.";

    }


    function change_faq3(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML =" If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product.";

    }
    function change_faq4(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML =" If you want to return a product, please contact hytest@hytest.fi";

    }
    function change_faq5(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ="costs are dependent on your location and products on your order. Some products need to be shipped in dry ice. These dry ice shipments have a slightly higher shipping fee. Our online store shows the shipping fee and shipping cost automatically on the checkout.";

    }
    function change_faq6(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ="We will send you the tracking code of the shipment when the parcel has been sent.  ";

    }
    function change_faq7(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ="You can use all the major credit cards."

    }
    function change_faq8(){
        var change_faq = document.getElementById("faq-text1");
        change_faq.innerHTML ='Sign in to your account and go to “my account”. On “my account” you can change all your contact information.'

    }


    function arrivals_men(){
        let arr_1 =   document.getElementById("arr_1");
        let arr_2 =   document.getElementById("arr_2");
        let arr_3 =   document.getElementById("arr_3");
        let arr_4 =   document.getElementById("arr_4");
        let arr_5 =   document.getElementById("arr_5");
        let arr_6 =   document.getElementById("arr_6");

        let arr_text1 =   document.getElementById("arr_text1");
        let arr_text2 =   document.getElementById("arr_text2");
        let arr_text3 =   document.getElementById("arr_text3");
        let arr_text4 =   document.getElementById("arr_text4");
        let arr_text5 =   document.getElementById("arr_text5");
        let arr_text6 =   document.getElementById("arr_text6");
        arr_text1.innerHTML =" Mens's white sweater";
        arr_text2.innerHTML =" Mens's blue T-shirt";
        arr_text3.innerHTML =" Mens's bloose";
        arr_text4.innerHTML =" Mens's bloose";
        arr_text5.innerHTML =" Mens's bloose";
        arr_text6.innerHTML =" Mens's bloose";
        arr_1.src = "photos/new1.png";
        arr_2.src = "photos/new2.jpg";
        arr_3.src = "photos/new3.jpg";
        arr_4.src = "photos/new4.jpg";
        arr_5.src = "photos/new5.png";
        arr_6.src = "photos/new6.jpg";


    }


    function arrivals_women(){
        let arr_1 =   document.getElementById("arr_1");
        let arr_2 =   document.getElementById("arr_2");
        let arr_3 =   document.getElementById("arr_3");
        let arr_4 =   document.getElementById("arr_4");
        let arr_5 =   document.getElementById("arr_5");
        let arr_6 =   document.getElementById("arr_6");
        let arr_text11 =   document.getElementById("arr_text1");
        let arr_text22 =   document.getElementById("arr_text2");
        let arr_text33 =   document.getElementById("arr_text3");
        let arr_text44 =   document.getElementById("arr_text4");
        let arr_text55 =   document.getElementById("arr_text5");
        let arr_text66 =   document.getElementById("arr_text6");
        arr_text11.innerHTML ="Woman's brown sweater ";
        arr_text22.innerHTML =" Woman's gray sleeve ";
        arr_text33.innerHTML =" Woman's gray sleeve ";
        arr_text44.innerHTML =" Woman's brown coat";
        arr_text55.innerHTML =" Woman's dark gray pants";
        arr_text66.innerHTML =" Woman's dark green jacket";

   
        arr_1.src = "photos/sweater1.jpg";
        arr_2.src ="photos/sweater2.jpg";
        arr_3.src = "photos/coat.jpg";
        arr_4.src = "photos/pants.jpg";
        arr_5.src = "photos/coat2.jpg";
        arr_6.src = "photos/sleeve.jpeg";


    }
var arr_img=[
    "https://kuroko-no-basket-shop.com/cdn/shop/articles/f99b4dee531e145a95c3f0c01c9f1e30_1024x1024.png?v=1626442222",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/10-Strongest-Kurokos-Basketball-Characters-Ranked.jpg",
    "https://i.ytimg.com/vi/HU4i2B8L0iw/maxresdefault.jpg",
    "https://vignette.wikia.nocookie.net/kurokonobasuke/images/8/8f/Kagami_and_Midorima_jump_to_get_the_shot.png/revision/latest?cb=20140508143034",
    "https://i.pinimg.com/736x/5c/3c/ef/5c3cef3ac6d47215abff2d83d99e249e.jpg",
    "https://medias.spotern.com/spots/w640/68/68745-1532336916.jpg",
    "https://cdn.shopify.com/s/files/1/0532/5353/7968/files/Kagami_enters_the_Zone_again.png?v=1613985688",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/Collage-Maker-18-Aug-2022-1019-AM.jpg"
];
var i=0;
function changeImage(){
    document.getElementById("image_1").src=arr_img[i];
    i++;
    if(i==arr_img.length){
        i=0;
    }
    var red_color=Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgba(${red_color},${Math.floor(
        Math.random()*256
    )},${Math.floor(Math.random()*256)},0.5)`;
}
    
   
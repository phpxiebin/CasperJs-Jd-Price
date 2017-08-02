var brower = require('casper').create();
var productPrice;

console.log('1.打开浏览器');
brower.start();

var url = 'http://item.jd.com/1313309.html';
console.log('2.打开页面' + url);
brower.thenOpen(url);

console.log('3.搜索价格');
brower.then(
    function getPrice() {
        productPrice = brower.evaluate(
            function getPriceFromPage() {
                return price = document.getElementsByClassName('p-price')[0].innerText.replace('￥', '').trim();
            }
        );
    }
);

console.log('4.查看价格');
brower.then(
    function outputProductPrice() {
        console.log('京东价格：' + productPrice);
        brower.exit();
    }
);

brower.run();

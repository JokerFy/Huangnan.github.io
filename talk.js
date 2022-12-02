$(function() {
    $('#yes').click(function(event) {
        modal('带上你的眼镜我们走。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('票都买好了你再说一遍？！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('你是不是欠揍了', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('小朋友', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('烟花易冷', H);
}

function H() {
    modal('抓紧时间', I);
}

function I() {
    modal('烟花马上开场！', J)
}

function J() {
    modal('gogogo，吃鸡去', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}

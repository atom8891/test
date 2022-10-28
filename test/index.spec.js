const assert = require('assert');
const quixote = require("quixote");

describe('Check if ', function () {

    let frame;
    let header;
    let headerContent;

    before(function (done) {
        frame = quixote.createFrame({
            stylesheet: "/base/src/index.css"
        }, done);
    });

    after(function () {
        frame.remove();
    });

    beforeEach(function () {
        frame.reset();

        header = frame.add(
            "<div class='title'><div id='logo'></div></div>",
            "header object"
        );

        headerContent = frame.get("#logo");
    });


    it('logo is uppercase', function () {
        assert.equal(headerContent.getRawStyle('text-transform'), "uppercase", "text is uppercase");
    });

    it('logo is red', function () {
        assert.equal(headerContent.getRawStyle('color'), 'rgb(255, 0, 0)', "text color is red");
    });

    it('logo is properly positioned', function () {
        assert.equal(headerContent.getRawPosition().top, 10, "text is 10px from top");
    });

});

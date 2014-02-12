var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ 0, '*' ];

    // func nb-block(name, nodeset options) : xml
    M.f0 = function f0(m, c0, i0, l0, a0, v0, v1) {
        v1 = (v1 === undefined) ? [] : v1;
        var r0 = '';

        r0 += m.a(m, m.n(j0, (yr.externals['nb-wrap'])(v0, v1)), 'nb', a0)

        return r0;
    };

    var j1 = [ 0, 'href' ];

    var j2 = [ 0, 'type' ];

    // func nb-button(nodeset options) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v2) {
        v2 = (v2 === undefined) ? [] : v2;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v3 = r1;

        r0 += closeAttrs(a0);
        if (cmpSN("file", m.n(j2, v2))) {
            r0 += m.f('f0', c0, i0, l0, a0, "buttonAttach", (yr.externals['nb-extend'])(yr.object2nodeset( v3 ), v2));
        } else if (nodeset2boolean( m.n(j1, v2) )) {
            r0 += m.f('f0', c0, i0, l0, a0, "buttonLink", (yr.externals['nb-extend'])(yr.object2nodeset( v3 ), v2));
        } else {
            r0 += m.f('f0', c0, i0, l0, a0, "button", (yr.externals['nb-extend'])(yr.object2nodeset( v3 ), v2));
        }

        return r0;
    };

    // func nb-popup-menu(nodeset options) : xml
    M.f2 = function f2(m, c0, i0, l0, a0, v4) {
        v4 = (v4 === undefined) ? [] : v4;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v5 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "popupMenu", (yr.externals['nb-extend'])(yr.object2nodeset( v5 ), v4));

        return r0;
    };

    // func nb-popup(nodeset options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v6) {
        v6 = (v6 === undefined) ? [] : v6;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v7 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "popup", (yr.externals['nb-extend'])(yr.object2nodeset( v7 ), v6));

        return r0;
    };

    // func nb-popup-modal(nodeset options) : xml
    M.f4 = function f4(m, c0, i0, l0, a0, v8) {
        v8 = (v8 === undefined) ? [] : v8;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "modal" ] = "true";
        r2[ "width" ] = "auto";
        r2[ "height" ] = "auto";
        r2[ "minHeight" ] = "auto";
        r1[ "data-nb" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "none" ] = "none";
        r1[ "close" ] = r2;
        var v9 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "modalPopup", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v9 ), v8));

        return r0;
    };

    // func _nb-popup-content(nodeset content) : xml
    M.f5 = function f5(m, c0, i0, l0, a0, v10) {
        v10 = (v10 === undefined) ? [] : v10;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-popup__content" + "\">";
        r0 += nodeset2scalar( v10 );
        r0 += "</div>";

        return r0;
    };

    // func _nb-popup-title(nodeset title) : xml
    M.f6 = function f6(m, c0, i0, l0, a0, v11) {
        v11 = (v11 === undefined) ? [] : v11;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-popup__title" + "\">";
        r0 += nodeset2scalar( v11 );
        r0 += "</div>";

        return r0;
    };

    var j3 = [ 0, 'data' ];

    var j4 = [ 0, 'data', 0, '*' ];

    var j5 = [ 1, 0 ];

    // func _nb-popup-buttons(nodeset buttons) : xml
    M.f7 = function f7(m, c0, i0, l0, a0, v12) {
        v12 = (v12 === undefined) ? [] : v12;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup__buttons")
        };
        a0.s = 'div';
        r0 += m.a(m, v12, 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (( m.n(j4, v12) ).length) {
            var items0 = m.n(j3, v12);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.f('f1', c1, i1, l1, a0, m.s(j5, c1));
            }
        } else {
            r0 += nodeset2scalar( m.n(j3, v12) );
        }
        r0 += "</div>";

        return r0;
    };

    // func nb-radio-button(nodeset options) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v13) {
        v13 = (v13 === undefined) ? [] : v13;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v14 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "radio-button", (yr.externals['nb-extend'])(yr.object2nodeset( v14 ), v13));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v15) {
        v15 = (v15 === undefined) ? [] : v15;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v16 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "select", (yr.externals['nb-extend'])(yr.object2nodeset( v16 ), v15));

        return r0;
    };

    var j6 = [ 0, 'text' ];

    var j7 = [ 0, 'value' ];

    var j8 = [ 0, 'icon' ];

    var j9 = [ 0, 'selected' ];

    // func _select-option(nodeset item) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v17) {
        v17 = (v17 === undefined) ? [] : v17;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<option";
        a0.a = {
        };
        a0.s = 'option';
        a0.a[ "label" ] = new yr.scalarAttr(nodeset2scalar( m.n(j6, v17) ));
        a0.a[ "value" ] = new yr.scalarAttr(nodeset2scalar( m.n(j7, v17) ));
        a0.a[ "data-icon" ] = new yr.scalarAttr(simpleScalar('icon', c0));
        if (nodeset2boolean( (m.n(j9, v17)) )) {
            a0.a[ "selected" ] = new yr.scalarAttr("");
        }
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( m.n(j6, v17) );
        r0 += "</option>";

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v18) {
        v18 = (v18 === undefined) ? [] : v18;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        r1[ "theme" ] = "normal";
        var v19 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "checkbox", (yr.externals['nb-extend'])(yr.object2nodeset( v19 ), v18));

        return r0;
    };

    var j10 = [ 0, 'leftContent' ];

    var j11 = [ 0, 'rightContent' ];

    var j12 = [ 0, 'labelContent' ];

    var j13 = [ 0, 'reset' ];

    var j14 = [ 0, 'ghost' ];

    var j15 = [ 0, 'error' ];

    var j16 = [ 0, 'placeholder' ];

    // func nb-input(nodeset options) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v20) {
        v20 = (v20 === undefined) ? [] : v20;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v21 = r1;

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j10, v20) ) || nodeset2boolean( m.n(j11, v20) ) || nodeset2boolean( m.n(j12, v20) ) || nodeset2boolean( m.n(j13, v20) ) || nodeset2boolean( m.n(j14, v20) ) || nodeset2boolean( m.n(j15, v20) ) || nodeset2boolean( m.n(j16, v20) )) {
            if (cmpSN("multiline", m.n(j2, v20))) {
                r0 += m.f('f0', c0, i0, l0, a0, "textarea", (yr.externals['nb-extend'])(yr.object2nodeset( v21 ), v20));
            } else {
                r0 += m.f('f0', c0, i0, l0, a0, "input", (yr.externals['nb-extend'])(yr.object2nodeset( v21 ), v20));
            }
        } else {
            if (cmpSN("multiline", m.n(j2, v20))) {
                r0 += m.f('f0', c0, i0, l0, a0, "textareaSimple", (yr.externals['nb-extend'])(yr.object2nodeset( v21 ), v20));
            } else {
                r0 += m.f('f0', c0, i0, l0, a0, "inputSimple", (yr.externals['nb-extend'])(yr.object2nodeset( v21 ), v20));
            }
        }

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v22) {
        v22 = (v22 === undefined) ? [] : v22;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "input-group", v22);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = " ";
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "progress", (yr.externals['nb-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    // func nb-icon(icon) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v25) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "icon" ] = v25;
        r1[ "size" ] = "s";
        var v26 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v26 ));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v27) {
        v27 = (v27 === undefined) ? [] : v27;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v28 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "paranja", (yr.externals['nb-extend'])(yr.object2nodeset( v28 ), v27));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v29) {
        v29 = (v29 === undefined) ? [] : v29;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v30 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "island", (yr.externals['nb-extend'])(yr.object2nodeset( v30 ), v29));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v31) {
        v31 = (v31 === undefined) ? [] : v31;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "nb-dropzone__button";
        r1[ "button" ] = r2;
        var v32 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "dropzone", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v32 ), v31));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f19 = function f19(m, c0, i0, l0, a0, v33) {
        v33 = (v33 === undefined) ? [] : v33;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v34 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "loader", (yr.externals['nb-extend'])(yr.object2nodeset( v34 ), v33));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f20 = function f20(m, c0, i0, l0, a0, v35) {
        v35 = (v35 === undefined) ? [] : v35;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "value" ] = 0;
        r1[ "type" ] = "range";
        r1[ "size" ] = "s";
        r1[ "orientation" ] = "horiz";
        var v36 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "slider", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v36 ), v35));

        return r0;
    };

    // func nb-tabs(nodeset options) : xml
    M.f21 = function f21(m, c0, i0, l0, a0, v37) {
        v37 = (v37 === undefined) ? [] : v37;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "tabs", (yr.externals['nb-extend'])(yr.object2nodeset( v38 ), v37));

        return r0;
    };

    // func nb-arrow(nodeset arrow) : xml
    M.f22 = function f22(m, c0, i0, l0, a0, v39) {
        v39 = (v39 === undefined) ? [] : v39;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "buttonContent" ] = "Найти";
        var v40 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "arrow", (yr.externals['nb-extend'])(yr.object2nodeset( v40 ), v39));

        return r0;
    };

    // func nb-header(nodeset header) : xml
    M.f23 = function f23(m, c0, i0, l0, a0, v41) {
        v41 = (v41 === undefined) ? [] : v41;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "search" ] = "true";
        r2[ "buttonContent" ] = "Найти";
        r2[ "class" ] = "nb-header__arrow";
        r1[ "arrow" ] = r2;
        r1[ "services" ] = "true";
        r1[ "settings" ] = "true";
        r1[ "yaHref" ] = "http://yandex.ru";
        var v42 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "header", (yr.externals['nb-deep-extend'])(yr.object2nodeset( v42 ), v41));

        return r0;
    };

    // func nb-user(nodeset user) : xml
    M.f24 = function f24(m, c0, i0, l0, a0, v43) {
        v43 = (v43 === undefined) ? [] : v43;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v44 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "user", (yr.externals['nb-extend'])(yr.object2nodeset( v44 ), v43));

        return r0;
    };

    // func nb-suggest(nodeset options) : xml
    M.f25 = function f25(m, c0, i0, l0, a0, v45) {
        v45 = (v45 === undefined) ? [] : v45;
        var r0 = '';

        //  var defaults : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "countMax" ] = "10";
        r1[ "type" ] = "default";
        var v46 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "suggest", (yr.externals['nb-extend'])(yr.object2nodeset( v46 ), v45));

        return r0;
    };

    // func nb-toggler(nodeset toggler) : xml
    M.f26 = function f26(m, c0, i0, l0, a0, v47) {
        v47 = (v47 === undefined) ? [] : v47;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "On";
        r1[ "rightText" ] = "Off";
        r1[ "size" ] = "s";
        var v48 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "toggler", (yr.externals['nb-extend'])(yr.object2nodeset( v48 ), v47));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f27 = function f27(m, c0, i0, l0, a0, v49) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-podium" + "\">";
        r0 += v49;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f28 = function f28(m, c0, i0, l0, a0, v50) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-code demo-code_sample" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( xml2scalar( v50 ) );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(xml markup) : xml
    M.f29 = function f29(m, c0, i0, l0, a0, v51) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, v51);
        r0 += m.f('f28', c0, i0, l0, a0, v51);
        r0 += "</div>";

        return r0;
    };

    // func select-medium() : xml
    M.f30 = function f30(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select1";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "name" ] = "myname";
            r0[ "attrs" ] = r1;
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select3";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "pseudo";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select4";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "dark";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select-gropu1";
            r0[ "class" ] = "my-test-class";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option3";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Группа";
            var r3 = [];
            var a3 = { a: {} };
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Карта";
            r4[ "value" ] = "option4";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Спутник";
            r4[ "value" ] = "option5";
            r3.push(r4);
            var r4 = {};
            var a4 = { a: {} };
            r4[ "text" ] = "Супер Гибрид";
            r4[ "value" ] = "option6";
            r3.push(r4);
            r2[ "group" ] = r3;
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select5";
            r0[ "class" ] = "my-test-class";
            r0[ "theme" ] = "action";
            r0[ "maxHeight" ] = "3";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "width: 120px";
            r0[ "attrs" ] = r1;
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Народная карта";
            r2[ "value" ] = "option0";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Карта";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Спутник";
            r2[ "value" ] = "option2";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид";
            r2[ "value" ] = "option33";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид1";
            r2[ "value" ] = "option32";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Гибрид2";
            r2[ "value" ] = "option31";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "id" ] = "select6";
            r0[ "class" ] = "my-test-class";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "max-width: 200px";
            r0[ "attrs" ] = r1;
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "twitter";
            r2[ "text" ] = "Twitter";
            r2[ "value" ] = "option0";
            r2[ "selected" ] = "true";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "vk";
            r2[ "text" ] = "VK";
            r2[ "value" ] = "option1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "text" ] = "Ещё";
            r2[ "value" ] = "option4";
            r2[ "icon" ] = "three-dots";
            r1.push(r2);
            r0[ "items" ] = r1;

            return r0;
        })()));
        r0 += " Текст рядом с селектами";

        return r0;
    };

    // func select-small() : xml
    M.f31 = function f31(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        r1[ "id" ] = "select2";
        r1[ "direction" ] = "top";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Карта";
        r3[ "value" ] = "option1";
        r3[ "selected" ] = "true";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Спутник";
        r3[ "value" ] = "option2";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Гибрид";
        r3[ "value" ] = "option3";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "text" ] = "Народная карта";
        r3[ "value" ] = "option4";
        r2.push(r3);
        r1[ "items" ] = r2;
        var v52 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset( v52 ));
        r0 += " Текст рядом с селектами";

        return r0;
    };

    // func selects() : xml
    M.f32 = function f32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f30', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-select_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f31', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func button-medium() : xml
    M.f33 = function f33(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Применить";
        var v53 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v53 ));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Проверить";
            r0[ "href" ] = "#";

            return r0;
        })()));

        return r0;
    };

    // func button-small() : xml
    M.f34 = function f34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Применить";
            r0[ "size" ] = "s";

            return r0;
        })()));

        return r0;
    };

    // func button-action() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Отправить";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "action";

            return r0;
        })()));

        return r0;
    };

    // func button-pseudo() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Выбрать…";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "pseudo";

            return r0;
        })()));

        return r0;
    };

    // func button-dark() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Готово";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "dark";

            return r0;
        })()));

        return r0;
    };

    // func button-promo() : xml
    M.f38 = function f38(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Скачать";
            r0[ "size" ] = "m";
            r0[ "theme" ] = "promo";

            return r0;
        })()));

        return r0;
    };

    // func button-images() : xml
    M.f39 = function f39(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "eye";

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "iconText" ] = "▼";

            return r0;
        })()));
        r0 += " ";
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "icon" ] = "link";
            r0[ "content" ] = "Открыть";

            return r0;
        })()));

        return r0;
    };

    // func button-disabled() : xml
    M.f40 = function f40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Кнопка";
            r0[ "disabled" ] = true;

            return r0;
        })()));

        return r0;
    };

    // func radio-button() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f8', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "name" ] = "btn";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Все";
            r2[ "value" ] = "btn1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Непрочитанные";
            r2[ "value" ] = "btn3";
            r2[ "checked" ] = true;
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Прочитанные";
            r2[ "value" ] = "btn4";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Удаленные";
            r2[ "value" ] = "btn2";
            r2[ "disabled" ] = true;
            r1.push(r2);
            r0[ "group" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func attach-button() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Прикрепить файл";
            r0[ "theme" ] = "action";
            var r1 = [];
            var a1 = { a: {} };
            r1.push("myclass1");
            r1.push("myclass2");
            r0[ "class" ] = r1;
            r0[ "type" ] = "file";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "title" ] = "Выберите файл";
            r0[ "attrs" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func buttons() : xml
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f33', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f34', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Action ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_action";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f35', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Pseudo ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_pseudo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f36', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Dark ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_dark";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f37', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Theme: Promo";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_theme_promo";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f38', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f40', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка с иконкой";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f39', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Радио-группа";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f41', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Attach ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-button_type_attach";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f42', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func checkbox-radio() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "content" ] = "Человек";
        r1[ "name" ] = "biotype";
        var v54 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "content" ] = "Паук";
        r1[ "name" ] = "biotype";
        var v55 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v54 ));
        r0 += "<br/>";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v55 ));

        return r0;
    };

    // func checkbox-button() : xml
    M.f45 = function f45(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var button : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "button";
        r1[ "content" ] = "Залипающая кнопка";
        r1[ "name" ] = "sticky-button";
        var v56 = r1;

        //  var theme1 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "pseudo";
        r1[ "content" ] = "Pseudo кнопка";
        var v57 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v56 ));
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += m.f('f11', c0, i0, l0, a0, (yr.externals['nb-extend'])(yr.object2nodeset( v56 ), yr.object2nodeset( v57 )));

        return r0;
    };

    // func checkbox-check() : xml
    M.f46 = function f46(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Дерево";
        r1[ "id" ] = "task";
        r1[ "checked" ] = true;
        r1[ "name" ] = "task";
        var v58 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Сын";
        r1[ "name" ] = "task";
        var v59 = r1;

        //  var radio3 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Дом";
        r1[ "name" ] = "task";
        var v60 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v58 ));
        r0 += "<br/>";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v59 ));
        r0 += "<br/>";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v60 ));

        return r0;
    };

    // func checkbox-small() : xml
    M.f47 = function f47(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var radio : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "size" ] = "s";
        r1[ "content" ] = "JavaScript";
        r1[ "checked" ] = true;
        r1[ "name" ] = "language";
        var v61 = r1;

        //  var radio2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "type" ] = "radio";
        r1[ "size" ] = "s";
        r1[ "content" ] = "Java";
        r1[ "name" ] = "language";
        var v62 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v61 ));
        r0 += "<br/>";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v62 ));

        return r0;
    };

    // func checkbox() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Radio";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f44', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Checkbox";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f46', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Button";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-checkbox_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f47', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Button";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f45', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func toggle-default() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup'}" + "\" href=\"" + "#default" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап по умолчанию";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-right() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler1" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup1', how: { at: 'left', my: 'right' }}" + "\" href=\"" + "#right" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап справа";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-left() : xml
    M.f51 = function f51(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler2" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup2', how: { at: 'right top', my: 'left' }}" + "\" href=\"" + "#left" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап слева";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-to-top() : xml
    M.f52 = function f52(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a id=\"" + "popup-toggler3" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup3', how: { at: 'top', my: 'bottom' }}" + "\" href=\"" + "#top" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Попап сверху";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func toggle-modal() : xml
    M.f53 = function f53(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "popup-toggler" + "\" data-nb-popup-toggler=\"" + "{id: 'popup4'}" + "\" href=\"" + "#modal" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">";
        r0 += "Модальный Попап";
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };

    // func popups() : xml
    M.f54 = function f54(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "separator" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v63 = r1;

        //  var toRight : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup1";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v64 = r1;

        //  var toLeft : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup2";
        r1[ "tail" ] = "top";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v65 = r1;

        //  var toTop : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup3";
        r1[ "tail" ] = "left";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Скопировать";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Переместить";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "href" ] = "#";
        r3[ "content" ] = "Удалить";
        r2.push(r3);
        r1[ "menu" ] = r2;
        var v66 = r1;

        //  var modal : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "popup4";
        r1[ "titleContent" ] = "Some modal popup";
        r1[ "content" ] = "Some text for that popup";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "width" ] = "300px";
        r1[ "data-nb" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "ns-action";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "data-params" ] = "123";
        r2[ "attrs" ] = r3;
        r1[ "close" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "ns-subliew-buttons";
        var r3 = [];
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "content" ] = "Отправить";
        r4[ "size" ] = "m";
        r4[ "theme" ] = "action";
        r4[ "class" ] = "nb-popup__button";
        r3.push(r4);
        var r4 = {};
        var a4 = { a: {} };
        r4[ "content" ] = "Сохранить";
        r4[ "size" ] = "m";
        r4[ "class" ] = "nb-popup__button";
        r3.push(r4);
        r2[ "data" ] = r3;
        r1[ "buttons" ] = r2;
        var v67 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f49', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v63 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v63 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f50', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v64 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v64 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f51', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v65 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v65 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f52', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v66 )));
        r0 += "</div>";
        r0 += m.f('f2', c0, i0, l0, a0, yr.object2nodeset( v66 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-group" + "\">";
        r0 += m.f('f27', c0, i0, l0, a0, m.f('f53', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f53', c0, i0, l0, a0));
        r0 += m.f('f28', c0, i0, l0, a0, m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 )));
        r0 += "</div>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset( v67 ));
        r0 += "</div>";

        return r0;
    };

    // func dropzone() : xml
    M.f55 = function f55(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "head" ] = "Загрузка файлов";
        r1[ "text" ] = "Перетащите файлы сюда или ";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "выбрите...";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "nb-dropzone__button";
        r1[ "button" ] = r2;
        var v68 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Зона для загрузки файла";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f18', c0, i0, l0, a0, yr.object2nodeset( v68 )));
        r0 += "</div>";

        return r0;
    };

    // func progresses() : xml
    M.f56 = function f56(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress2";
        r1[ "start" ] = "20";
        var v69 = r1;

        //  var title : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "progress1";
        r1[ "start" ] = "30";
        r1[ "type" ] = "title";
        r1[ "title" ] = "Король_Лев_5_rutracker.org";
        var v70 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Percentage ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_percentage";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v69 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Type: Title ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-progress_type_title";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f14', c0, i0, l0, a0, yr.object2nodeset( v70 )));
        r0 += "</div>";

        return r0;
    };

    // func input-small() : xml
    M.f57 = function f57(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Москва";

            return r0;
        })()));

        return r0;
    };

    // func input-medium() : xml
    M.f58 = function f58(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "content" ] = "Москва и Питер";

            return r0;
        })()));

        return r0;
    };

    // func input-disabled() : xml
    M.f59 = function f59(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "disabled" ] = true;
            r0[ "content" ] = "Москва";

            return r0;
        })()));

        return r0;
    };

    // func input-length() : xml
    M.f60 = function f60(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            var r1 = {};
            var a1 = { a: {} };
            r1[ "length" ] = 11;
            r1[ "maxlength" ] = 11;
            r1[ "placeholder" ] = "11 символов";
            r0[ "attrs" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func input-multiline() : xml
    M.f61 = function f61(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "multiline";

            return r0;
        })()));

        return r0;
    };

    // func input-ghost() : xml
    M.f62 = function f62(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "ghost" ] = true;

            return r0;
        })()));

        return r0;
    };

    // func input-reset() : xml
    M.f63 = function f63(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "m";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-small-reset() : xml
    M.f64 = function f64(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "s";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-left-right() : xml
    M.f65 = function f65(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "leftContent" ] = "Prefix...";
            r0[ "rightContent" ] = "...postfix";

            return r0;
        })()));

        return r0;
    };

    // func input-textarea-reset() : xml
    M.f66 = function f66(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "size" ] = "m";
            r0[ "type" ] = "multiline";
            r0[ "content" ] = "privet";

            return r0;
        })()));

        return r0;
    };

    // func input-error() : xml
    M.f67 = function f67(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Здесь будет ошибка";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "direction" ] = "right";
            r1[ "content" ] = "Все плохо!!!";
            r0[ "error" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func input-placeholder() : xml
    M.f68 = function f68(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "placeholder" ] = "Your Email or Name";

            return r0;
        })()));

        return r0;
    };

    // func input-placeholder-ghost() : xml
    M.f69 = function f69(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello@nano.is";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "ghost" ] = true;
            r1[ "text" ] = " — Your Email or Name";
            r0[ "placeholder" ] = r1;

            return r0;
        })()));

        return r0;
    };

    // func inputs() : xml
    M.f70 = function f70(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f58', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-input_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f57', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-disabled";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f59', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Maxlength";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f60', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Multiline";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f61', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Multiline with reset";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f66', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Ghost";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f62', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Reset";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f63', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Small reset";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f64', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Postfix, prefix";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f65', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Error";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f67', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Placeholders";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f68', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Placeholders";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f69', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func input-groups() : xml
    M.f71 = function f71(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var blockDefault1 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        var r3 = {};
        var a3 = { a: {} };
        r3[ "placeholder" ] = "Номер билета";
        r2[ "attrs" ] = r3;
        r1[ "input" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "Проверить";
        r1[ "button" ] = r2;
        var v71 = r1;

        //  var blockDefault2 : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "icon" ] = "link";
        r1[ "button" ] = r2;
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "content" ] = "http://yadi.sk/";
        r1[ "input" ] = r2;
        var v72 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поле+кнопка";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v71 )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Кнопка+поле";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f13', c0, i0, l0, a0, yr.object2nodeset( v72 )));
        r0 += "</div>";

        return r0;
    };

    // func island-simple() : xml
    M.f72 = function f72(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров миу-миу";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v73 ));

        return r0;
    };

    // func island-fly() : xml
    M.f73 = function f73(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Летающий остров";
        r1[ "type" ] = "fly";
        r1[ "padding" ] = "m";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "style" ] = "height: 100px; width: 200px";
        r1[ "attrs" ] = r2;
        var v74 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v74 ));

        return r0;
    };

    // func island-padding() : xml
    M.f74 = function f74(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Остров с паддингами и инлайном";
        r1[ "padding" ] = "l";
        r1[ "type" ] = "inline";
        var v75 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f17', c0, i0, l0, a0, yr.object2nodeset( v75 ));

        return r0;
    };

    // func islands() : xml
    M.f75 = function f75(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f72', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f73', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Padding: L, Inline ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-island_padding_l.nb-island_inline";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f74', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func loader-small() : xml
    M.f76 = function f76(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v76 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v76 ));

        return r0;
    };

    // func loader-medium() : xml
    M.f77 = function f77(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v77 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v77 ));

        return r0;
    };

    // func loader-white() : xml
    M.f78 = function f78(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "color" ] = "white";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "data-id" ] = "1";
        r1[ "attrs" ] = r2;
        var v78 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f19', c0, i0, l0, a0, yr.object2nodeset( v78 ));

        return r0;
    };

    // func loaders() : xml
    M.f79 = function f79(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f77', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f76', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Color: White ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-loader_color_white";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f78', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func all-icons(size, boolean white) : xml
    M.f81 = function f81(m, c0, i0, l0, a0, v79, v80) {
        var r0 = '';

        function f80(m, c0, i0, l0, a0, v81) {
            var r0 = '';

            //  var default : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "icon" ] = v81;
            r1[ "size" ] = v79;
            var v82 = r1;

            r0 += closeAttrs(a0);
            r0 += m.f('f0', c0, i0, l0, a0, "icon", yr.object2nodeset( v82 ));
            r0 += " ";

            return r0;
        }

        r0 += closeAttrs(a0);
        if (v80) {
            r0 += f80(m, c0, i0, l0, a0, "download_white");
            r0 += f80(m, c0, i0, l0, a0, "upload_white");
            r0 += f80(m, c0, i0, l0, a0, "link_white");
            r0 += f80(m, c0, i0, l0, a0, "trash_white");
        } else {
            r0 += f80(m, c0, i0, l0, a0, "close");
            r0 += f80(m, c0, i0, l0, a0, "download");
            r0 += f80(m, c0, i0, l0, a0, "upload");
            r0 += f80(m, c0, i0, l0, a0, "people");
            r0 += f80(m, c0, i0, l0, a0, "help");
            r0 += f80(m, c0, i0, l0, a0, "eye");
            r0 += f80(m, c0, i0, l0, a0, "link");
            r0 += f80(m, c0, i0, l0, a0, "pause");
            r0 += f80(m, c0, i0, l0, a0, "play");
            r0 += f80(m, c0, i0, l0, a0, "three-dots");
            r0 += f80(m, c0, i0, l0, a0, "trash");
            r0 += f80(m, c0, i0, l0, a0, "attention");
            r0 += f80(m, c0, i0, l0, a0, "mail");
            r0 += f80(m, c0, i0, l0, a0, "vk");
            r0 += f80(m, c0, i0, l0, a0, "twitter");
            r0 += f80(m, c0, i0, l0, a0, "odnoklassniki");
        }

        return r0;
    };

    // func icons() : xml
    M.f82 = function f82(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-icon_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f81', c0, i0, l0, a0, "s");
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-icon_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f81', c0, i0, l0, a0, "m");
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section demo-section_dark" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "White";
        r0 += "</div>";
        r0 += m.f('f81', c0, i0, l0, a0, "s", true);
        r0 += m.f('f81', c0, i0, l0, a0, "m", true);
        r0 += "</div>";

        return r0;
    };

    // func slider-small() : xml
    M.f83 = function f83(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "id" ] = "s2";
        r1[ "size" ] = "s";
        var r2 = {};
        var a2 = { a: {} };
        r2[ "class" ] = "js-custom-class";
        r1[ "handle" ] = r2;
        r1[ "value" ] = 20;
        var v83 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v83 ));

        return r0;
    };

    // func slider-medium() : xml
    M.f84 = function f84(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "class" ] = "js-super-class";
        r1[ "value" ] = 50;
        r1[ "id" ] = "s1";
        var v84 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v84 ));

        return r0;
    };

    // func slider-disabled() : xml
    M.f85 = function f85(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var slider : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "disabled" ] = true;
        var v85 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f20', c0, i0, l0, a0, yr.object2nodeset( v85 ));

        return r0;
    };

    // func sliders() : xml
    M.f86 = function f86(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f83', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f84', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Disabled";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f85', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func tooltips-jq() : xml
    M.f87 = function f87(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tooltip1'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Тултип с текстом" + "</span>";
        r0 += "</a>";
        r0 += "<br/>";
        r0 += "<br/>";
        r0 += "<a href=\"" + "#hello" + "\" class=\"" + "nb link link_wrapper link_pseudo" + "\" data-nb=\"" + "tooltip-jq-toggler" + "\" data-nb-tooltip-jq-toggler=\"" + "{content: 'tool&lt;b&gt;tip2&lt;/b&gt;'}" + "\">";
        r0 += "<span class=\"" + "link__inner" + "\">" + "Тултип с HTML" + "</span>";
        r0 += "</a>";
        r0 += "</div>";

        return r0;
    };

    // func tabs-article() : xml
    M.f88 = function f88(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div style=\"" + "line-height: 1.4;" + "\">";
        r0 += "<strong>";
        r0 += "Остров";
        r0 += "</strong>";
        r0 += " — участок суши (обычно естественного происхождения), окружённый со ";
        r0 += "всех сторон водой и постоянно возвышающийся над водой даже в период ";
        r0 += "наибольшего прилива. От материков острова отличаются меньшими ";
        r0 += "размерами (самым большим по площади островом принято считать ";
        r0 += "Гренландию, которая приблизительно в три раза меньше самого малого ";
        r0 += "континента — Австралии). Встречаются одиночные острова и их группы ";
        r0 += "— архипелаги.";
        r0 += "</div>";

        return r0;
    };

    // func tabs-discussion() : xml
    M.f89 = function f89(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div style=\"" + "line-height: 1.4; margin-bottom: 1em;" + "\">";
        r0 += "На черта в этой статье флагифицировали все упоминания стран? Вообще ";
        r0 += "сомневаюсь в необходимости этого, она была придумана для списков и ";
        r0 += "карточек. ";
        r0 += "<a class=\"" + "_link" + "\" href=\"" + "#" + "\">";
        r0 += "Username";
        r0 += "</a>";
        r0 += " 14:14, 6 сентября 2011 (UTC)";
        r0 += "</div>";
        r0 += "<div style=\"" + "line-height: 1.4; margin-left: 2em;" + "\">";
        r0 += "Чем вы так недовольны?Или это ваш менталитет?Флаги нужны ";
        r0 += "<a class=\"" + "_link" + "\" href=\"" + "#" + "\">";
        r0 += "213.87.142.97";
        r0 += "</a>";
        r0 += " 13:23, 16 февраля 2013 (UTC)";
        r0 += "</div>";

        return r0;
    };

    // func tabs-medium() : xml
    M.f90 = function f90(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Статья";
        r3[ "content" ] = m.f('f88', c0, i0, l0, a3);
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обсуждение";
        r3[ "content" ] = m.f('f89', c0, i0, l0, a3);
        r2.push(r3);
        r1[ "items" ] = r2;
        var v86 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f21', c0, i0, l0, a0, yr.object2nodeset( v86 ));

        return r0;
    };

    // func tabs-small() : xml
    M.f91 = function f91(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Главное";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Политика";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Экономика";
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Спорт";
        r3[ "active" ] = true;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Технологии";
        r2.push(r3);
        r1[ "items" ] = r2;
        var v87 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f21', c0, i0, l0, a0, yr.object2nodeset( v87 ));

        return r0;
    };

    // func tabs-island() : xml
    M.f92 = function f92(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var exchange : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "placeholder" ] = "Серийный номер";
        r4[ "style" ] = "width: 90%";
        r3[ "attrs" ] = r4;
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Обменять";
        r2[ "button" ] = r3;
        var v88 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f13', c0, i0, l0, a1, yr.object2nodeset( v88 ));
        var v89 = r1;

        //  var return : xml
        var r1 = '';
        var a1 = { a: {} };
        //  var group : object
        var r2 = {};
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        var r4 = {};
        var a4 = { a: {} };
        r4[ "placeholder" ] = "Серийный номер";
        r3[ "attrs" ] = r4;
        r2[ "input" ] = r3;
        var r3 = {};
        var a3 = { a: {} };
        r3[ "size" ] = "s";
        r3[ "content" ] = "Вернуть";
        r2[ "button" ] = r3;
        var v90 = r2;

        r1 += closeAttrs(a1);
        r1 += m.f('f13', c0, i0, l0, a1, yr.object2nodeset( v90 ));
        var v91 = r1;

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "rise" ] = "m";
        var r2 = [];
        var a2 = { a: {} };
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Обмен";
        r3[ "content" ] = v89;
        r2.push(r3);
        var r3 = {};
        var a3 = { a: {} };
        r3[ "title" ] = "Возврат";
        r3[ "content" ] = v91;
        r2.push(r3);
        r1[ "items" ] = r2;
        var v92 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island nb-island_type_fly nb-island_padding_m")
        };
        a0.s = 'div';
        a0.a[ "style" ] = new yr.scalarAttr("width: 300px");
        r0 += closeAttrs(a0);
        r0 += m.f('f21', c0, i0, l0, a0, yr.object2nodeset( v92 ));
        r0 += "</div>";

        return r0;
    };

    // func tabs() : xml
    M.f93 = function f93(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: M ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f90', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Size: S ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_size_s";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f91', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Внутри острова ";
        r0 += "<span class=\"" + "demo-code demo-code_small" + "\">";
        r0 += ".nb-tabs_rise_m";
        r0 += "</span>";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f92', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    // func arrow-service() : xml
    M.f94 = function f94(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "false";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v93 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v93 ));

        return r0;
    };

    // func arrow-search() : xml
    M.f95 = function f95(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        var v94 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v94 ));

        return r0;
    };

    // func arrow-search-requests() : xml
    M.f96 = function f96(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "requests" ] = "8 млн ответов";
        r1[ "value" ] = "жираф";
        var v95 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v95 ));

        return r0;
    };

    // func arrow-search-service() : xml
    M.f97 = function f97(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var block : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "href" ] = "#";
        r1[ "text" ] = "Диск";
        var v96 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f22', c0, i0, l0, a0, yr.object2nodeset( v96 ));

        return r0;
    };

    // func arrows() : xml
    M.f98 = function f98(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Название сервиса";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f94', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f95', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f96', c0, i0, l0, a0));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Поисковая стрелка (по умолчанию)";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f97', c0, i0, l0, a0));
        r0 += "</div>";

        return r0;
    };

    //  var header : object
    M.v97 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "username" ] = "Username";
        r2[ "notices" ] = "7";
        r1[ "user" ] = r2;
        return r1;
    };

    // func header() : xml
    M.f99 = function f99(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Шапка с поисковой стрелкой";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f23', c0, i0, l0, a0, yr.object2nodeset( m.v('v97', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    //  var userNormal : object
    M.v98 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "sweetlush";
        r1[ "notices" ] = "7";
        return r1;
    };

    //  var userRtL : object
    M.v99 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Username";
        r1[ "notices" ] = "1";
        r1[ "rightToLeft" ] = "true";
        return r1;
    };

    //  var userSmall : object
    M.v100 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "basvasilich";
        r1[ "size" ] = "s";
        return r1;
    };

    //  var userEmail : object
    M.v101 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "pupkin@yandex.ru";
        r1[ "justify" ] = true;
        r1[ "rightToLeft" ] = true;
        r1[ "size" ] = "s";
        return r1;
    };

    //  var userEmail2 : object
    M.v102 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "username" ] = "Константин Леонидович Васильев";
        r1[ "email" ] = "pupkin@yandex.ru";
        r1[ "justify" ] = true;
        r1[ "size" ] = "m";
        return r1;
    };

    // func userBlock() : xml
    M.f100 = function f100(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе L";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v98', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе справа налево";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v99', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе S";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v100', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок информации о пользователе растянутый и с имейлом";
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v101', c0.doc.root) )));
        r0 += "</div>";
        r0 += "<div style=\"" + "width: 200px" + "\">";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f24', c0, i0, l0, a0, yr.object2nodeset( m.v('v102', c0.doc.root) )));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };

    // func suggests() : xml
    M.f101 = function f101(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var suggest : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[\"Вариант 1\", \"Вариант 2\", \"Вариант 3\", \"Вариант 4\", \"Вариант 5\", \"Вариант 6\", \"Вариант 7\", \"Вариант 8\", \"Вариант 9\", \"Вариант 10\", \"Вариант 11\", \"Вариант 12\", \"Вариант 13\", \"Вариант 14\", \"Вариант 15\", \"Вариант 16\", \"Вариант 17\", \"Вариант 18\", \"Вариант 19\"]";
        r1[ "highlight" ] = true;
        r1[ "size" ] = "s";
        var v103 = r1;

        //  var suggestUser : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "[{\"value\": \"Константин Константинович Константинопольский\",\"labelContent\": \"Константин Константинович Константинопольский konstantin.konstantinopolsky\",\"username\": \"Константин Константинович Константинопольский\",\"email\": \"konstantin.konstantinopolsky@yandex-team.ru\"},{\"value\": \"Константин Васильев\",\"labelContent\": \"Константин Васильев mctep\",\"username\": \"Константин Васильев\",\"email\": \"mctep@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/mctep/avatar/54.jpg\"},{\"value\": \"Евгений Дорошенко\",\"labelContent\": \"Евгений Дорошенко esdoroshenko\",\"username\": \"Евгений Дорошенко\",\"email\": \"esdoroshenko@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/esdoroshenko/avatar/54.jpg\"},{\"value\": \"Вадим Пацев\",\"labelContent\": \"Вадим Пацев basvasilich\",\"username\": \"Вадим Пацев\",\"email\": \"basvasilich@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/basvasilich/avatar/54.jpg\"},{\"value\": \"Светлана Блыщак\",\"labelContent\": \"Светлана Блыщак sweetlush\",\"username\": \"Светлана Блыщак\",\"email\": \"sweetlush@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/sweetlush/avatar/54.jpg\"},{\"value\": \"Яна Недоросткова\",\"labelContent\": \"Яна Недоросткова yanann11\",\"username\": \"Яна Недоросткова\",\"email\": \"yanann11@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/yanann11/avatar/54.jpg\"},{\"value\": \"Азиз Йулдошев\",\"labelContent\": \"Азиз Йулдошев lapple\",\"username\": \"Азиз Йулдошев\",\"email\": \"lapple@yandex-team.ru\",\"userpic\": \"https://center.yandex-team.ru/api/v1/user/lapple/avatar/54.jpg\"}]";
        r1[ "highlight" ] = true;
        r1[ "type" ] = "username";
        var v104 = r1;

        //  var suggestUser2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "source" ] = "./users.json";
        r1[ "type" ] = "username";
        var v105 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Простейший саджест с большим количеством вариантов. Введите буквы «Ва»";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v103 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест с подсветкой, в котором представлена команда разработчиков Диска";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v104 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Саджест, который ходит на сервер за demo/users.json.";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Для корректной работы, необходмо настроить ваш сервер на выдачу json файлов как есть. ";
        r0 += "Файл статичный, поэтому результаты будут всегда одинаковые. ";
        r0 += "</div>";
        r0 += m.f('f25', c0, i0, l0, a0, yr.object2nodeset( v105 ));
        r0 += "</div>";

        return r0;
    };

    //  var togglerS : object
    M.v106 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        return r1;
    };

    //  var togglerM : object
    M.v107 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        r1[ "size" ] = "m";
        r1[ "checked" ] = true;
        return r1;
    };

    //  var togglerDisabled : object
    M.v108 = function(m, c0, i0, l0) {
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "Вкл";
        r1[ "rightText" ] = "Выкл";
        r1[ "size" ] = "m";
        r1[ "disabled" ] = true;
        return r1;
    };

    // func toggleBlock() : xml
    M.f102 = function f102(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-section" + "\">";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f26', c0, i0, l0, a0, yr.object2nodeset( m.v('v106', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель M";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f26', c0, i0, l0, a0, yr.object2nodeset( m.v('v107', c0.doc.root) )));
        r0 += "<br/>";
        r0 += "<div class=\"" + "demo-h3" + "\">";
        r0 += "Блок переключатель disabled";
        r0 += "</div>";
        r0 += m.f('f29', c0, i0, l0, a0, m.f('f26', c0, i0, l0, a0, yr.object2nodeset( m.v('v108', c0.doc.root) )));
        r0 += "</div>";

        return r0;
    };

    var j17 = [ 0, 'id' ];

    var j18 = [ 0, 'class' ];

    var j19 = [ 0, 'mixin-nb' ];

    var j20 = [ 0, 'data-nb', 0, '*' ];

    var j21 = [ 0, 'attrs', 0, '*' ];

    var j22 = [ 0, 'button' ];

    var j23 = [ 0, 'size' ];

    var j24 = [ 0, 'theme' ];

    var j25 = [ 0, 'static' ];

    var j26 = [ 0, 'disabled' ];

    var j27 = [ 0, 'name' ];

    var j28 = [ 0, 'attrs', 0, 'name' ];

    var j29 = [ 0, 'content' ];

    var j30 = [ 0, 'iconText' ];

    var j31 = [ 0, 'buttonLink' ];

    var j32 = [ 0, 'buttonAttach' ];

    var j33 = [ 0, 'attrs', 0, 'multiple' ];

    var j34 = [ 0, 'multiple' ];

    var j35 = [ 0, 'attrs', 0, 'title' ];

    var j36 = [ 0, 'popupMenu' ];

    var j37 = [ 0, 'tail' ];

    var j38 = [ 0, 'menu' ];

    var j39 = [ 0, 'separator' ];

    var j40 = [ 0, 'popup' ];

    var j41 = [ 0, 'titleContent' ];

    var j42 = [ 0, 'modalPopup' ];

    var j43 = [ 0, 'close' ];

    var j44 = [ 0, 'close', 0, 'class' ];

    var j45 = [ 0, 'close', 0, 'attrs' ];

    var j46 = [ 0, 'close', 0, 'attrs', 0, '*' ];

    var j47 = [ 0, 'buttons' ];

    var j48 = [ 0, 'radio-button' ];

    var j49 = [ 0, 'group' ];

    var j50 = [ 1, 1, 0, 'name' ];

    var j51 = [ 0, 'checked' ];

    var j52 = [ 1, 1, 0, 'theme' ];

    var j53 = [ 1, 1, 0, 'size' ];

    var j54 = [ 0, 'select' ];

    function p0(m, c0, i0, l0) {
        return nodeset2boolean( (selectNametest('selected', c0, [])) );
    }

    var j55 = [ 0, 'items', 2, p0 ];

    var j56 = [ 0, 'direction' ];

    var j57 = [ 0, 'within' ];

    var j58 = [ 0, 'maxHeight' ];

    var j59 = [ 0, 'items' ];

    var j60 = [ 0, 'checkbox' ];

    var j61 = [ 0, 'tabindex' ];

    var j62 = [ 0, 'input' ];

    var j63 = [ 0, 'error', 0, 'direction' ];

    var j64 = [ 0, 'placeholder', 0, 'ghost' ];

    var j65 = [ 0, 'placeholder', 0, 'text' ];

    var j66 = [ 0, 'error', 0, 'content' ];

    var j67 = [ 0, 'textarea' ];

    var j68 = [ 0, 'inputSimple' ];

    var j69 = [ 0, 'textareaSimple' ];

    var j70 = [ 0, 'input-group' ];

    var j71 = [ 0, 'progress' ];

    var j72 = [ 0, 'bar' ];

    var j73 = [ 0, 'start' ];

    var j74 = [ 0, 'title' ];

    function p1(m, c0, i0, l0) {
        return simpleBoolean('icon', c0);
    }

    var j75 = [ 0, 'icon', 2, p1 ];

    var j76 = [ 0, 'paranja' ];

    var j77 = [ 0, 'island' ];

    var j78 = [ 0, 'padding' ];

    var j79 = [ 0, 'dropzone' ];

    var j80 = [ 0, 'head' ];

    var j81 = [ 0, 'loader' ];

    var j82 = [ 0, 'color' ];

    var j83 = [ 0, 'slider' ];

    var j84 = [ 0, 'orientation' ];

    var j85 = [ 0, 'handle', 0, 'class' ];

    var j86 = [ 0, 'tabs' ];

    var j87 = [ 0, 'rise' ];

    var j88 = [ 0, 'active' ];

    var j89 = [ 0, 'arrow' ];

    var j90 = [ 0, 'search' ];

    var j91 = [ 0, 'buttonContent' ];

    var j92 = [ 0, 'action' ];

    var j93 = [ 0, 'requests' ];

    var j94 = [ 0, 'header' ];

    var j95 = [ 0, 'settings' ];

    var j96 = [ 0, 'services' ];

    var j97 = [ 0, 'user' ];

    var j98 = [ 0, 'yaHref' ];

    var j99 = [ 0, 'justify' ];

    var j100 = [ 0, 'rightToLeft' ];

    var j101 = [ 0, 'userpic' ];

    var j102 = [ 0, 'notices' ];

    var j103 = [ 0, 'username' ];

    var j104 = [ 0, 'email' ];

    var j105 = [ 0, 'suggest' ];

    var j106 = [ 0, 'countMax' ];

    var j107 = [ 0, 'source' ];

    var j108 = [ 0, 'highlight' ];

    var j109 = [ 0, 'classSuggest' ];

    var j110 = [ 0, 'attrsInput' ];

    var j111 = [ ];

    var j112 = [ 0, 'item' ];

    function p2(m, c0, i0, l0) {
        return cmpSN("default", selectNametest('type', c0, []));
    }

    var j113 = [ 2, p2, 0, 'item' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("username", selectNametest('type', c0, []));
    }

    var j114 = [ 2, p3, 0, 'item' ];

    var j115 = [ 0, 'size' ];

    var j116 = [ 0, 'usernameHighlighted' ];

    var j117 = [ 0, 'emailHighlighted' ];

    var j118 = [ 0, 'mod' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('usernameHighlighted', c0);
    }

    var j119 = [ 0, 'user', 2, p4, 0, 'username' ];

    var j120 = [ 1, 1, 0, 'usernameHighlighted' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('emailHighlighted', c0);
    }

    var j121 = [ 0, 'user', 2, p5, 0, 'email' ];

    var j122 = [ 1, 1, 0, 'emailHighlighted' ];

    var j123 = [ 0, 'toggler' ];

    var j124 = [ 0, 'leftText' ];

    var j125 = [ 0, 'rightText' ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j5, c0), 'nb-attrs', a0)
        r0 += m.a(m, selectNametest('*', c0, []), 'nb-attrs', a0)
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j5, c1) ) );
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(r1);
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('mixin-nb', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j5, c1) ) );
        }
        var tmp0 = a0.a[ "data-nb" ];
        if (tmp0) {
            a0.a[ "data-nb" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
        }
        var items0 = m.s(j20, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
        }
        var items0 = m.s(j21, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : nb-main-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j5, c0), 'nb-content', a0)

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .button : nb
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'button';
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j28, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j28, c0) ));
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && (simpleBoolean('icon', c0) || simpleBoolean('iconText', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('iconText', c0)) {
            r0 += "<span class=\"" + "nb-icon nb-icon_text" + "\">";
            r0 += nodeset2xml( selectNametest('iconText', c0, []) );
            r0 += "</span>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t2.j = j22;
    M.t2.a = 0;

    // match .buttonLink : nb
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (!nodeset2boolean( (selectNametest('disabled', c0, [])) ) && simpleBoolean('href', c0)) {
            a0.a[ "href" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) ));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && (simpleBoolean('icon', c0) || simpleBoolean('iconText', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('iconText', c0)) {
            r0 += "<span class=\"" + "nb-icon nb-icon_text" + "\">";
            r0 += nodeset2xml( selectNametest('iconText', c0, []) );
            r0 += "</span>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t3.j = j31;
    M.t3.a = 0;

    // match .buttonAttach : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-button _init nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_type_attach  nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (!nodeset2boolean( (selectNametest('disabled', c0, [])) ) && simpleBoolean('href', c0)) {
            a0.a[ "href" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) ));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && (simpleBoolean('icon', c0) || simpleBoolean('iconText', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_only-icon");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "nb-file-intruder__inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-file-intruder__input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        if (nodeset2boolean( m.s(j33, c0) ) || simpleBoolean('multiple', c0)) {
            a0.a[ "multiple" ] = new yr.scalarAttr("multiple");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j28, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j28, c0) ) ));
        }
        if (nodeset2boolean( m.s(j35, c0) )) {
            var tmp0 = a0.a[ "title" ];
            if (tmp0) {
                a0.a[ "title" ] = tmp0.addscalar(nodeset2scalar( ( m.s(j35, c0) ) ));
            } else {
                a0.a[ "title" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j35, c0) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-file-intruder__focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, selectNametest('icon', c0, []), 'nb', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('iconText', c0)) {
            r0 += "<span class=\"" + "nb-icon nb-icon_text" + "\">";
            r0 += nodeset2xml( selectNametest('iconText', c0, []) );
            r0 += "</span>";
        }
        if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t4.j = j32;
    M.t4.a = 0;

    // match .popupMenu : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _init")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _hidden");
            }
        }
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('menu', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('separator', c1)) {
                r0 += "<div class=\"" + "nb-popup__separator" + "\"></div>";
            } else {
                r0 += "<a";
                a0.a = {
                    'class': new yr.scalarAttr("nb-popup__line"),
                    'tabindex': new yr.scalarAttr("-1")
                };
                a0.s = 'a';
                if (simpleBoolean('href', c1)) {
                    a0.a[ "href" ] = new yr.scalarAttr(simpleScalar('href', c1));
                }
                r0 += m.a(m, m.s(j5, c1), 'nb-main-attrs', a0)
                r0 += closeAttrs(a0);
                r0 += simpleScalar('content', c1);
                r0 += "</a>";
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t5.j = j36;
    M.t5.a = 0;

    // match .popup : nb
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _init _hidden"),
            'data-nb': new yr.scalarAttr("popup")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f6', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f5', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        r0 += "</div>";

        return r0;
    };
    M.t6.j = j40;
    M.t6.a = 0;

    // match .modalPopup : nb
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('static', c0)) {
            r0 += m.f('f16', c0, i0, l0, a0);
        }
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _init nb-popup_type_modal")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _hidden");
            }
        }
        if (simpleBoolean('theme', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-popup_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-popup_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-popup__i" + "\">";
        if (simpleBoolean('close', c0)) {
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("nb-popup__close " + nodeset2scalar( ( m.s(j44, c0) ) ))
            };
            a0.s = 'a';
            if (nodeset2boolean( m.s(j45, c0) )) {
                var items0 = m.s(j46, c0);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
                }
            }
            r0 += closeAttrs(a0);
            r0 += "</a>";
        }
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f6', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f5', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        if (simpleBoolean('buttons', c0)) {
            r0 += m.f('f7', c0, i0, l0, a0, selectNametest('buttons', c0, []));
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t7.j = j42;
    M.t7.a = 0;

    // match .radio-button : nb
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("radio-button"),
            'class': new yr.scalarAttr("nb-radio-button nb-radio-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ) + " nb-radio-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        var items0 = selectNametest('group', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            //  var uniq : scalar
            var v109 = "nb-radio-button_" + ( (yr.externals['nb-uniq'])() );

            r0 += "<span class=\"" + "nb-radio-button__button" + "\">";
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("nb-radio-button__radio"),
                'type': new yr.scalarAttr("radio"),
                'name': new yr.scalarAttr(nodeset2scalar( ( m.s(j50, c1) ) )),
                'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) )),
                'id': new yr.scalarAttr(( v109 ))
            };
            a0.s = 'input';
            if (simpleBoolean('checked', c1)) {
                a0.a[ "checked" ] = new yr.scalarAttr("checked");
            }
            if (simpleBoolean('disabled', c1)) {
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
            if (simpleBoolean('name', c1)) {
                a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c1));
            }
            if (nodeset2boolean( m.s(j28, c1) )) {
                a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j28, c1) ));
            }
            r0 += closeAttrs(a0);
            r0 += '';
            r0 += "<label";
            a0.a = {
                'for': new yr.scalarAttr(( v109 )),
                'class': new yr.scalarAttr("nb-button  js-button nb-button_theme_" + nodeset2scalar( ( m.s(j52, c1) ) ) + " nb-button_size_" + nodeset2scalar( ( m.s(j53, c1) ) )),
                'data-value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) ))
            };
            a0.s = 'label';
            r0 += m.a(m, m.s(j5, c1), 'nb-main-attrs', a0)
            if (simpleBoolean('checked', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_type_checked");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_type_checked");
                }
            }
            if (simpleBoolean('disabled', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" is-disabled js-disabled");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" is-disabled js-disabled");
                }
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
            if (!nodeset2boolean( (selectNametest('content', c1, [])) ) && simpleBoolean('icon', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" nb-button_only-icon");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" nb-button_only-icon");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<span";
            a0.a = {
                'class': new yr.scalarAttr("nb-button__text")
            };
            a0.s = 'span';
            r0 += m.a(m, selectNametest('icon', c1, []), 'nb', a0)
            r0 += closeAttrs(a0);
            if (nodeset2boolean( (selectNametest('content', c1, [])) )) {
                r0 += simpleScalar('content', c1);
            }
            r0 += "</span>";
            r0 += "</label>";
            r0 += "</span>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t8.j = j48;
    M.t8.a = 0;

    // match .select : nb
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var isSelected : boolean
        var v110 = ( m.s(j55, c0) ).length > 0;

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-select _init nb-button nb-select__button nb-button_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-button_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) )),
            'data-nb-direction': new yr.scalarAttr(nodeset2scalar( ( selectNametest('direction', c0, []) ) )),
            'data-nb': new yr.scalarAttr("select"),
            'tabindex': new yr.scalarAttr("0")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('within', c0)) {
            a0.a[ "data-nb-within" ] = new yr.scalarAttr(simpleScalar('within', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('maxHeight', c0)) {
            a0.a[ "data-nb-maxheight" ] = new yr.scalarAttr(simpleScalar('maxHeight', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button__text" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((v110 && simpleBoolean('selected', c1)) || (!v110 && i1 == 0)) {
                r0 += nodeset2xml( selectNametest('text', c1, []) );
            }
        }
        r0 += "</span>";
        r0 += "<span class=\"" + "nb-select-helper" + "\"></span>";
        r0 += "<select";
        a0.a = {
            'class': new yr.scalarAttr("nb-select__fallback")
        };
        a0.s = 'select';
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j28, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j28, c0) ));
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('group', c1)) {
                r0 += "<optgroup label=\"" + nodeset2attrvalue( ( selectNametest('text', c1, []) ) ) + "\" data-nb-type=\"" + nodeset2attrvalue( ( selectNametest('type', c1, []) ) ) + "\">";
                var items1 = selectNametest('group', c1, []);
                for (var i2 = 0, l2 = items1.length; i2 < l2; i2++) {
                    var c2 = items1[ i2 ];
                    r0 += m.f('f10', c2, i2, l2, a0, m.s(j5, c2));
                }
                r0 += "</optgroup>";
            } else {
                r0 += m.f('f10', c1, i1, l1, a0, m.s(j5, c1));
            }
        }
        r0 += "</select>";
        r0 += "<div class=\"" + "nb-select__dropdown nb-select__dropdown_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + " nb-select_theme_" + nodeset2attrvalue( ( selectNametest('theme', c0, []) ) ) + "\"></div>";
        r0 += "</span>";

        return r0;
    };
    M.t9.j = j54;
    M.t9.a = 0;

    // match .checkbox : nb
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var uniq : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('id', c0)) {
            r1 += simpleScalar('id', c0);
        } else {
            r1 += (yr.externals['nb-uniq'])();
        }
        var v111 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'data-nb': new yr.scalarAttr("checkbox"),
            'class': new yr.scalarAttr("nb-checkbox nb-checkbox_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-checkbox_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + " _init"),
            'for': new yr.scalarAttr("nb-checkbox_" + ( v111 ))
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox__input"),
            'id': new yr.scalarAttr("nb-checkbox_" + ( v111 ))
        };
        a0.s = 'input';
        if (cmpSN("button", selectNametest('type', c0, []))) {
            a0.a[ "type" ] = new yr.scalarAttr("checkbox");
        } else {
            a0.a[ "type" ] = new yr.scalarAttr(simpleScalar('type', c0));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('value', c0)) {
            a0.a[ "value" ] = new yr.scalarAttr(simpleScalar('value', c0));
        }
        if (simpleBoolean('tabindex', c0)) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        if (!(cmpSN("button", selectNametest('type', c0, [])))) {
            r0 += "<span class=\"" + "nb-checkbox__flag nb-checkbox__flag_type_" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "\"><span class=\"" + "nb-checkbox__flag__icon" + "\"></span></span>";
        }
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-checkbox__label")
        };
        a0.s = 'span';
        if (cmpSN("button", selectNametest('type', c0, []))) {
            var r1 = '';
            var a1 = { a: {} };
            r1 += " nb-button nb-button_size_";
            r1 += simpleScalar('size', c0);
            r1 += " nb-button_theme_";
            r1 += simpleScalar('theme', c0);
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(r1);
            }
            r0 += closeAttrs(a0);
            r0 += "<span class=\"" + "nb-button__text" + "\">";
            if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
                r0 += simpleScalar('content', c0);
            }
            r0 += "</span>";
        } else {
            r0 += closeAttrs(a0);
            if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
                r0 += simpleScalar('content', c0);
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t10.j = j60;
    M.t10.a = 0;

    // match .input : nb
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var errorId : scalar
        var v112 = "nb-input_error" + (yr.externals['nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-input nb-input_type_complex")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('placeholder', c0) || simpleBoolean('error', c0) || simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _init");
            }
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('size', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-ghost");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-ghost");
            }
            a0.a[ "data-nb-ghost" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('error', c0)) {
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v112 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j63, c0) ) ) + "\" }");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('placeholder', c0)) {
            r0 += "<span class=\"" + "nb-input__placeholder" + "\">";
            r0 += "<span class=\"" + "nb-input__placeholder-inner" + "\">";
            if (nodeset2boolean( m.s(j64, c0) )) {
                r0 += "<span class=\"" + "nb-input__placeholder-ghost" + "\"></span>";
                r0 += "<span class=\"" + "nb-input__placeholder-content" + "\">";
                r0 += nodeset2xml( m.s(j65, c0) );
                r0 += "</span>";
            } else {
                r0 += nodeset2xml( selectNametest('placeholder', c0, []) );
            }
            r0 += "</span>";
            r0 += "</span>";
        }
        if (simpleBoolean('error', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "nb-popup_type_error";
                r0[ "content" ] = yr.nodeset2data(m.s(j66, c0));
                r0[ "id" ] = v112;

                return r0;
            })()));
        }
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "nb-input__reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "nb-input__left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "nb-input__right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "nb-input__content" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-input__controller"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) ))
        };
        a0.s = 'input';
        var items0 = m.s(j21, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-input__view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t11.j = j62;
    M.t11.a = 0;

    // match .textarea : nb
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var errorId : scalar
        var v113 = "nb-input_error" + (yr.externals['nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-input nb-input_type_complex")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('size', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-ghost _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-ghost _init");
            }
            a0.a[ "data-nb-ghost" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('error', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _init");
            }
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v113 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j63, c0) ) ) + "\" }");
            r0 += closeAttrs(a0);
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "nb-popup_type_error";
                r0[ "content" ] = yr.nodeset2data(m.s(j66, c0));
                r0[ "id" ] = v113;

                return r0;
            })()));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "nb-input__reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "nb-input__left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "nb-input__right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "nb-input__content" + "\">";
        r0 += "<textarea";
        a0.a = {
            'class': new yr.scalarAttr("nb-input__controller")
        };
        a0.s = 'textarea';
        var items0 = m.s(j21, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</textarea>";
        r0 += "<span class=\"" + "nb-input__view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t12.j = j67;
    M.t12.a = 0;

    // match .inputSimple : nb
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'data-nb-type': new yr.scalarAttr("simple"),
            'class': new yr.scalarAttr("nb-input _init nb-input_type_simple")
        };
        a0.s = 'input';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('size', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t13.j = j68;
    M.t13.a = 0;

    // match .textareaSimple : nb
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<textarea";
        a0.a = {
            'data-nb-type': new yr.scalarAttr("simple"),
            'class': new yr.scalarAttr("nb-input _init nb-input_type_simple")
        };
        a0.s = 'textarea';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('size', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</textarea>";

        return r0;
    };
    M.t14.j = j69;
    M.t14.a = 0;

    // match .input-group : nb
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-input-group"),
            'data-nb': new yr.scalarAttr("input-group")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-input-group_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-input-group_disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (c1.name == "button") {
                r0 += m.f('f1', c1, i1, l1, a0, m.s(j5, c1));
            } else if (c1.name == "input") {
                r0 += m.f('f12', c1, i1, l1, a0, m.s(j5, c1));
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t15.j = j70;
    M.t15.a = 0;

    // match .progress : nb
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("progress"),
            'class': new yr.scalarAttr("nb-progress _init nb-progress_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) )),
            'data-nb-type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('bar', c0)) {
            r0 += "<div class=\"" + "nb-progress__bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"></div>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "nb-progress__title js-title" + "\">";
            if (cmpSN("percentage", selectNametest('type', c0, []))) {
                r0 += scalar2xml( simpleScalar('start', c0) + "%" );
            } else {
                r0 += nodeset2xml( selectNametest('title', c0, []) );
            }
            r0 += "</div>";
        }
        r0 += "<input type=\"" + "hidden" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"/>";
        r0 += "</div>";

        return r0;
    };
    M.t16.j = j71;
    M.t16.a = 0;

    // match .icon : nb
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( m.s(j5, c0) ) ) + "\"/>";

        return r0;
    };
    M.t17.j = j8;
    M.t17.a = 0;

    // match .icon[ .icon ] : nb
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<img src=\"" + "//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" + "\" class=\"" + "nb-icon nb-icon_" + nodeset2attrvalue( ( selectNametest('icon', c0, []) ) ) + " nb-icon_size_" + nodeset2attrvalue( ( selectNametest('size', c0, []) ) ) + "\"/>";

        return r0;
    };
    M.t18.j = j75;
    M.t18.a = 0;

    // match .paranja : nb
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-paranja nb-paranja_theme_" + nodeset2scalar( ( selectNametest('theme', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t19.j = j76;
    M.t19.a = 0;

    // match .island : nb
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-island")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('padding', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-island_padding_" + nodeset2scalar( ( selectNametest('padding', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-island_padding_" + nodeset2scalar( ( selectNametest('padding', c0, []) ) ));
            }
        }
        if (simpleBoolean('type', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-island_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-island_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t20.j = j77;
    M.t20.a = 0;

    // match .dropzone : nb
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-dropzone")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (!(cmpSN("modal", selectNametest('type', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_static");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_static");
            }
        }
        if (simpleBoolean('type', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-dropzone_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-dropzone_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('head', c0)) {
            r0 += "<div class=\"" + "nb-dropzone__head" + "\">";
            r0 += nodeset2xml( selectNametest('head', c0, []) );
            r0 += "</div>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += "<div class=\"" + "nb-dropzone__text" + "\">";
            if (simpleBoolean('content', c0)) {
                r0 += simpleScalar('content', c0);
            }
            if (!(cmpSN("false", selectNametest('button', c0, [])))) {
                r0 += m.f('f1', c0, i0, l0, a0, selectNametest('button', c0, []));
            }
            r0 += "</div>";
        }
        if (cmpSN("modal", selectNametest('type', c0, []))) {
            r0 += "<div class=\"" + "nb-dropzone__cover js-dropzone" + "\"></div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t21.j = j79;
    M.t21.a = 0;

    // match .loader : nb
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-loader nb-loader_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ))
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-loader__spinner")
        };
        a0.s = 'span';
        if (simpleBoolean('color', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-loader__spinner_color_" + nodeset2scalar( ( selectNametest('color', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-loader__spinner_color_" + nodeset2scalar( ( selectNametest('color', c0, []) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t22.j = j81;
    M.t22.a = 0;

    // match .slider : nb
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-slider _init nb-slider_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " nb-slider_orientation_" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "  nb-slider__handle_type_" + nodeset2scalar( ( selectNametest('type', c0, []) ) ))
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        a0.a[ "data-nb-value" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) ));
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("slider");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-slider__body nb-slider__body_type_" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "\">";
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("ui-slider-handle")
        };
        a0.s = 'label';
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-slider__small-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-slider__small-handle");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-slider__handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-slider__handle");
            }
        }
        if (nodeset2boolean( m.s(j85, c0) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( m.s(j85, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( m.s(j85, c0) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button__text" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-slider__fallback"),
            'type': new yr.scalarAttr("text"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) )),
            'readonly': new yr.scalarAttr("readonly")
        };
        a0.s = 'input';
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('name', c0, []) ) ));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</span>";
        r0 += "</label>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t23.j = j83;
    M.t23.a = 0;

    // match .tabs : nb
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var prefix : scalar
        var v114 = "tabs-" + ( (yr.externals['nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-tabs nb-tabs_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("tabs")
        };
        a0.s = 'div';
        if (simpleBoolean('rise', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-tabs_rise_" + nodeset2scalar( ( selectNametest('rise', c0, []) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-tabs_rise_" + nodeset2scalar( ( selectNametest('rise', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "nb-tabs__tabs" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<li";
            a0.a = {
                'class': new yr.scalarAttr("nb-tabs__tab")
            };
            a0.s = 'li';
            if (simpleBoolean('active', c1)) {
                var tmp1 = a0.a[ "class" ];
                if (tmp1) {
                    a0.a[ "class" ] = tmp1.addscalar(" ui-tabs-active");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr(" ui-tabs-active");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<a class=\"" + "nb-tabs__link _link" + "\" href=\"" + "#" + scalar2attrvalue( ( v114 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += nodeset2xml( selectNametest('title', c1, []) );
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "nb-tabs__panel" + "\" id=\"" + scalar2attrvalue( ( v114 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            if (simpleBoolean('content', c1)) {
                r0 += simpleScalar('content', c1);
            }
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t24.j = j86;
    M.t24.a = 0;

    // match .arrow : nb
    M.t25 = function t25(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow _init"),
            'data-nb': new yr.scalarAttr("arrow")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (!(cmpSN("true", selectNametest('search', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow_service");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow_service");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow_search");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow_search");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-arrow__top" + "\"></div>";
        r0 += "<div class=\"" + "nb-arrow__bottom" + "\"></div>";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow__content")
        };
        a0.s = 'div';
        if (!(cmpSN("true", selectNametest('search', c0, [])))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow__service");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow__service");
            }
            r0 += closeAttrs(a0);
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "_link nb-arrow__service__name" + "\">" + nodeset2xml( ( selectNametest('text', c0, []) ) ) + "</a>";
        } else {
            //  var input : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "class" ] = "nb-arrow__input";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "autocomplete" ] = "off";
            r2[ "value" ] = yr.nodeset2data(selectNametest('value', c0, []));
            r2[ "name" ] = "text";
            r1[ "attrs" ] = r2;
            var v115 = r1;

            //  var button : object
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "content" ] = yr.nodeset2data(selectNametest('buttonContent', c0, []));
            r1[ "class" ] = "nb-arrow__button";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "type" ] = "submit";
            r1[ "attrs" ] = r2;
            var v116 = r1;

            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-arrow__search");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-arrow__search");
            }
            r0 += closeAttrs(a0);
            r0 += "<form";
            a0.a = {
            };
            a0.s = 'form';
            if (simpleBoolean('action', c0)) {
                a0.a[ "action" ] = new yr.scalarAttr(simpleScalar('action', c0));
            }
            r0 += closeAttrs(a0);
            r0 += m.f('f1', c0, i0, l0, a0, yr.object2nodeset( v116 ));
            if (simpleBoolean('text', c0)) {
                r0 += "<div class=\"" + "nb-arrow__name__wrap" + "\">";
                r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('href', c0, []) ) ) + "\" class=\"" + "nb-arrow__name _link" + "\">" + nodeset2xml( ( selectNametest('text', c0, []) ) ) + "</a>";
                r0 += "</div>";
            }
            r0 += "<div class=\"" + "nb-arrow__input__wrap" + "\">";
            r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset( v115 ));
            r0 += "</div>";
            if (simpleBoolean('requests', c0)) {
                r0 += "<div class=\"" + "nb-arrow__requests__wrap" + "\">";
                r0 += "<span class=\"" + "nb-arrow__input_fake" + "\">" + " " + "</span>";
                r0 += "<div class=\"" + "nb-arrow__requests" + "\">" + " — " + nodeset2xml( ( selectNametest('requests', c0, []) ) ) + " " + "</div>";
                r0 += "</div>";
            }
            r0 += "</form>";
        }
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t25.j = j89;
    M.t25.a = 0;

    // match .header : nb
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-header _init"),
            'data-nb': new yr.scalarAttr("header")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "nb-header__actions" + "\">";
        if (cmpSN("true", selectNametest('settings', c0, []))) {
            //  var iconSettings : object
            var r1 = {};
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "settings";
            r2[ "size" ] = "m";
            r1[ "icon" ] = r2;
            var v117 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j8, yr.object2nodeset( v117 )), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
            r0 += "</div>";
        }
        if (cmpSN("true", selectNametest('services', c0, []))) {
            //  var iconServices : object
            var r1 = {};
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "icon" ] = "services";
            r2[ "size" ] = "m";
            r1[ "icon" ] = r2;
            var v118 = r1;

            r0 += "<div class=\"" + "nb-header__button" + "\">";
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("nb-header__button__icon")
            };
            a0.s = 'div';
            r0 += m.a(m, m.n(j8, yr.object2nodeset( v118 )), 'nb', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
            r0 += "</div>";
        }
        if (simpleBoolean('user', c0)) {
            r0 += m.f('f24', c0, i0, l0, a0, selectNametest('user', c0, []));
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-header__main" + "\">";
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('yaHref', c0, []) ) ) + "\" class=\"" + "nb-header__logo" + "\"></a>";
        r0 += m.f('f22', c0, i0, l0, a0, selectNametest('arrow', c0, []));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t26.j = j94;
    M.t26.a = 0;

    // match .user : nb
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-user nb-user_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("user")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('justify', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_justify");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_justify");
            }
        }
        if (!simpleBoolean('rightToLeft', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_direction_ltr");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_direction_ltr");
            }
            r0 += m.a(m, m.s(j5, c0), 'nb-user-pic', a0)
            r0 += m.a(m, m.s(j5, c0), 'nb-user-name', a0)
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-user_direction_rtl");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-user_direction_rtl");
            }
            r0 += m.a(m, m.s(j5, c0), 'nb-user-name', a0)
            r0 += m.a(m, m.s(j5, c0), 'nb-user-pic', a0)
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t27.j = j97;
    M.t27.a = 0;

    // match .user : nb-user-pic
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-user__avatar nb-user__avatar_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ))
        };
        a0.s = 'span';
        if (simpleBoolean('userpic', c0)) {
            var tmp0 = a0.a[ "style" ];
            if (tmp0) {
                a0.a[ "style" ] = tmp0.addscalar(" background-image: url('" + nodeset2scalar( ( selectNametest('userpic', c0, []) ) ) + "')");
            } else {
                a0.a[ "style" ] = new yr.scalarAttr(" background-image: url('" + nodeset2scalar( ( selectNametest('userpic', c0, []) ) ) + "')");
            }
        }
        r0 += closeAttrs(a0);
        if (simpleScalar('notices', c0) > 0) {
            r0 += "<span class=\"" + "nb-user__notice-count" + "\">";
            r0 += nodeset2xml( selectNametest('notices', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t28.j = j97;
    M.t28.a = 0;

    // match .user : nb-user-name
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-user__label" + "\">";
        r0 += "<span class=\"" + "nb-user__name _link" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('username', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('username', c0, []) );
        r0 += "</span>";
        if (simpleBoolean('email', c0)) {
            r0 += "<span class=\"" + "nb-user__email" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('email', c0, []) ) ) + "\">";
            r0 += nodeset2xml( selectNametest('email', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t29.j = j97;
    M.t29.a = 0;

    // match .suggest : nb
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-suggest _init"),
            'data-nb': new yr.scalarAttr("suggest")
        };
        a0.s = 'div';
        a0.a[ "data-countMax" ] = new yr.scalarAttr(simpleScalar('countMax', c0));
        a0.a[ "data-type" ] = new yr.scalarAttr(simpleScalar('type', c0));
        a0.a[ "data-size" ] = new yr.scalarAttr(simpleScalar('size', c0));
        a0.a[ "data-source" ] = new yr.scalarAttr(simpleScalar('source', c0));
        a0.a[ "data-highlight" ] = new yr.scalarAttr(simpleScalar('highlight', c0));
        a0.a[ "data-class-suggest" ] = new yr.scalarAttr("nb-island nb-island_type_fly nb-suggest__container nb-suggest_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ));
        if (simpleBoolean('class', c0)) {
            var tmp0 = a0.a[ "data-class-suggest" ];
            if (tmp0) {
                a0.a[ "data-class-suggest" ] = tmp0.addscalar(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            } else {
                a0.a[ "data-class-suggest" ] = new yr.scalarAttr(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            }
        }
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += m.f('f12', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "class" ] = "nb-suggest__input";
            r0[ "attrs" ] = yr.nodeset2data(selectNametest('attrsInput', c0, []));
            r0[ "disabled" ] = yr.nodeset2data(selectNametest('disabled', c0, []));
            r0[ "name" ] = yr.nodeset2data(selectNametest('name', c0, []));
            r0[ "content" ] = yr.nodeset2data(selectNametest('content', c0, []));

            return r0;
        })()));
        r0 += "</div>";

        return r0;
    };
    M.t30.j = j105;
    M.t30.a = 0;

    // match / : nb-suggest
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<li class=\"" + "nb-suggest__item" + "\">";
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("nb-suggest__item__link")
        };
        a0.s = 'a';
        r0 += m.a(m, selectNametest('item', c0, []), 'nb-suggest', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";
        r0 += "</li>";

        return r0;
    };
    M.t31.j = 1;
    M.t31.a = 1;

    // match /[ .type == "default" ].item : nb-suggest
    M.t32 = function t32(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('labelContent', c0)) {
            r0 += simpleScalar('labelContent', c0);
        }

        return r0;
    };
    M.t32.j = j113;
    M.t32.a = 1;

    // match /[ .type == "username" ].item : nb-suggest
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var user : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = yr.nodeset2data(selectNametest('size', c0.doc.root, []));
        r1[ "mod" ] = "suggest";
        var r2 = [];
        if (simpleBoolean('username', c0)) {
            r2 += yr.nodeset2data(selectNametest('username', c0, []));
        } else if (simpleBoolean('email', c0)) {
            r2 += yr.nodeset2data(selectNametest('email', c0, []));
        }
        r1[ "username" ] = r2;
        r1[ "rightToLeft" ] = true;
        if (simpleBoolean('username', c0) && simpleBoolean('email', c0)) {
            r1[ "email" ] = yr.nodeset2data(selectNametest('email', c0, []));
        }
        r1[ "justify" ] = true;
        if (simpleBoolean('userpic', c0)) {
            r1[ "userpic" ] = yr.nodeset2data(selectNametest('userpic', c0, []));
        }
        if (simpleBoolean('usernameHighlighted', c0)) {
            r1[ "usernameHighlighted" ] = yr.nodeset2data(selectNametest('usernameHighlighted', c0, []));
        }
        if (simpleBoolean('emailHighlighted', c0)) {
            r1[ "emailHighlighted" ] = yr.nodeset2data(selectNametest('emailHighlighted', c0, []));
        }
        var v119 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f24', c0, i0, l0, a0, yr.object2nodeset( v119 ));

        return r0;
    };
    M.t33.j = j114;
    M.t33.a = 1;

    // match .user[ .mod == "suggest" && .usernameHighlighted ].username : nb-user-name
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j120, c0) );

        return r0;
    };
    M.t34.j = j119;
    M.t34.a = 0;

    // match .user[ .mod == "suggest" && .emailHighlighted ].email : nb-user-name
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j122, c0) );

        return r0;
    };
    M.t35.j = j121;
    M.t35.a = 0;

    // match .toggler : nb
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'tabindex': new yr.scalarAttr("1"),
            'class': new yr.scalarAttr("nb-toggler nb-toggler_size_" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + " _init"),
            'data-nb': new yr.scalarAttr("toggler")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j5, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('checked', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-checked");
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "nb-toggler__label" + "\">";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("checkbox"),
            'class': new yr.scalarAttr("nb-toggler__checkbox")
        };
        a0.s = 'input';
        var items0 = m.s(j21, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j5, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</label>";
        r0 += "<div class=\"" + "nb-toggler__container" + "\">";
        r0 += "<div class=\"" + "nb-toggler__sticker nb-toggler__sticker_left" + "\">";
        r0 += "<span class=\"" + "nb-toggler__text" + "\">";
        r0 += nodeset2xml( selectNametest('leftText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-toggler__sticker nb-toggler__sticker_right" + "\">";
        r0 += "<span class=\"" + "nb-toggler__text" + "\">";
        r0 += nodeset2xml( selectNametest('rightText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "nb-toggler__knob" + "\"></div>";
        r0 += "</a>";

        return r0;
    };
    M.t36.j = j123;
    M.t36.a = 0;

    // match /
    M.t37 = function t37(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var check : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "Компактный вид";
        r1[ "class" ] = "js-toggle-compact";
        var v120 = r1;

        //  var check2 : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "HTML";
        r1[ "class" ] = "js-toggle-html";
        var v121 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "demo-toggle nb-island nb-island_fly" + "\">";
        r0 += "<div class=\"" + "demo-toggle__section" + "\">";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v120 ));
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-toggle__section demo-toggle__section_second" + "\">";
        r0 += m.f('f11', c0, i0, l0, a0, yr.object2nodeset( v121 ));
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Кнопки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f43', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Флаги";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f48', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Поля ввода";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f70', c0, i0, l0, a0);
        r0 += m.f('f71', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Прогрессбары";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f56', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Острова";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f75', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Крутилки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f79', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Иконки";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f82', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Слайдеры";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f86', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Cелекты";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f32', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Выпадающие списки";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f54', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Tooltips";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f87', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Табы";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-h5" + "\">";
        r0 += "Требует подключения JS";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f93', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Suggests";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f101', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Arrows";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f98', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Шапка";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f99', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Блок юзера";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f100', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Dropzone";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f55', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane" + "\">";
        r0 += "<div class=\"" + "demo-pane__desc" + "\">";
        r0 += "<div class=\"" + "demo-h2" + "\">";
        r0 += "Toggler";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "demo-pane__content" + "\">";
        r0 += m.f('f102', c0, i0, l0, a0);
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t37.j = 1;
    M.t37.a = 1;

    M.matcher = {
        "nb-main-attrs": {
            "*": [
                "t0"
            ]
        },
        "nb-main-content": {
            "*": [
                "t1"
            ]
        },
        "nb": {
            "button": [
                "t2"
            ],
            "buttonLink": [
                "t3"
            ],
            "buttonAttach": [
                "t4"
            ],
            "popupMenu": [
                "t5"
            ],
            "popup": [
                "t6"
            ],
            "modalPopup": [
                "t7"
            ],
            "radio-button": [
                "t8"
            ],
            "select": [
                "t9"
            ],
            "checkbox": [
                "t10"
            ],
            "input": [
                "t11"
            ],
            "textarea": [
                "t12"
            ],
            "inputSimple": [
                "t13"
            ],
            "textareaSimple": [
                "t14"
            ],
            "input-group": [
                "t15"
            ],
            "progress": [
                "t16"
            ],
            "icon": [
                "t18",
                "t17"
            ],
            "paranja": [
                "t19"
            ],
            "island": [
                "t20"
            ],
            "dropzone": [
                "t21"
            ],
            "loader": [
                "t22"
            ],
            "slider": [
                "t23"
            ],
            "tabs": [
                "t24"
            ],
            "arrow": [
                "t25"
            ],
            "header": [
                "t26"
            ],
            "user": [
                "t27"
            ],
            "suggest": [
                "t30"
            ],
            "toggler": [
                "t36"
            ]
        },
        "nb-user-pic": {
            "user": [
                "t28"
            ]
        },
        "nb-user-name": {
            "user": [
                "t29"
            ],
            "username": [
                "t34"
            ],
            "email": [
                "t35"
            ]
        },
        "nb-suggest": {
            "": [
                "t31"
            ],
            "item": [
                "t33",
                "t32"
            ]
        },
        "": {
            "": [
                "t37"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();

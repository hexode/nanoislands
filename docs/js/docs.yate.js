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

    // func nb-nodeset-to-xml(xml data) : xml
    M.f0 = function f0(m, c0, i0, l0, a0, v0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += v0;

        return r0;
    };

    var j0 = [ 0, '*' ];

    // func _nb-block(name, nodeset options) : xml
    M.f1 = function f1(m, c0, i0, l0, a0, v1, v2) {
        v2 = (v2 === undefined) ? [] : v2;
        var r0 = '';

        r0 += m.a(m, 0, m.n(j0, (yr.externals['_nb-wrap'])(v1, v2)), 'nb', a0)

        return r0;
    };

    var j1 = [ 0, 'name' ];

    var j2 = [ 0, 'size' ];

    var j3 = [ 0, 'theme' ];

    var j4 = [ 0, 'type' ];

    // func _size-theme-type-class(nodeset options) : attr
    M.f2 = function f2(m, c0, i0, l0, a0, v3) {
        v3 = (v3 === undefined) ? [] : v3;
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-" + nodeset2scalar( ( m.n(j1, v3) ) ));
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-" + nodeset2scalar( ( m.n(j1, v3) ) ));
        }
        if ((!nodeset2boolean( m.n(j2, v3) ) || cmpSN("m", m.n(j2, v3))) && (!nodeset2boolean( m.n(j3, v3) ) || cmpSN("normal", m.n(j3, v3))) && !nodeset2boolean( m.n(j4, v3) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-normal-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-normal-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            }
        } else {
            //  var size : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (cmpSN("s", m.n(j2, v3))) {
                r1 += "-small";
            } else if (cmpSN("l", m.n(j2, v3))) {
                r1 += "-large";
            } else if (cmpSN("xl", m.n(j2, v3))) {
                r1 += "-extra-large";
            }
            var v4 = r1;

            //  var theme : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (!(cmpSN("normal", m.n(j3, v3))) && nodeset2boolean( m.n(j3, v3) )) {
                r1 += "-" + nodeset2scalar( m.n(j3, v3) );
            }
            var v5 = r1;

            //  var type : scalar
            var r1 = '';
            var a1 = { a: {} };
            if (nodeset2boolean( m.n(j4, v3) )) {
                r1 += "-" + nodeset2scalar( m.n(j4, v3) );
            }
            var v6 = r1;

            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb" + ( v4 ) + ( v5 ) + ( v6 ) + "-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb" + ( v4 ) + ( v5 ) + ( v6 ) + "-" + nodeset2scalar( ( m.n(j1, v3) ) ));
            }
        }

        return a0.a;
    };

    // func nb-icon(nodeset options) : xml
    M.f3 = function f3(m, c0, i0, l0, a0, v7) {
        v7 = (v7 === undefined) ? [] : v7;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v8 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "ico", (yr.externals['_nb-extend'])(yr.object2nodeset( v8 ), v7));

        return r0;
    };

    // func nb-button(nodeset options) : xml
    M.f4 = function f4(m, c0, i0, l0, a0, v9) {
        v9 = (v9 === undefined) ? [] : v9;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        var v10 = r1;

        r0 += closeAttrs(a0);
        if (cmpSN("file", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonAttach", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("inline", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonSpan", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("label", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonLabel", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else if (cmpSN("link", m.n(j4, v9))) {
            r0 += m.f('f1', c0, i0, l0, a0, "buttonLink", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        } else {
            r0 += m.f('f1', c0, i0, l0, a0, "button", (yr.externals['_nb-extend'])(yr.object2nodeset( v10 ), v9));
        }

        return r0;
    };

    var j5 = [ 0, 'disabled' ];

    var j6 = [ 0, 'checked' ];

    var j7 = [ 0, 'attrs', 0, 'name' ];

    var j8 = [ 0, 'content' ];

    var j9 = [ 0, 'icon' ];

    var j10 = [ 0, 'iconText' ];

    // func _nb-button-attributes(type) : attr
    M.f5 = function f5(m, c0, i0, l0, a0, v11) {
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "button";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            if (v11 == "button") {
                a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            }
        }
        if (v11 == "attach") {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-attach-button");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-attach-button");
            }
        }
        if (simpleBoolean('checked', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-checked");
            }
        }
        if (v11 == "button") {
            if (simpleBoolean('name', c0)) {
                a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
            }
            if (nodeset2boolean( m.s(j7, c0) )) {
                a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c0) ));
            }
        }
        if (!nodeset2boolean( (selectNametest('content', c0, [])) ) && (simpleBoolean('icon', c0) || simpleBoolean('iconText', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-with-only-button");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-with-only-button");
            }
        }

        return a0.a;
    };

    // func _nb-button-content() : xml
    M.f6 = function f6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (simpleBoolean('iconText', c0)) {
            r0 += "<span class=\"" + "nb-icon _nb-icon-text" + "\">";
            r0 += nodeset2xml( selectNametest('iconText', c0, []) );
            r0 += "</span>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }

        return r0;
    };

    var j11 = [ 0, 'static' ];

    // func _nb-button-static() : attr
    M.f7 = function f7(m, c0, i0, l0, a0) {
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _init");
            }
            a0.a[ "data-nb" ] = new yr.scalarAttr("button");
        }

        return a0.a;
    };

    // func nb-popup-menu(nodeset options) : xml
    M.f8 = function f8(m, c0, i0, l0, a0, v12) {
        v12 = (v12 === undefined) ? [] : v12;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v13 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "popupMenu", (yr.externals['_nb-extend'])(yr.object2nodeset( v13 ), v12));

        return r0;
    };

    // func nb-popup(nodeset options) : xml
    M.f9 = function f9(m, c0, i0, l0, a0, v14) {
        v14 = (v14 === undefined) ? [] : v14;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "none" ] = "none";
        var v15 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "popup", (yr.externals['_nb-extend'])(yr.object2nodeset( v15 ), v14));

        return r0;
    };

    // func nb-popup-modal(nodeset options) : xml
    M.f10 = function f10(m, c0, i0, l0, a0, v16) {
        v16 = (v16 === undefined) ? [] : v16;
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
        var v17 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "modalPopup", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v17 ), v16));

        return r0;
    };

    // func _nb-popup-content(nodeset content) : xml
    M.f11 = function f11(m, c0, i0, l0, a0, v18) {
        v18 = (v18 === undefined) ? [] : v18;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-content" + "\">";
        r0 += nodeset2scalar( v18 );
        r0 += "</div>";

        return r0;
    };

    // func _nb-popup-title(nodeset title) : xml
    M.f12 = function f12(m, c0, i0, l0, a0, v19) {
        v19 = (v19 === undefined) ? [] : v19;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-title" + "\">";
        r0 += nodeset2scalar( v19 );
        r0 += "</div>";

        return r0;
    };

    var j12 = [ 0, 'data' ];

    var j13 = [ 0, 'data', 0, '*' ];

    var j14 = [ 1, 0 ];

    // func _nb-popup-buttons(nodeset buttons) : xml
    M.f13 = function f13(m, c0, i0, l0, a0, v20) {
        v20 = (v20 === undefined) ? [] : v20;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("_nb-popup-buttons")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, v20, 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (( m.n(j13, v20) ).length) {
            var items0 = m.n(j12, v20);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.f('f4', c1, i1, l1, a0, m.s(j14, c1));
            }
        } else {
            r0 += nodeset2scalar( m.n(j12, v20) );
        }
        r0 += "</div>";

        return r0;
    };

    // func nb-radio-button(nodeset options) : xml
    M.f14 = function f14(m, c0, i0, l0, a0, v21) {
        v21 = (v21 === undefined) ? [] : v21;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "type" ] = "radio";
        var v22 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "radio-button", (yr.externals['_nb-extend'])(yr.object2nodeset( v22 ), v21));

        return r0;
    };

    // func nb-select(nodeset select) : xml
    M.f15 = function f15(m, c0, i0, l0, a0, v23) {
        v23 = (v23 === undefined) ? [] : v23;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "theme" ] = "normal";
        r1[ "direction" ] = "bottom";
        var v24 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "select", (yr.externals['_nb-extend'])(yr.object2nodeset( v24 ), v23));

        return r0;
    };

    var j15 = [ 0, 'text' ];

    var j16 = [ 0, 'value' ];

    var j17 = [ 0, 'selected' ];

    var j18 = [ 0, 'separator' ];

    // func _select-option(nodeset item) : xml
    M.f16 = function f16(m, c0, i0, l0, a0, v25) {
        v25 = (v25 === undefined) ? [] : v25;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<option";
        a0.a = {
        };
        a0.s = 'option';
        if (nodeset2boolean( m.n(j18, v25) )) {
            a0.a[ "separator" ] = new yr.scalarAttr("true");
        } else {
            a0.a[ "label" ] = new yr.scalarAttr(nodeset2scalar( m.n(j15, v25) ));
            a0.a[ "value" ] = new yr.scalarAttr(nodeset2scalar( m.n(j16, v25) ));
            a0.a[ "data-icon" ] = new yr.scalarAttr(simpleScalar('icon', c0));
            if (nodeset2boolean( (m.n(j17, v25)) )) {
                a0.a[ "selected" ] = new yr.scalarAttr("");
            }
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( m.n(j15, v25) );
        }
        r0 += closeAttrs(a0);
        r0 += "</option>";

        return r0;
    };

    // func nb-checkbox(nodeset options) : xml
    M.f17 = function f17(m, c0, i0, l0, a0, v26) {
        v26 = (v26 === undefined) ? [] : v26;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        r1[ "type" ] = "checkbox";
        r1[ "theme" ] = "normal";
        var v27 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "checkbox", (yr.externals['_nb-extend'])(yr.object2nodeset( v27 ), v26));

        return r0;
    };

    var j19 = [ 0, 'leftContent' ];

    var j20 = [ 0, 'rightContent' ];

    var j21 = [ 0, 'labelContent' ];

    var j22 = [ 0, 'reset' ];

    var j23 = [ 0, 'ghost' ];

    var j24 = [ 0, 'error' ];

    var j25 = [ 0, 'hint' ];

    // func nb-input(nodeset options) : xml
    M.f18 = function f18(m, c0, i0, l0, a0, v28) {
        v28 = (v28 === undefined) ? [] : v28;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "s";
        var v29 = r1;

        r0 += closeAttrs(a0);
        if (nodeset2boolean( m.n(j19, v28) ) || nodeset2boolean( m.n(j20, v28) ) || nodeset2boolean( m.n(j21, v28) ) || nodeset2boolean( m.n(j22, v28) ) || nodeset2boolean( m.n(j23, v28) ) || nodeset2boolean( m.n(j24, v28) ) || nodeset2boolean( m.n(j25, v28) )) {
            if (cmpSN("multiline", m.n(j4, v28))) {
                r0 += m.f('f1', c0, i0, l0, a0, "textarea", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            } else {
                r0 += m.f('f1', c0, i0, l0, a0, "input", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            }
        } else {
            if (cmpSN("multiline", m.n(j4, v28))) {
                r0 += m.f('f1', c0, i0, l0, a0, "textareaSimple", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            } else {
                r0 += m.f('f1', c0, i0, l0, a0, "inputSimple", (yr.externals['_nb-extend'])(yr.object2nodeset( v29 ), v28));
            }
        }

        return r0;
    };

    // func nb-input-group(nodeset options) : xml
    M.f19 = function f19(m, c0, i0, l0, a0, v30) {
        v30 = (v30 === undefined) ? [] : v30;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "input-group", v30);

        return r0;
    };

    // func nb-progress(nodeset options) : xml
    M.f20 = function f20(m, c0, i0, l0, a0, v31) {
        v31 = (v31 === undefined) ? [] : v31;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "bar" ] = "true";
        r1[ "start" ] = "0";
        r1[ "type" ] = "percentage";
        r1[ "title" ] = " ";
        var v32 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "progress", (yr.externals['_nb-extend'])(yr.object2nodeset( v32 ), v31));

        return r0;
    };

    // func nb-paranja(nodeset options) : xml
    M.f21 = function f21(m, c0, i0, l0, a0, v33) {
        v33 = (v33 === undefined) ? [] : v33;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "theme" ] = "dark";
        var v34 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "paranja", (yr.externals['_nb-extend'])(yr.object2nodeset( v34 ), v33));

        return r0;
    };

    // func nb-island(nodeset options) : xml
    M.f22 = function f22(m, c0, i0, l0, a0, v35) {
        v35 = (v35 === undefined) ? [] : v35;
        var r0 = '';

        //  var island : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "content" ] = "";
        var v36 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "island", (yr.externals['_nb-extend'])(yr.object2nodeset( v36 ), v35));

        return r0;
    };

    // func nb-dropzone(nodeset options) : xml
    M.f23 = function f23(m, c0, i0, l0, a0, v37) {
        v37 = (v37 === undefined) ? [] : v37;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "size" ] = "s";
        r2[ "type" ] = "file";
        r2[ "theme" ] = "pseudo";
        r2[ "class" ] = "_nb-dropzone-button";
        r1[ "button" ] = r2;
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "dropzone", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v38 ), v37));

        return r0;
    };

    // func nb-loader(nodeset options) : xml
    M.f24 = function f24(m, c0, i0, l0, a0, v39) {
        v39 = (v39 === undefined) ? [] : v39;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v40 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "loader", (yr.externals['_nb-extend'])(yr.object2nodeset( v40 ), v39));

        return r0;
    };

    // func nb-slider(nodeset options) : xml
    M.f25 = function f25(m, c0, i0, l0, a0, v41) {
        v41 = (v41 === undefined) ? [] : v41;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "value" ] = 0;
        r1[ "type" ] = "range";
        r1[ "size" ] = "s";
        r1[ "orientation" ] = "horiz";
        var v42 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "slider", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v42 ), v41));

        return r0;
    };

    // func nb-tabs(nodeset options) : xml
    M.f26 = function f26(m, c0, i0, l0, a0, v43) {
        v43 = (v43 === undefined) ? [] : v43;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v44 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "tabs", (yr.externals['_nb-extend'])(yr.object2nodeset( v44 ), v43));

        return r0;
    };

    // func nb-arrow(nodeset arrow) : xml
    M.f27 = function f27(m, c0, i0, l0, a0, v45) {
        v45 = (v45 === undefined) ? [] : v45;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "search" ] = "true";
        r1[ "buttonContent" ] = "Find";
        var v46 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "arrow", (yr.externals['_nb-extend'])(yr.object2nodeset( v46 ), v45));

        return r0;
    };

    // func nb-header(nodeset header) : xml
    M.f28 = function f28(m, c0, i0, l0, a0, v47) {
        v47 = (v47 === undefined) ? [] : v47;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        var r2 = {};
        var a2 = { a: {} };
        r2[ "search" ] = "true";
        r2[ "buttonContent" ] = "Найти";
        r2[ "class" ] = "_nb-header-arrow";
        r1[ "arrow" ] = r2;
        r1[ "services" ] = "true";
        r1[ "settings" ] = "true";
        r1[ "yaHref" ] = "http://yandex.ru";
        var v48 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "header", (yr.externals['_nb-deep-extend'])(yr.object2nodeset( v48 ), v47));

        return r0;
    };

    // func nb-user(nodeset user) : xml
    M.f29 = function f29(m, c0, i0, l0, a0, v49) {
        v49 = (v49 === undefined) ? [] : v49;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "size" ] = "m";
        var v50 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "user", (yr.externals['_nb-extend'])(yr.object2nodeset( v50 ), v49));

        return r0;
    };

    // func nb-suggest(nodeset options) : xml
    M.f30 = function f30(m, c0, i0, l0, a0, v51) {
        v51 = (v51 === undefined) ? [] : v51;
        var r0 = '';

        //  var defaults : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "countMax" ] = "10";
        r1[ "type" ] = "default";
        var v52 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "suggest", (yr.externals['_nb-extend'])(yr.object2nodeset( v52 ), v51));

        return r0;
    };

    // func nb-toggler(nodeset toggler) : xml
    M.f31 = function f31(m, c0, i0, l0, a0, v53) {
        v53 = (v53 === undefined) ? [] : v53;
        var r0 = '';

        //  var default : object
        var r1 = {};
        var a1 = { a: {} };
        r1[ "leftText" ] = "On";
        r1[ "rightText" ] = "Off";
        r1[ "size" ] = "s";
        var v54 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f1', c0, i0, l0, a0, "toggler", (yr.externals['_nb-extend'])(yr.object2nodeset( v54 ), v53));

        return r0;
    };

    // func podium(xml markup) : xml
    M.f32 = function f32(m, c0, i0, l0, a0, v55) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "podium" + "\">";
        r0 += v55;
        r0 += "</div>";

        return r0;
    };

    // func code(xml markup) : xml
    M.f33 = function f33(m, c0, i0, l0, a0, v56) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "code code_html" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "js-beautify" + "\">";
        r0 += scalar2xml( xml2scalar( v56 ) );
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";

        return r0;
    };

    // func show(scalar name, xml markup) : xml
    M.f34 = function f34(m, c0, i0, l0, a0, v57, v58) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div code=\"" + scalar2attrvalue( ( v57 ) ) + "\">";
        r0 += m.f('f32', c0, i0, l0, a0, v58);
        r0 += m.f('f33', c0, i0, l0, a0, v58);
        r0 += "</div>";

        return r0;
    };

    // func arrows() : xml
    M.f35 = function f35(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "arrow-default", m.f('f27', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "search" ] = "true";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "arrow-service", m.f('f27', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "search" ] = "false";
            r0[ "text" ] = "Disk";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "arrow-service-link", m.f('f27', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "search" ] = "false";
            r0[ "href" ] = "#";
            r0[ "text" ] = "Disk";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "arrow-search-requests", m.f('f27', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "requests" ] = "8 results";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "action" ] = "/search.php";
            r0[ "attrs" ] = r1;
            r0[ "buttonContent" ] = "I'm feeling lucky";
            r0[ "value" ] = "Dog";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "arrow-search-service", m.f('f27', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "href" ] = "#";
            r0[ "text" ] = "Disk";

            return r0;
        })())));

        return r0;
    };

    // func buttons() : xml
    M.f36 = function f36(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var buttons-type : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Link";
            r1[ "type" ] = "link";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "href" ] = "#";
            r1[ "attrs" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Label";
            r1[ "type" ] = "label";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "for" ] = "blah";
            r1[ "attrs" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Span";
            r1[ "type" ] = "inline";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "File";
            r1[ "type" ] = "file";

            return r1;
        })()));
        var v59 = r1;

        //  var buttons-theme : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Action";
            r1[ "theme" ] = "action";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Pseudo";
            r1[ "theme" ] = "pseudo";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Dark";
            r1[ "theme" ] = "dark";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Promo";
            r1[ "theme" ] = "promo";

            return r1;
        })()));
        var v60 = r1;

        //  var buttons-icon : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "icon" ] = "eye";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "iconText" ] = "▼";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "icon" ] = "link";
            r1[ "content" ] = "Открыть";

            return r1;
        })()));
        var v61 = r1;

        //  var buttons-size : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Small";
            r1[ "size" ] = "s";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Medium";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "theme" ] = "promo";
            r1[ "content" ] = "Large";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "theme" ] = "promo";
            r1[ "size" ] = "xl";
            r1[ "content" ] = "Extra large";

            return r1;
        })()));
        var v62 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "buttons-type", v59);
        r0 += m.f('f34', c0, i0, l0, a0, "buttons-theme", v60);
        r0 += m.f('f34', c0, i0, l0, a0, "buttons-icon", v61);
        r0 += m.f('f34', c0, i0, l0, a0, "button-default", m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Button";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "buttons-size", v62);
        r0 += m.f('f34', c0, i0, l0, a0, "button-disabled", m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "disabled" ] = true;
            r0[ "content" ] = "Disabled";

            return r0;
        })())));

        return r0;
    };

    // func inputs() : xml
    M.f37 = function f37(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var error-input : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f18', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Hello, ...";
            r1[ "name" ] = "greetings";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Ooops... It`s a wrong way";
            r2[ "direction" ] = "right";
            r1[ "error" ] = r2;
            r1[ "class" ] = "js-input-error";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "← open error popup";
            r1[ "type" ] = "inline";
            r1[ "size" ] = "s";
            r1[ "class" ] = "js-show-input-error page-input-error-button";

            return r1;
        })()));
        var v63 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-left-content", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "leftContent" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-right-content", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "rightContent" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-reset", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "reset" ] = true;
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-hint", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "greetings";
            r0[ "hint" ] = "Can you greet the world?";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-hint-ghost", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "greetings";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "text" ] = "Can you greet the world?";
            r1[ "ghost" ] = true;
            r0[ "hint" ] = r1;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-error", v63);
        r0 += m.f('f34', c0, i0, l0, a0, "input-size-s", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-size-m", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-simple-disabled", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";
            r0[ "disabled" ] = true;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-multiline", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";
            r0[ "type" ] = "multiline";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-multiline-rightContent", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "rightContent" ] = "hello, world!";
            r0[ "name" ] = "greetings";
            r0[ "type" ] = "multiline";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-multiline-disabled", m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "hello, world!";
            r0[ "name" ] = "greetings";
            r0[ "type" ] = "multiline";
            r0[ "disabled" ] = true;

            return r0;
        })())));

        return r0;
    };

    // func checkbox() : xml
    M.f38 = function f38(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var checkbox-sizes : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f17', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f17', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";

            return r1;
        })()));
        var v64 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-default", m.f('f17', c0, i0, l0, a0));
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-label", m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Do you want to be an icon for the disfranchised masses?";
            r0[ "name" ] = "is_rock_star";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-checked", m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "checked" ] = true;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-sizes", v64);
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-button", m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "button";
            r0[ "content" ] = "Greet the world?";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-disable-label", m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Bet you can`t check me!";
            r0[ "disabled" ] = true;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "checkbox-disable-button", m.f('f17', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "type" ] = "button";
            r0[ "content" ] = "I`m sorry, but you can`t do it anymore";
            r0[ "disabled" ] = true;

            return r0;
        })())));

        return r0;
    };

    // func selects() : xml
    M.f39 = function f39(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var selects-theme : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "id" ] = "select1";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "name" ] = "myname";
            r1[ "attrs" ] = r2;
            r1[ "class" ] = "my-test-class";
            var r2 = [];
            var a2 = { a: {} };
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Карта";
            r3[ "value" ] = "option1";
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
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "id" ] = "select3";
            r1[ "class" ] = "my-test-class";
            r1[ "theme" ] = "pseudo";
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
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "id" ] = "select4";
            r1[ "class" ] = "my-test-class";
            r1[ "theme" ] = "dark";
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
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            r1[ "id" ] = "select5";
            r1[ "class" ] = "my-test-class";
            r1[ "theme" ] = "action";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "style" ] = "width: 120px";
            r1[ "attrs" ] = r2;
            var r2 = [];
            var a2 = { a: {} };
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Народная карта";
            r3[ "value" ] = "option0";
            r3[ "selected" ] = "true";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Карта";
            r3[ "value" ] = "option1";
            r2.push(r3);
            r1[ "items" ] = r2;

            return r1;
        })()));
        var v65 = r1;

        //  var selects-size : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "m";
            var r2 = [];
            var a2 = { a: {} };
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "twitter";
            r3[ "text" ] = "Twitter";
            r3[ "value" ] = "option0";
            r3[ "selected" ] = "true";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "vk";
            r3[ "text" ] = "VK";
            r3[ "value" ] = "option1";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Ещё";
            r3[ "value" ] = "option4";
            r3[ "icon" ] = "three-dots";
            r2.push(r3);
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " ";
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            var r2 = [];
            var a2 = { a: {} };
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "twitter";
            r3[ "text" ] = "Twitter";
            r3[ "value" ] = "option0";
            r3[ "selected" ] = "true";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "vk";
            r3[ "text" ] = "VK";
            r3[ "value" ] = "option1";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Ещё";
            r3[ "value" ] = "option4";
            r3[ "icon" ] = "three-dots";
            r2.push(r3);
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " Текст рядом с селектами";
        var v66 = r1;

        //  var selects-simple : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f15', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            var r2 = [];
            var a2 = { a: {} };
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "twitter";
            r3[ "text" ] = "Twitter";
            r3[ "value" ] = "option0";
            r3[ "selected" ] = "true";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "icon" ] = "vk";
            r3[ "text" ] = "VK";
            r3[ "value" ] = "option1";
            r2.push(r3);
            var r3 = {};
            var a3 = { a: {} };
            r3[ "text" ] = "Ещё";
            r3[ "value" ] = "option4";
            r3[ "icon" ] = "three-dots";
            r2.push(r3);
            r1[ "items" ] = r2;

            return r1;
        })()));
        r1 += " Текст рядом с селектами";
        var v67 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "selects-theme", v65);
        r0 += m.f('f34', c0, i0, l0, a0, "selects-group", m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
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
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "selects-size", v66);
        r0 += m.f('f34', c0, i0, l0, a0, "selects-simple", v67);
        r0 += m.f('f34', c0, i0, l0, a0, "selects-disabled", m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "disabled" ] = true;
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
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "selects-direction", m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "direction" ] = "top";
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
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "selects-mh", m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "maxHeight" ] = 3;
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
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "selects-group", m.f('f15', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
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
        })())));

        return r0;
    };

    // func dropzones() : xml
    M.f40 = function f40(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "dropzone-default", m.f('f23', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "head" ] = "Upload files";
            r0[ "content" ] = "To upload, drag files here or ";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            r1[ "content" ] = "select files";
            r1[ "type" ] = "file";
            r1[ "theme" ] = "pseudo";
            r1[ "class" ] = "nb-dropzone-button";
            r0[ "button" ] = r1;

            return r0;
        })())));

        return r0;
    };

    // func gaps() : xml
    M.f41 = function f41(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var gapxs : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "foo";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-xs-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "bar";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-xs-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "baz";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-xs-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v68 = r1;

        //  var gaps : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "foo";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-s-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "bar";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-s-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "baz";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-s-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v69 = r1;

        //  var gapm : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "foo";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-m-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "bar";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-m-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "baz";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-m-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v70 = r1;

        //  var gapl : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "foo";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-l-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "bar";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-l-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "baz";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-with-l-right-gap");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v71 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "gap-s", v69);
        r0 += m.f('f34', c0, i0, l0, a0, "gap-xs", v68);
        r0 += m.f('f34', c0, i0, l0, a0, "gap-m", v70);
        r0 += m.f('f34', c0, i0, l0, a0, "gap-l", v71);

        return r0;
    };

    // func groups() : xml
    M.f42 = function f42(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var group1 : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Слева";
            r1[ "size" ] = "m";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-item");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f18', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-item");
            r1[ "class" ] = r2;
            r1[ "size" ] = "m";

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Справа";
            r1[ "size" ] = "m";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-item");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v72 = r1;

        //  var group2 : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Слева";
            r1[ "theme" ] = "pseudo";
            r1[ "size" ] = "s";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-start");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "В центре";
            r1[ "theme" ] = "pseudo";
            r1[ "size" ] = "s";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-middle");
            r1[ "class" ] = r2;

            return r1;
        })()));
        r1 += m.f('f4', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "content" ] = "Справа";
            r1[ "theme" ] = "pseudo";
            r1[ "size" ] = "s";
            var r2 = [];
            var a2 = { a: {} };
            r2.push("nb-group-end");
            r1[ "class" ] = r2;

            return r1;
        })()));
        var v73 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "group1", v72);
        r0 += m.f('f34', c0, i0, l0, a0, "group2", v73);

        return r0;
    };

    // func islands() : xml
    M.f43 = function f43(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "island-simple", m.f('f22', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Island";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "height: 100px; width: 200px";
            r0[ "attrs" ] = r1;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "island-fly", m.f('f22', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Fly island";
            r0[ "type" ] = "fly";
            r0[ "padding" ] = "m";
            var r1 = {};
            var a1 = { a: {} };
            r1[ "style" ] = "height: 100px; width: 200px";
            r0[ "attrs" ] = r1;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "island-padding", m.f('f22', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "content" ] = "Inline island with padding";
            r0[ "padding" ] = "l";
            r0[ "type" ] = "inline";

            return r0;
        })())));

        return r0;
    };

    // func input-groups() : xml
    M.f44 = function f44(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "input-group", m.f('f19', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            var r2 = {};
            var a2 = { a: {} };
            r2[ "placeholder" ] = "Ticket number";
            r1[ "attrs" ] = r2;
            r0[ "input" ] = r1;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            r1[ "content" ] = "check";
            r1[ "disabled" ] = true;
            r0[ "button" ] = r1;

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "input-group1", m.f('f19', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            r1[ "icon" ] = "link";
            r0[ "button" ] = r1;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "size" ] = "s";
            r1[ "content" ] = "http://yadi.sk/";
            r0[ "input" ] = r1;

            return r0;
        })())));

        return r0;
    };

    // func icons() : xml
    M.f47 = function f47(m, c0, i0, l0, a0) {
        var r0 = '';

        function f45(m, c0, i0, l0, a0, v74) {
            var r0 = '';

            r0 += closeAttrs(a0);
            if (v74) {
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "download-white";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "upload-white";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link-white";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "trash-white";

                    return r0;
                })()));
            } else {
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "close";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "download";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "upload";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "people";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "help";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "eye";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "pause";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "play";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "three-dots";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "trash";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "attention";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "mail";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "vk";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "twitter";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "odnoklassniki";

                    return r0;
                })()));
            }

            return r0;
        }

        function f46(m, c0, i0, l0, a0, v75) {
            var r0 = '';

            r0 += closeAttrs(a0);
            if (v75) {
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "download-white";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "upload-white";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link-white";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "trash-white";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
            } else {
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "close";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "download";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "upload";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "people";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "help";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "eye";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "link";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "pause";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "play";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "three-dots";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "trash";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "attention";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "mail";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "vk";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "twitter";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
                r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                    var r0 = {};
                    var a0 = { a: {} };
                    r0[ "icon" ] = "odnoklassniki";
                    r0[ "size" ] = "m";

                    return r0;
                })()));
            }

            return r0;
        }

        //  var icons-m : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += "<div style=\"" + "padding: 10px;" + "\">";
        r1 += f46(m, c0, i0, l0, a1);
        r1 += "</div>";
        r1 += "<div style=\"" + "padding: 10px; background: #333;" + "\">";
        r1 += f46(m, c0, i0, l0, a1, true);
        r1 += "</div>";
        var v76 = r1;

        //  var icons-s : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += "<div style=\"" + "padding: 10px;" + "\">";
        r1 += f45(m, c0, i0, l0, a1);
        r1 += "</div>";
        r1 += "<div style=\"" + "padding: 10px; background: #333;" + "\">";
        r1 += f45(m, c0, i0, l0, a1, true);
        r1 += "</div>";
        var v77 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "icons-m", v76);
        r0 += m.f('f34', c0, i0, l0, a0, "icons-s", v77);

        return r0;
    };

    // func loaders() : xml
    M.f48 = function f48(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var loader-w : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        r1 += "<div style=\"" + "padding: 10px; background: #333;" + "\">";
        r1 += m.f('f24', c0, i0, l0, a1, yr.object2nodeset((function() {
            var r1 = {};
            var a1 = { a: {} };
            r1[ "color" ] = "white";

            return r1;
        })()));
        r1 += "</div>";
        var v78 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "loader-s", m.f('f24', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "s";

            return r0;
        })())));
        r0 += m.f('f34', c0, i0, l0, a0, "loader-m", m.f('f24', c0, i0, l0, a0));
        r0 += m.f('f34', c0, i0, l0, a0, "loader-w", v78);

        return r0;
    };

    // func progress() : xml
    M.f49 = function f49(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "progress", m.f('f20', c0, i0, l0, a0));
        r0 += m.f('f34', c0, i0, l0, a0, "progress-title", m.f('f20', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "id" ] = "progress1";
            r0[ "start" ] = "30";
            r0[ "type" ] = "title";
            r0[ "title" ] = "Король_Лев_5_rutracker.org";

            return r0;
        })())));

        return r0;
    };

    // func radio-buttons() : xml
    M.f50 = function f50(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f34', c0, i0, l0, a0, "radio-buttons", m.f('f14', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "name" ] = "btn";
            var r1 = [];
            var a1 = { a: {} };
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "All";
            r2[ "value" ] = "btn1";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Unread";
            r2[ "value" ] = "btn3";
            r2[ "checked" ] = true;
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Read";
            r2[ "value" ] = "btn4";
            r1.push(r2);
            var r2 = {};
            var a2 = { a: {} };
            r2[ "content" ] = "Delete";
            r2[ "value" ] = "btn2";
            r2[ "disabled" ] = true;
            r1.push(r2);
            r0[ "group" ] = r1;

            return r0;
        })())));

        return r0;
    };

    var j26 = [ 0, 'id' ];

    var j27 = [ 0, 'class' ];

    var j28 = [ 0, 'mixin-nb' ];

    var j29 = [ 0, 'data-nb', 0, '*' ];

    var j30 = [ 0, 'attrs', 0, '*' ];

    var j31 = [ 0, 'ico' ];

    var j32 = [ 0, 'button' ];

    var j33 = [ 0, 'buttonLink' ];

    var j34 = [ 0, 'buttonSpan' ];

    var j35 = [ 0, 'buttonLabel' ];

    var j36 = [ 0, 'buttonAttach' ];

    var j37 = [ 0, 'attrs', 0, 'multiple' ];

    var j38 = [ 0, 'multiple' ];

    var j39 = [ 0, 'attrs', 0, 'title' ];

    var j40 = [ 0, 'popupMenu' ];

    var j41 = [ 0, 'tail' ];

    var j42 = [ 0, 'menu' ];

    var j43 = [ 0, 'href' ];

    var j44 = [ 0, 'popup' ];

    var j45 = [ 0, 'titleContent' ];

    var j46 = [ 0, 'modalPopup' ];

    var j47 = [ 0, 'close' ];

    var j48 = [ 0, 'close', 0, 'class' ];

    var j49 = [ 0, 'close', 0, 'attrs' ];

    var j50 = [ 0, 'close', 0, 'attrs', 0, '*' ];

    var j51 = [ 0, 'buttons' ];

    var j52 = [ 0, 'radio-button' ];

    var j53 = [ 0, 'group' ];

    var j54 = [ 1, 1, 0, 'name' ];

    var j55 = [ 0, 'select' ];

    function p0(m, c0, i0, l0) {
        return nodeset2boolean( (selectNametest('selected', c0, [])) );
    }

    var j56 = [ 0, 'items', 2, p0 ];

    var j57 = [ 0, 'direction' ];

    var j58 = [ 0, 'within' ];

    var j59 = [ 0, 'maxHeight' ];

    var j60 = [ 0, 'items' ];

    var j61 = [ ];

    var j62 = [ 0, 'checkbox' ];

    var j63 = [ 0, 'tabindex' ];

    var j64 = [ 0, 'input' ];

    var j65 = [ 0, 'error', 0, 'direction' ];

    var j66 = [ 0, 'hint', 0, 'text' ];

    var j67 = [ 0, 'hint', 0, 'ghost' ];

    var j68 = [ 0, 'error', 0, 'content' ];

    var j69 = [ 0, 'textarea' ];

    var j70 = [ 0, 'inputSimple' ];

    var j71 = [ 0, 'textareaSimple' ];

    var j72 = [ 0, 'input-group' ];

    var j73 = [ 0, 'progress' ];

    var j74 = [ 0, 'bar' ];

    var j75 = [ 0, 'start' ];

    var j76 = [ 0, 'title' ];

    var j77 = [ 0, 'paranja' ];

    var j78 = [ 0, 'island' ];

    var j79 = [ 0, 'padding' ];

    var j80 = [ 0, 'dropzone' ];

    var j81 = [ 0, 'head' ];

    var j82 = [ 0, 'loader' ];

    var j83 = [ 0, 'color' ];

    var j84 = [ 0, 'slider' ];

    var j85 = [ 0, 'orientation' ];

    var j86 = [ 0, 'handle', 0, 'class' ];

    var j87 = [ 0, 'tabs' ];

    var j88 = [ 0, 'rise' ];

    var j89 = [ 0, 'active' ];

    var j90 = [ 0, 'arrow' ];

    var j91 = [ 0, 'requests' ];

    var j92 = [ 0, 'buttonContent' ];

    var j93 = [ 0, 'search' ];

    function p1(m, c0, i0, l0) {
        return !(cmpSN("true", selectNametest('search', c0, [])));
    }

    var j94 = [ 0, 'arrow', 2, p1 ];

    function p2(m, c0, i0, l0) {
        return simpleBoolean('href', c0);
    }

    var j95 = [ 0, 'arrow', 2, p1, 2, p2 ];

    var j96 = [ 0, 'header' ];

    var j97 = [ 0, 'settings' ];

    var j98 = [ 0, 'services' ];

    var j99 = [ 0, 'user' ];

    var j100 = [ 0, 'yaHref' ];

    var j101 = [ 0, 'justify' ];

    var j102 = [ 0, 'rightToLeft' ];

    var j103 = [ 0, 'userpic' ];

    var j104 = [ 0, 'notices' ];

    var j105 = [ 0, 'username' ];

    var j106 = [ 0, 'email' ];

    var j107 = [ 0, 'suggest' ];

    var j108 = [ 0, 'countMax' ];

    var j109 = [ 0, 'source' ];

    var j110 = [ 0, 'highlight' ];

    var j111 = [ 0, 'classSuggest' ];

    var j112 = [ 0, 'attrsInput' ];

    var j113 = [ 0, 'item' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("default", selectNametest('type', c0, []));
    }

    var j114 = [ 2, p3, 0, 'item' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("username", selectNametest('type', c0, []));
    }

    var j115 = [ 2, p4, 0, 'item' ];

    var j116 = [ 0, 'size' ];

    var j117 = [ 0, 'usernameHighlighted' ];

    var j118 = [ 0, 'emailHighlighted' ];

    var j119 = [ 0, 'mod' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('usernameHighlighted', c0);
    }

    var j120 = [ 0, 'user', 2, p5, 0, 'username' ];

    var j121 = [ 1, 1, 0, 'usernameHighlighted' ];

    function p6(m, c0, i0, l0) {
        return cmpSN("suggest", selectNametest('mod', c0, [])) && simpleBoolean('emailHighlighted', c0);
    }

    var j122 = [ 0, 'user', 2, p6, 0, 'email' ];

    var j123 = [ 1, 1, 0, 'emailHighlighted' ];

    var j124 = [ 0, 'toggler' ];

    var j125 = [ 0, 'leftText' ];

    var j126 = [ 0, 'rightText' ];

    var j127 = [ 0, 'block' ];

    var j128 = [ 0, 'md' ];

    var j129 = [ 0, 'jsdoc' ];

    var j130 = [ 0, 'code' ];

    var j131 = [ 0, 'description', 0, 'full' ];

    function p7(m, c0, i0, l0) {
        return simpleBoolean('name', c0);
    }

    var j132 = [ 0, 'tags', 2, p7 ];

    var j133 = [ 0, 'ignore' ];

    function p8(m, c0, i0, l0) {
        return simpleBoolean('ignore', c0);
    }

    var j134 = [ 0, 'jsdoc', 2, p8 ];

    var j135 = [ 1, 1, 0, 'block' ];

    var j136 = [ 0, 'tags' ];

    var j137 = [ 1, 0, 2, p7 ];

    function p9(m, c0, i0, l0) {
        return cmpSN("fires", selectNametest('type', c0, [])) || cmpSN("returns", selectNametest('type', c0, []));
    }

    var j138 = [ 1, 0, 2, p9 ];

    var j139 = [ 0, 'description' ];

    var j140 = [ 0, 'types' ];

    var j141 = [ 0, 'string' ];

    // match .* : nb-main-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.s(j14, c0), 'nb-attrs', a0)
        r0 += m.a(m, 0, selectNametest('*', c0, []), 'nb-attrs', a0)
        if (simpleBoolean('id', c0)) {
            a0.a[ "id" ] = new yr.scalarAttr(simpleScalar('id', c0));
        }
        var r1 = '';
        var a1 = { a: {} };
        var items0 = selectNametest('class', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r1 += " " + nodeset2scalar( ( m.s(j14, c1) ) );
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(r1);
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(r1);
        }
        if (simpleBoolean('mixin-nb', c0)) {
            var r1 = '';
            var a1 = { a: {} };
            var items0 = selectNametest('mixin-nb', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r1 += " " + nodeset2scalar( ( m.s(j14, c1) ) );
            }
            var tmp0 = a0.a[ "data-nb" ];
            if (tmp0) {
                a0.a[ "data-nb" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "data-nb" ] = new yr.scalarAttr(r1);
            }
        }
        var items0 = m.s(j29, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ "data-nb-" + ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        var items0 = m.s(j30, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : nb-main-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.s(j14, c0), 'nb-content', a0)

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .ico : nb
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<img";
        a0.a = {
            'src': new yr.scalarAttr("//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif")
        };
        a0.s = 'img';
        var r1 = '';
        var a1 = { a: {} };
        r1 += "nb-icon nb-";
        r1 += simpleScalar('size', c0);
        if (!(cmpSN("", selectNametest('icon', c0, [])))) {
            r1 += "-";
            r1 += simpleScalar('icon', c0);
        }
        r1 += "-icon";
        a0.a[ "class" ] = new yr.scalarAttr(r1);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t2.j = j31;
    M.t2.a = 0;

    // match .button : nb
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
        };
        a0.s = 'button';
        m.f('f5', c0, i0, l0, a0, "button");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t3.j = j32;
    M.t3.a = 0;

    // match .buttonLink : nb
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
        };
        a0.s = 'a';
        m.f('f5', c0, i0, l0, a0, "link");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t4.j = j33;
    M.t4.a = 0;

    // match .buttonSpan : nb
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f5', c0, i0, l0, a0, "span");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t5.j = j34;
    M.t5.a = 0;

    // match .buttonLabel : nb
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f5', c0, i0, l0, a0, "label");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t6.j = j35;
    M.t6.a = 0;

    // match .buttonAttach : nb
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f5', c0, i0, l0, a0, "attach");
        m.f('f7', c0, i0, l0, a0);
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "_nb-file-intruder-inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-file-intruder-input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        if (nodeset2boolean( m.s(j37, c0) ) || simpleBoolean('multiple', c0)) {
            a0.a[ "multiple" ] = new yr.scalarAttr("multiple");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j7, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j7, c0) ) ));
        }
        if (nodeset2boolean( m.s(j39, c0) )) {
            var tmp0 = a0.a[ "title" ];
            if (tmp0) {
                a0.a[ "title" ] = tmp0.addscalar(nodeset2scalar( ( m.s(j39, c0) ) ));
            } else {
                a0.a[ "title" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j39, c0) ) ));
            }
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "_nb-file-intruder-focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        if (simpleBoolean('icon', c0)) {
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = yr.nodeset2data(selectNametest('icon', c0, []));

                return r0;
            })()));
        }
        r0 += m.f('f6', c0, i0, l0, a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t7.j = j36;
    M.t7.a = 0;

    // match .popupMenu : nb
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _nb-popup _init")
        };
        a0.s = 'div';
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-hidden");
            }
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "_nb-popup-menu" + "\">";
        var items0 = selectNametest('menu', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('separator', c1)) {
                r0 += "<li class=\"" + "_nb-popup-separator" + "\"></li>";
            } else {
                r0 += "<li class=\"" + "_nb-popup-line" + "\">";
                r0 += "<a";
                a0.a = {
                    'class': new yr.scalarAttr("_nb-popup-link")
                };
                a0.s = 'a';
                if (simpleBoolean('href', c1)) {
                    a0.a[ "href" ] = new yr.scalarAttr(simpleScalar('href', c1));
                }
                r0 += m.a(m, 0, m.s(j14, c1), 'nb-main-attrs', a0)
                r0 += closeAttrs(a0);
                r0 += simpleScalar('content', c1);
                r0 += "</a>";
                r0 += "</li>";
            }
        }
        r0 += "</ul>";
        r0 += "</div>";

        return r0;
    };
    M.t8.j = j40;
    M.t8.a = 0;

    // match .popup : nb
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-popup _nb-popup _init _nb-is-hidden"),
            'data-nb': new yr.scalarAttr("popup")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('tail', c0)) {
            a0.a[ "data-nb-tail" ] = new yr.scalarAttr(simpleScalar('tail', c0));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f12', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f11', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        r0 += "</div>";

        return r0;
    };
    M.t9.j = j44;
    M.t9.a = 0;

    // match .modalPopup : nb
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        if (simpleBoolean('static', c0)) {
            r0 += m.f('f21', c0, i0, l0, a0);
        }
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "popup";
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));
            r0[ "type" ] = "modal";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _nb-popup");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _nb-popup");
        }
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("popup");
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-hidden");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-hidden");
            }
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-popup-i" + "\">";
        if (simpleBoolean('close', c0)) {
            r0 += "<a";
            a0.a = {
                'class': new yr.scalarAttr("_nb-popup-close " + nodeset2scalar( ( m.s(j48, c0) ) ))
            };
            a0.s = 'a';
            if (nodeset2boolean( m.s(j49, c0) )) {
                var items0 = m.s(j50, c0);
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
                }
            }
            r0 += closeAttrs(a0);
            r0 += "</a>";
        }
        if (simpleBoolean('titleContent', c0)) {
            r0 += m.f('f12', c0, i0, l0, a0, selectNametest('titleContent', c0, []));
        }
        if (simpleBoolean('content', c0)) {
            r0 += m.f('f11', c0, i0, l0, a0, selectNametest('content', c0, []));
        }
        if (simpleBoolean('buttons', c0)) {
            r0 += m.f('f13', c0, i0, l0, a0, selectNametest('buttons', c0, []));
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t10.j = j46;
    M.t10.a = 0;

    // match .radio-button : nb
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "radio-button";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-group");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-group");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        var items0 = selectNametest('group', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            //  var uniq : scalar
            var v79 = "nb-radio-button_" + ( (yr.externals['_nb-uniq'])() );

            r0 += "<span class=\"" + "_nb-radio-button-button nb-complex-group-item" + "\">";
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("_nb-radio-button-radio"),
                'type': new yr.scalarAttr("radio"),
                'name': new yr.scalarAttr(nodeset2scalar( ( m.s(j54, c1) ) )),
                'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c1, []) ) )),
                'id': new yr.scalarAttr(( v79 ))
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
            if (nodeset2boolean( m.s(j7, c1) )) {
                a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c1) ));
            }
            r0 += closeAttrs(a0);
            r0 += '';
            r0 += m.f('f4', c1, i1, l1, a0, (yr.externals['_nb-extend'])(m.s(j14, c1), yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                var r1 = [];
                var a1 = { a: {} };
                r1.push("nb-complex-group-item-subject");
                r1.push("js-button");
                r0[ "class" ] = r1;
                r0[ "type" ] = "label";
                r0[ "static" ] = true;
                r0[ "id" ] = false;
                var r1 = {};
                var a1 = { a: {} };
                r1[ "for" ] = v79;
                r1[ "data-value" ] = yr.nodeset2data(selectNametest('value', c1, []));
                r0[ "attrs" ] = r1;

                return r0;
            })())));
            r0 += "</span>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t11.j = j52;
    M.t11.a = 0;

    // match .select : nb
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var isSelected : boolean
        var v80 = ( m.s(j56, c0) ).length > 0;

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'data-nb-direction': new yr.scalarAttr(nodeset2scalar( ( selectNametest('direction', c0, []) ) )),
            'data-nb': new yr.scalarAttr("select"),
            'tabindex': new yr.scalarAttr("0")
        };
        a0.s = 'span';
        m.f('f5', c0, i0, l0, a0, "span");
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" nb-select _init _nb-select-button");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" nb-select _init _nb-select-button");
        }
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-small-normal-select");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-small-normal-select");
            }
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('within', c0)) {
            a0.a[ "data-nb-within" ] = new yr.scalarAttr(simpleScalar('within', c0));
        }
        if (simpleBoolean('maxHeight', c0)) {
            a0.a[ "data-nb-maxheight" ] = new yr.scalarAttr(simpleScalar('maxHeight', c0));
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-button-content" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((v80 && simpleBoolean('selected', c1)) || (!v80 && i1 == 0)) {
                r0 += nodeset2xml( selectNametest('text', c1, []) );
            }
        }
        r0 += "</span>";
        r0 += "<span class=\"" + "_nb-select-helper" + "\"></span>";
        r0 += "<select";
        a0.a = {
            'class': new yr.scalarAttr("_nb-select-fallback")
        };
        a0.s = 'select';
        if (nodeset2boolean( (selectNametest('disabled', c0, [])) )) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (nodeset2boolean( m.s(j7, c0) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( m.s(j7, c0) ));
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-select-options', a0)
        r0 += closeAttrs(a0);
        r0 += "</select>";
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "select-dropdown";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "</span>";

        return r0;
    };
    M.t12.j = j55;
    M.t12.a = 0;

    // match / | .select : nb-select-options
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (simpleBoolean('group', c1)) {
                r0 += "<optgroup label=\"" + nodeset2attrvalue( ( selectNametest('text', c1, []) ) ) + "\" data-nb-type=\"" + nodeset2attrvalue( ( selectNametest('type', c1, []) ) ) + "\">";
                var items1 = selectNametest('group', c1, []);
                for (var i2 = 0, l2 = items1.length; i2 < l2; i2++) {
                    var c2 = items1[ i2 ];
                    r0 += m.f('f16', c2, i2, l2, a0, m.s(j14, c2));
                }
                r0 += "</optgroup>";
            } else {
                r0 += m.f('f16', c1, i1, l1, a0, m.s(j14, c1));
            }
        }

        return r0;
    };
    M.t13.s = [ 1, j55 ];
    M.t13.a = [ 1, 0 ];

    // match .checkbox : nb
    M.t14 = function t14(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var uniq : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('id', c0)) {
            r1 += simpleScalar('id', c0);
        } else {
            r1 += (yr.externals['_nb-uniq'])();
        }
        var v81 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'data-nb': new yr.scalarAttr("checkbox"),
            'for': new yr.scalarAttr("nb-checkbox_" + ( v81 ))
        };
        a0.s = 'label';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "checkbox";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            if (simpleBoolean('type', c0)) {
                r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));
            }

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-checkbox-input"),
            'id': new yr.scalarAttr("nb-checkbox_" + ( v81 ))
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
        if (simpleBoolean('tabindex', c0)) {
            a0.a[ "tabindex" ] = new yr.scalarAttr(simpleScalar('tabindex', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        if (simpleBoolean('checked', c0)) {
            a0.a[ "checked" ] = new yr.scalarAttr("checked");
        }
        if (( selectNametest('value', c0, []) ).length) {
            a0.a[ "value" ] = new yr.scalarAttr(simpleScalar('value', c0));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        if (cmpSN("button", selectNametest('type', c0, []))) {
            r0 += m.f('f4', c0, i0, l0, a0, (yr.externals['_nb-extend'])(m.s(j14, c0), yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "type" ] = "inline";
                r0[ "static" ] = true;
                r0[ "id" ] = false;
                r0[ "attrs" ] = false;
                var r1 = [];
                var a1 = { a: {} };
                r1.push("_nb-checkbox-label");
                r0[ "class" ] = r1;

                return r0;
            })())));
        } else {
            r0 += "<span";
            a0.a = {
                'class': new yr.scalarAttr("_nb-checkbox-flag ")
            };
            a0.s = 'span';
            if (cmpSN("checkbox", selectNametest('type', c0, []))) {
                var tmp0 = a0.a[ "class" ];
                if (tmp0) {
                    a0.a[ "class" ] = tmp0.addscalar("_nb-checkbox-normal-flag");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr("_nb-checkbox-normal-flag");
                }
            } else if (simpleBoolean('type', c0)) {
                var tmp0 = a0.a[ "class" ];
                if (tmp0) {
                    a0.a[ "class" ] = tmp0.addscalar("_nb-checkbox-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-flag");
                } else {
                    a0.a[ "class" ] = new yr.scalarAttr("_nb-checkbox-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-flag");
                }
            }
            r0 += closeAttrs(a0);
            r0 += "<span class=\"" + "_nb-checkbox-flag-icon" + "\"></span>";
            r0 += "</span>";
            r0 += "<span class=\"" + "_nb-checkbox-label" + "\">";
            if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
                r0 += simpleScalar('content', c0);
            }
            r0 += "</span>";
        }
        r0 += "</label>";

        return r0;
    };
    M.t14.j = j62;
    M.t14.a = 0;

    // match .input : nb
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var errorId : scalar
        var v82 = "nb-input_error" + (yr.externals['_nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "complex";

            return r0;
        })()));
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('hint', c0) || simpleBoolean('error', c0) || simpleBoolean('ghost', c0)) {
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
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-ghost");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-ghost");
            }
            a0.a[ "data-nb-ghost" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('error', c0)) {
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v82 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j65, c0) ) ) + "\"}");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('hint', c0) && !(cmpSN("", m.s(j66, c0)))) {
            r0 += "<span class=\"" + "_nb-input-hint" + "\">";
            r0 += "<span class=\"" + "_nb-input-hint-inner" + "\">";
            if (nodeset2boolean( m.s(j67, c0) )) {
                r0 += "<span class=\"" + "_nb-input-hint-ghost" + "\"></span>";
                r0 += "<span class=\"" + "_nb-input-hint-content" + "\">";
                r0 += nodeset2xml( m.s(j66, c0) );
                r0 += "</span>";
            } else {
                r0 += nodeset2xml( selectNametest('hint', c0, []) );
            }
            r0 += "</span>";
            r0 += "</span>";
        }
        if (simpleBoolean('error', c0)) {
            r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "_nb-error-popup";
                r0[ "content" ] = yr.nodeset2data(m.s(j68, c0));
                r0[ "id" ] = v82;

                return r0;
            })()));
        }
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "_nb-input-reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "_nb-input-content" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-input-controller"),
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) ))
        };
        a0.s = 'input';
        var items0 = m.s(j30, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
        }
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (simpleBoolean('disabled', c0)) {
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "_nb-input-view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t15.j = j64;
    M.t15.a = 0;

    // match .textarea : nb
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var errorId : scalar
        var v83 = "nb-input_error" + (yr.externals['_nb-uniq'])();

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
        };
        a0.s = 'label';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "complex";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        if (simpleBoolean('ghost', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-ghost _init");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-ghost _init");
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
            a0.a[ "data-nb-error" ] = new yr.scalarAttr("{ \"id\": \"" + ( v83 ) + "\", \"direction\":\"" + nodeset2scalar( ( m.s(j65, c0) ) ) + "\" }");
            r0 += closeAttrs(a0);
            r0 += m.f('f9', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "class" ] = "_nb-error-popup";
                r0[ "content" ] = yr.nodeset2data(m.s(j68, c0));
                r0[ "id" ] = v83;

                return r0;
            })()));
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('reset', c0)) {
            r0 += "<span class=\"" + "_nb-input-reset" + "\"></span>";
        }
        if (simpleBoolean('leftContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-left" + "\">";
            r0 += simpleScalar('leftContent', c0);
            r0 += "</span>";
        }
        if (simpleBoolean('rightContent', c0)) {
            r0 += "<span class=\"" + "_nb-input-right" + "\">";
            r0 += simpleScalar('rightContent', c0);
            r0 += "</span>";
        }
        r0 += "<span class=\"" + "_nb-input-content" + "\">";
        r0 += "<textarea";
        a0.a = {
            'class': new yr.scalarAttr("_nb-input-controller")
        };
        a0.s = 'textarea';
        var items0 = m.s(j30, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
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
        r0 += "<span class=\"" + "_nb-input-view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t16.j = j69;
    M.t16.a = 0;

    // match .inputSimple : nb
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<input";
        a0.a = {
            'value': new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) )),
            'data-nb-type': new yr.scalarAttr("simple")
        };
        a0.s = 'input';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "simple";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "disabled" ] = new yr.scalarAttr("disabled");
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        r0 += '';

        return r0;
    };
    M.t17.j = j70;
    M.t17.a = 0;

    // match .textareaSimple : nb
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<textarea";
        a0.a = {
            'data-nb-type': new yr.scalarAttr("simple")
        };
        a0.s = 'textarea';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "input";
            if (simpleBoolean('size', c0)) {
                r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            }
            r0[ "type" ] = "simple";

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('name', c0)) {
            a0.a[ "name" ] = new yr.scalarAttr(simpleScalar('name', c0));
        }
        if (!nodeset2boolean( (selectNametest('static', c0, [])) )) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("input");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
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
    M.t18.j = j71;
    M.t18.a = 0;

    // match .input-group : nb
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-input-group"),
            'data-nb': new yr.scalarAttr("input-group")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
            a0.a[ "data-nb-disabled" ] = new yr.scalarAttr("true");
        }
        r0 += closeAttrs(a0);
        var items0 = selectNametest('*', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (c1.name == "button") {
                r0 += m.f('f4', c1, i1, l1, a0, m.s(j14, c1));
            } else if (c1.name == "input") {
                r0 += m.f('f18', c1, i1, l1, a0, m.s(j14, c1));
            }
        }
        r0 += "</div>";

        return r0;
    };
    M.t19.j = j72;
    M.t19.a = 0;

    // match .progress : nb
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("progress"),
            'data-nb-type': new yr.scalarAttr(nodeset2scalar( ( selectNametest('type', c0, []) ) ))
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "progress";
            r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('bar', c0)) {
            r0 += "<div class=\"" + "_nb-progress-bar js-bar" + "\" style=\"" + "width: " + nodeset2attrvalue( ( selectNametest('start', c0, []) ) ) + "%" + "\"></div>";
        }
        if (simpleBoolean('title', c0)) {
            r0 += "<div class=\"" + "_nb-progress-title js-title" + "\">";
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
    M.t20.j = j73;
    M.t20.a = 0;

    // match .paranja : nb
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "paranja";
            r0[ "theme" ] = yr.nodeset2data(selectNametest('theme', c0, []));

            return r0;
        })()));
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t21.j = j77;
    M.t21.a = 0;

    // match .island : nb
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('type', c0)) {
            r1 += "-" + simpleScalar('type', c0);
        } else {
            r1 += "";
        }
        var v84 = r1;

        //  var padding : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (cmpSN("s", selectNametest('padding', c0, []))) {
            r1 += "-small";
        } else if (cmpSN("l", selectNametest('padding', c0, []))) {
            r1 += "-large";
        } else if (cmpSN("m", selectNametest('padding', c0, []))) {
            r1 += "";
        }
        var v85 = r1;

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar("nb-island _nb" + ( v85 ) + ( v84 ) + "-island");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr("nb-island _nb" + ( v85 ) + ( v84 ) + "-island");
        }
        r0 += closeAttrs(a0);
        if (simpleBoolean('content', c0)) {
            r0 += simpleScalar('content', c0);
        }
        r0 += "</div>";

        return r0;
    };
    M.t22.j = j78;
    M.t22.a = 0;

    // match .dropzone : nb
    M.t23 = function t23(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "dropzone";
            r0[ "type" ] = yr.nodeset2data(selectNametest('type', c0, []));

            return r0;
        })()));
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('head', c0)) {
            r0 += "<div class=\"" + "_nb-dropzone-head" + "\">";
            r0 += nodeset2xml( selectNametest('head', c0, []) );
            r0 += "</div>";
        }
        if (simpleBoolean('content', c0)) {
            r0 += "<div class=\"" + "_nb-dropzone-text" + "\">";
            if (simpleBoolean('content', c0)) {
                r0 += simpleScalar('content', c0);
            }
            if (!(cmpSN("false", selectNametest('button', c0, [])))) {
                r0 += m.f('f4', c0, i0, l0, a0, selectNametest('button', c0, []));
            }
            r0 += "</div>";
        }
        if (cmpSN("modal", selectNametest('type', c0, []))) {
            r0 += "<div class=\"" + "_nb-dropzone-cover" + "\"></div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t23.j = j80;
    M.t23.a = 0;

    // match .loader : nb
    M.t24 = function t24(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "loader";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("_nb-loader-spinner")
        };
        a0.s = 'span';
        if (simpleBoolean('color', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-loader-" + nodeset2scalar( ( selectNametest('color', c0, []) ) ) + "-spinner");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-loader-" + nodeset2scalar( ( selectNametest('color', c0, []) ) ) + "-spinner");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</span>";

        return r0;
    };
    M.t24.j = j82;
    M.t24.a = 0;

    // match .slider : nb
    M.t25 = function t25(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "slider";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init _nb-" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "-slider _nb-slider-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-handle");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init _nb-" + nodeset2scalar( ( selectNametest('orientation', c0, []) ) ) + "-slider _nb-slider-" + nodeset2scalar( ( selectNametest('type', c0, []) ) ) + "-handle");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        a0.a[ "data-nb-value" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('value', c0, []) ) ));
        if (!simpleBoolean('static', c0)) {
            a0.a[ "data-nb" ] = new yr.scalarAttr("slider");
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-slider-body _nb-slider-" + nodeset2attrvalue( ( selectNametest('type', c0, []) ) ) + "-body" + "\">";
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("ui-slider-handle")
        };
        a0.s = 'label';
        if (cmpSN("s", selectNametest('size', c0, []))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-slider-small-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-slider-small-handle");
            }
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-slider-handle");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-slider-handle");
            }
        }
        if (nodeset2boolean( m.s(j86, c0) )) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" " + nodeset2scalar( ( m.s(j86, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" " + nodeset2scalar( ( m.s(j86, c0) ) ));
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-button-content" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("_nb-slider-fallback"),
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
    M.t25.j = j84;
    M.t25.a = 0;

    // match .tabs : nb
    M.t26 = function t26(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var prefix : scalar
        var v86 = "tabs-" + ( (yr.externals['_nb-uniq'])() );

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'data-nb': new yr.scalarAttr("tabs")
        };
        a0.s = 'div';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "tabs";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            if (simpleBoolean('rise', c0)) {
                r0[ "type" ] = "rise-" + simpleScalar('rise', c0);
            }

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<ul class=\"" + "_nb-tabs-tabs" + "\">";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<li";
            a0.a = {
                'class': new yr.scalarAttr("_nb-tabs-tab")
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
            r0 += "<a class=\"" + "_nb-tabs-link _link" + "\" href=\"" + "#" + scalar2attrvalue( ( v86 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            r0 += nodeset2xml( selectNametest('title', c1, []) );
            r0 += "</a>";
            r0 += "</li>";
        }
        r0 += "</ul>";
        var items0 = selectNametest('items', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "_nb-tabs-panel" + "\" id=\"" + scalar2attrvalue( ( v86 ) ) + "-" + scalar2attrvalue( ( i1 ) ) + "\">";
            if (simpleBoolean('content', c1)) {
                r0 += simpleScalar('content', c1);
            }
            r0 += "</div>";
        }
        r0 += "</div>";

        return r0;
    };
    M.t26.j = j87;
    M.t26.a = 0;

    // match .arrow : nb
    M.t27 = function t27(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var input-label : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('text', c0)) {
            r1 += "<a href=\"" + simpleScalar('href', c0) + "\" class=\"_nb-search-arrow-label\">" + simpleScalar('text', c0) + "</a>";
        } else {
            r1 += "";
        }
        var v87 = r1;

        //  var input-requests : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (simpleBoolean('requests', c0)) {
            r1 += " — " + simpleScalar('requests', c0);
        } else {
            r1 += "";
        }
        var v88 = r1;

        r0 += closeAttrs(a0);
        r0 += "<form";
        a0.a = {
            'class': new yr.scalarAttr("nb-arrow _nb-search-arrow")
        };
        a0.s = 'form';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += m.f('f4', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "class" ] = "_nb-search-arrow-button";
            r0[ "content" ] = yr.nodeset2data(selectNametest('buttonContent', c0, []));
            var r1 = {};
            var a1 = { a: {} };
            r1[ "type" ] = "submit";
            r0[ "attrs" ] = r1;

            return r0;
        })()));
        r0 += "<div class=\"" + "_nb-search-arrow-content" + "\">";
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = "m";
            r0[ "class" ] = "_nb-search-arrow-input";
            r0[ "leftContent" ] = v87;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "autocomplete" ] = "off";
            r1[ "value" ] = yr.nodeset2data(selectNametest('value', c0, []));
            r1[ "name" ] = "text";
            r0[ "attrs" ] = r1;
            var r1 = {};
            var a1 = { a: {} };
            r1[ "text" ] = v88;
            r1[ "ghost" ] = true;
            r0[ "hint" ] = r1;

            return r0;
        })()));
        r0 += "</div>";
        r0 += "</form>";

        return r0;
    };
    M.t27.j = j90;
    M.t27.a = 0;

    // match .arrow[ .search != "true" ] : nb
    M.t28 = function t28(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("_nb-service-arrow")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</div>";

        return r0;
    };
    M.t28.j = j94;
    M.t28.a = 0;

    // match .arrow[ .search != "true" ][ .href ] : nb
    M.t29 = function t29(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'href': new yr.scalarAttr(nodeset2scalar( ( selectNametest('href', c0, []) ) )),
            'class': new yr.scalarAttr("_nb-service-arrow")
        };
        a0.s = 'a';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-arrow-tail" + "\"></span>";
        r0 += nodeset2xml( selectNametest('text', c0, []) );
        r0 += "</a>";

        return r0;
    };
    M.t29.j = j95;
    M.t29.a = 0;

    // match .header : nb
    M.t30 = function t30(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("nb-header _init"),
            'data-nb': new yr.scalarAttr("header")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "_nb-header-actions" + "\">";
        if (cmpSN("true", selectNametest('settings', c0, []))) {
            r0 += "<div class=\"" + "_nb-header-button" + "\">";
            r0 += "<div class=\"" + "_nb-header-button-icon" + "\">";
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "settings";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += "</div>";
            r0 += "</div>";
        }
        if (cmpSN("true", selectNametest('services', c0, []))) {
            r0 += "<div class=\"" + "_nb-header-button" + "\">";
            r0 += "<div class=\"" + "_nb-header-button-icon" + "\">";
            r0 += m.f('f3', c0, i0, l0, a0, yr.object2nodeset((function() {
                var r0 = {};
                var a0 = { a: {} };
                r0[ "icon" ] = "services";
                r0[ "size" ] = "m";

                return r0;
            })()));
            r0 += "</div>";
            r0 += "</div>";
        }
        if (simpleBoolean('user', c0)) {
            r0 += m.f('f29', c0, i0, l0, a0, selectNametest('user', c0, []));
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "_nb-header-main" + "\">";
        r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('yaHref', c0, []) ) ) + "\" class=\"" + "_nb-header-logo" + "\"></a>";
        r0 += m.f('f27', c0, i0, l0, a0, selectNametest('arrow', c0, []));
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t30.j = j96;
    M.t30.a = 0;

    // match .user : nb
    M.t31 = function t31(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "user";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        if (simpleBoolean('justify', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_justify");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_justify");
            }
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (!simpleBoolean('rightToLeft', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_ltr");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_ltr");
            }
            r0 += m.a(m, 0, m.s(j14, c0), 'nb-user-pic', a0)
            r0 += m.a(m, 0, m.s(j14, c0), 'nb-user-name', a0)
        } else {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-user_rtl");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-user_rtl");
            }
            r0 += m.a(m, 0, m.s(j14, c0), 'nb-user-name', a0)
            r0 += m.a(m, 0, m.s(j14, c0), 'nb-user-pic', a0)
        }
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t31.j = j99;
    M.t31.a = 0;

    // match .user : nb-user-pic
    M.t32 = function t32(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
        };
        a0.s = 'span';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "user-avatar";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
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
            r0 += "<span class=\"" + "_nb-user-notice-count" + "\">";
            r0 += nodeset2xml( selectNametest('notices', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t32.j = j99;
    M.t32.a = 0;

    // match .user : nb-user-name
    M.t33 = function t33(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "_nb-user-label" + "\">";
        r0 += "<span class=\"" + "_nb-user-name _link" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('username', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('username', c0, []) );
        r0 += "</span>";
        if (simpleBoolean('email', c0)) {
            r0 += "<span class=\"" + "_nb-user-email" + "\" title=\"" + nodeset2attrvalue( ( selectNametest('email', c0, []) ) ) + "\">";
            r0 += nodeset2xml( selectNametest('email', c0, []) );
            r0 += "</span>";
        }
        r0 += "</span>";

        return r0;
    };
    M.t33.j = j99;
    M.t33.a = 0;

    // match .suggest : nb
    M.t34 = function t34(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

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
        a0.a[ "data-class-suggest" ] = new yr.scalarAttr("nb-island _nb-fly-island _nb-suggest-container _nb-" + nodeset2scalar( ( selectNametest('size', c0, []) ) ) + "-suggest");
        if (simpleBoolean('class', c0)) {
            var tmp0 = a0.a[ "data-class-suggest" ];
            if (tmp0) {
                a0.a[ "data-class-suggest" ] = tmp0.addscalar(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            } else {
                a0.a[ "data-class-suggest" ] = new yr.scalarAttr(" " + nodeset2scalar( ( selectNametest('classSuggest', c0, []) ) ));
            }
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += m.f('f18', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));
            r0[ "class" ] = "_nb-suggest-input";
            r0[ "attrs" ] = yr.nodeset2data(selectNametest('attrsInput', c0, []));
            r0[ "disabled" ] = yr.nodeset2data(selectNametest('disabled', c0, []));
            r0[ "name" ] = yr.nodeset2data(selectNametest('name', c0, []));
            r0[ "content" ] = yr.nodeset2data(selectNametest('content', c0, []));

            return r0;
        })()));
        r0 += "</div>";

        return r0;
    };
    M.t34.j = j107;
    M.t34.a = 0;

    // match / : nb-suggest
    M.t35 = function t35(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<li class=\"" + "_nb-suggest-item" + "\">";
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("_nb-suggest-item-link")
        };
        a0.s = 'a';
        r0 += m.a(m, 0, selectNametest('item', c0, []), 'nb-suggest', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";
        r0 += "</li>";

        return r0;
    };
    M.t35.j = 1;
    M.t35.a = 1;

    // match /[ .type == "default" ].item : nb-suggest
    M.t36 = function t36(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        if (simpleBoolean('labelContent', c0)) {
            r0 += simpleScalar('labelContent', c0);
        }

        return r0;
    };
    M.t36.j = j114;
    M.t36.a = 1;

    // match /[ .type == "username" ].item : nb-suggest
    M.t37 = function t37(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

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
        var v89 = r1;

        r0 += closeAttrs(a0);
        r0 += m.f('f29', c0, i0, l0, a0, yr.object2nodeset( v89 ));

        return r0;
    };
    M.t37.j = j115;
    M.t37.a = 1;

    // match .user[ .mod == "suggest" && .usernameHighlighted ].username : nb-user-name
    M.t38 = function t38(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j121, c0) );

        return r0;
    };
    M.t38.j = j120;
    M.t38.a = 0;

    // match .user[ .mod == "suggest" && .emailHighlighted ].email : nb-user-name
    M.t39 = function t39(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += nodeset2scalar( m.s(j123, c0) );

        return r0;
    };
    M.t39.j = j122;
    M.t39.a = 0;

    // match .toggler : nb
    M.t40 = function t40(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'tabindex': new yr.scalarAttr("1"),
            'data-nb': new yr.scalarAttr("toggler")
        };
        a0.s = 'a';
        m.f('f2', c0, i0, l0, a0, yr.object2nodeset((function() {
            var r0 = {};
            var a0 = { a: {} };
            r0[ "name" ] = "toggler";
            r0[ "size" ] = yr.nodeset2data(selectNametest('size', c0, []));

            return r0;
        })()));
        var tmp0 = a0.a[ "class" ];
        if (tmp0) {
            a0.a[ "class" ] = tmp0.addscalar(" _init");
        } else {
            a0.a[ "class" ] = new yr.scalarAttr(" _init");
        }
        r0 += m.a(m, 0, m.s(j14, c0), 'nb-main-attrs', a0)
        if (simpleBoolean('checked', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-checked");
            }
        }
        if (simpleBoolean('disabled', c0)) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" _nb-is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" _nb-is-disabled");
            }
        }
        r0 += closeAttrs(a0);
        r0 += "<label class=\"" + "_nb-toggler-label" + "\">";
        r0 += "<input";
        a0.a = {
            'type': new yr.scalarAttr("checkbox"),
            'class': new yr.scalarAttr("_nb-toggler-checkbox")
        };
        a0.s = 'input';
        var items0 = m.s(j30, c0);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            a0.a[ ( c1.name ) ] = new yr.scalarAttr(nodeset2scalar( m.s(j14, c1) ));
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
        r0 += "<div class=\"" + "_nb-toggler-container" + "\">";
        r0 += "<div class=\"" + "_nb-toggler-sticker _nb-toggler-left-sticker" + "\">";
        r0 += "<span class=\"" + "_nb-toggler-text" + "\">";
        r0 += nodeset2xml( selectNametest('leftText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "_nb-toggler-sticker _nb-toggler-right-sticker" + "\">";
        r0 += "<span class=\"" + "_nb-toggler-text" + "\">";
        r0 += nodeset2xml( selectNametest('rightText', c0, []) );
        r0 += "</span>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "_nb-toggler-knob" + "\"></div>";
        r0 += "</a>";

        return r0;
    };
    M.t40.j = j124;
    M.t40.a = 0;

    // match /
    M.t41 = function t41(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += m.f('f35', c0, i0, l0, a0);
        r0 += m.f('f36', c0, i0, l0, a0);
        r0 += m.f('f37', c0, i0, l0, a0);
        r0 += m.f('f38', c0, i0, l0, a0);
        r0 += m.f('f39', c0, i0, l0, a0);
        r0 += m.f('f40', c0, i0, l0, a0);
        r0 += m.f('f41', c0, i0, l0, a0);
        r0 += m.f('f42', c0, i0, l0, a0);
        r0 += m.f('f43', c0, i0, l0, a0);
        r0 += m.f('f44', c0, i0, l0, a0);
        r0 += m.f('f47', c0, i0, l0, a0);
        r0 += m.f('f48', c0, i0, l0, a0);
        r0 += m.f('f49', c0, i0, l0, a0);
        r0 += m.f('f50', c0, i0, l0, a0);
        r0 += "<div class=\"" + "page-inner" + "\">";
        r0 += "<h1 class=\"" + "page-title" + "\">" + "Nanoislands Docs" + "</h1>";
        r0 += "<ol";
        a0.a = {
            'class': new yr.scalarAttr("blocks-menu")
        };
        a0.s = 'ol';
        r0 += m.a(m, 0, selectNametest('*', c0, []), 'blocks-menu-item', a0)
        r0 += closeAttrs(a0);
        r0 += "</ol>";
        r0 += "<ul";
        a0.a = {
            'class': new yr.scalarAttr("blocks")
        };
        a0.s = 'ul';
        r0 += m.a(m, 0, selectNametest('*', c0, []), 'blocks-item', a0)
        r0 += closeAttrs(a0);
        r0 += "</ul>";
        r0 += "</div>";

        return r0;
    };
    M.t41.j = 1;
    M.t41.a = 1;

    // match .* : blocks-menu-item
    M.t42 = function t42(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<li class=\"" + "blocks-menu-item" + "\">";
        r0 += "<a href=\"" + "#" + nodeset2attrvalue( ( selectNametest('block', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('block', c0, []) );
        r0 += "</a>";
        r0 += "</li>";

        return r0;
    };
    M.t42.j = j0;
    M.t42.a = 0;

    // match .* : blocks-item
    M.t43 = function t43(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<li";
        a0.a = {
            'class': new yr.scalarAttr("blocks-item"),
            'id': new yr.scalarAttr(nodeset2scalar( ( selectNametest('block', c0, []) ) ))
        };
        a0.s = 'li';
        r0 += m.a(m, 0, selectNametest('md', c0, []), '', a0)
        r0 += closeAttrs(a0);
        if (simpleBoolean('jsdoc', c0)) {
            r0 += "<h3>" + "JSdoc" + "</h3>";
            r0 += m.a(m, 0, selectNametest('jsdoc', c0, []), '', a0)
        }
        r0 += "</li>";

        return r0;
    };
    M.t43.j = j0;
    M.t43.a = 0;

    // match .jsdoc
    M.t44 = function t44(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "blocks-method" + "\">";
        r0 += "<h4 class=\"" + "blocks-method-title" + "\">";
        r0 += scalar2xml( (yr.externals['getNameMethod'])(nodeset2scalar( ( selectNametest('code', c0, []) ) )) );
        r0 += "</h4>";
        if (nodeset2boolean( (m.s(j131, c0)) )) {
            r0 += nodeset2scalar( m.s(j131, c0) );
        }
        r0 += m.a(m, 0, m.s(j132, c0), 'blocks-settings', a0)
        r0 += "</div>";

        return r0;
    };
    M.t44.j = j129;
    M.t44.a = 0;

    // match .jsdoc[ .ignore ]
    M.t45 = function t45(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t45.j = j134;
    M.t45.a = 0;

    // match .md
    M.t46 = function t46(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "blocks-description" + "\">";
        r0 += "<h2 class=\"" + "blocks-title" + "\">";
        r0 += nodeset2xml( m.s(j135, c0) );
        r0 += "</h2>";
        r0 += nodeset2scalar( m.s(j14, c0) );
        r0 += "</div>";

        return r0;
    };
    M.t46.j = j128;
    M.t46.a = 0;

    // match .tags : blocks-settings
    M.t47 = function t47(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("blocks-settings")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j137, c0), 'blocks-params', a0)
        r0 += m.a(m, 0, m.s(j138, c0), 'blocks-extra', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t47.j = j136;
    M.t47.a = 0;

    // match .tags : blocks-params
    M.t48 = function t48(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<dl class=\"" + "dl-horizontal param" + "\">";
        r0 += "<dt class=\"" + "param-name" + "\">";
        r0 += nodeset2xml( selectNametest('name', c0, []) );
        r0 += "</dt>";
        r0 += "<dd class=\"" + "param-description" + "\">";
        r0 += "<code";
        a0.a = {
            'class': new yr.scalarAttr("param-types")
        };
        a0.s = 'code';
        r0 += m.a(m, 0, m.s(j14, c0), 'blocks-params-types', a0)
        r0 += closeAttrs(a0);
        r0 += "</code>";
        r0 += nodeset2xml( selectNametest('description', c0, []) );
        r0 += "</dd>";
        r0 += "</dl>";

        return r0;
    };
    M.t48.j = j136;
    M.t48.a = 0;

    // match .tags : blocks-params-types
    M.t49 = function t49(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var itemLast : scalar
        var v90 = ( selectNametest('types', c0, []) ).length - 1;

        r0 += closeAttrs(a0);
        r0 += "{";
        var items0 = selectNametest('types', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += nodeset2xml( m.s(j14, c1) );
            if ((i1 != v90)) {
                r0 += " | ";
            }
        }
        r0 += "}";

        return r0;
    };
    M.t49.j = j136;
    M.t49.a = 0;

    // match .tags : blocks-extra
    M.t50 = function t50(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<dl class=\"" + "dl-horizontal param" + "\">";
        r0 += "<dt class=\"" + "param-name" + "\">";
        r0 += nodeset2xml( selectNametest('type', c0, []) );
        r0 += "</dt>";
        r0 += "<dd class=\"" + "param-description" + "\">";
        r0 += nodeset2xml( selectNametest('string', c0, []) );
        r0 += "</dd>";
        r0 += "</dl>";

        return r0;
    };
    M.t50.j = j136;
    M.t50.a = 0;

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
            "ico": [
                "t2"
            ],
            "button": [
                "t3"
            ],
            "buttonLink": [
                "t4"
            ],
            "buttonSpan": [
                "t5"
            ],
            "buttonLabel": [
                "t6"
            ],
            "buttonAttach": [
                "t7"
            ],
            "popupMenu": [
                "t8"
            ],
            "popup": [
                "t9"
            ],
            "modalPopup": [
                "t10"
            ],
            "radio-button": [
                "t11"
            ],
            "select": [
                "t12"
            ],
            "checkbox": [
                "t14"
            ],
            "input": [
                "t15"
            ],
            "textarea": [
                "t16"
            ],
            "inputSimple": [
                "t17"
            ],
            "textareaSimple": [
                "t18"
            ],
            "input-group": [
                "t19"
            ],
            "progress": [
                "t20"
            ],
            "paranja": [
                "t21"
            ],
            "island": [
                "t22"
            ],
            "dropzone": [
                "t23"
            ],
            "loader": [
                "t24"
            ],
            "slider": [
                "t25"
            ],
            "tabs": [
                "t26"
            ],
            "arrow": [
                "t29",
                "t28",
                "t27"
            ],
            "header": [
                "t30"
            ],
            "user": [
                "t31"
            ],
            "suggest": [
                "t34"
            ],
            "toggler": [
                "t40"
            ]
        },
        "nb-select-options": {
            "": [
                "t13"
            ],
            "select": [
                "t13"
            ]
        },
        "nb-user-pic": {
            "user": [
                "t32"
            ]
        },
        "nb-user-name": {
            "user": [
                "t33"
            ],
            "username": [
                "t38"
            ],
            "email": [
                "t39"
            ]
        },
        "nb-suggest": {
            "": [
                "t35"
            ],
            "item": [
                "t37",
                "t36"
            ]
        },
        "": {
            "": [
                "t41"
            ],
            "jsdoc": [
                "t45",
                "t44"
            ],
            "md": [
                "t46"
            ]
        },
        "blocks-menu-item": {
            "*": [
                "t42"
            ]
        },
        "blocks-item": {
            "*": [
                "t43"
            ]
        },
        "blocks-settings": {
            "tags": [
                "t47"
            ]
        },
        "blocks-params": {
            "tags": [
                "t48"
            ]
        },
        "blocks-params-types": {
            "tags": [
                "t49"
            ]
        },
        "blocks-extra": {
            "tags": [
                "t50"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();

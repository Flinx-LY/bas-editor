!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("BasDanmaku", [], t)
        : "object" == typeof exports
        ? (exports.BasDanmaku = t())
        : (e.BasDanmaku = t());
})(window, function () {
    return (function (e) {
        var t = {};
        function r(a) {
            if (t[a]) return t[a].exports;
            var n = (t[a] = { i: a, l: !1, exports: {} });
            return e[a].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, a) {
                r.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: a });
            }),
            (r.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var a = Object.create(null);
                if (
                    (r.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && "string" != typeof e)
                )
                    for (var n in e)
                        r.d(
                            a,
                            n,
                            function (t) {
                                return e[t];
                            }.bind(null, n)
                        );
                return a;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 6))
        );
    })([
        function (e, t, r) {
            e.exports = function () {
                return r(5)(
                    '!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a=function(e,t){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a]);for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return r},n=function(e,t,r){return r||(e=e.replace(/&/g,"").replace(/</g,"").replace(/>/g,"").replace(/"/g,"").replace(/\'/g,"").replace(/\\//g,"").replace(/:/g,"").replace(/;/g,"")),e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#x27;").replace(/\\//g,"&#x2f;").replace(/ /g,t?" ":"&nbsp;").replace(/\\n/g,"<br>")};function i(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function o(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return o}var s=function(){function e(){this.class_names=["text","button","path"],this.variableTable={},this.varibaleRegOrder=0,this.templateTable={},this.tpl_name_id=0,this.obj_name_id=0,this.allowsVariable=[]}return e.prototype.on_String_value=function(e){var t,r,a=[];try{for(var n=i(e),o=n.next();!o.done;o=n.next()){var s=o.value;switch(s.type){case"char":var u=null;switch(s.value.charAt(1)){case"n":u="\\n";break;case"r":u="\\r";break;case"t":u="\\t";break;case"\\\\":u="\\\\";break;case"\'":u="\'";break;case\'"\':u=\'"\';break;default:u=s.charAt(1)}a.push(u);break;case"unicode":case"ascii":var p=s.value.substr(2);a.push(String.fromCharCode(parseInt(p,16)));break;case"seg":a.push(s.value)}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return new l({type:"String",value:a.join("")})},e.prototype.on_Num_value=function(e,t,r){return t=t,new l({type:"Num",value:{numType:(r="%"===r)?"percent":"number",value:(e="+"===e?1:-1)*parseFloat(t)}})},e.prototype.on_Time_value=function(e){for(var t=!0,r=0,a=0,n="",i=null;null!=(i=t?e.match(/^(\\d*\\.?\\d+(?:[eE][\\+\\-]?\\d+)?)(.*)$/):e.match(/^([hms]+)(.*)$/));){if(n=i[1],t)a=parseFloat(n);else switch(n){case"h":r+=3600*a*1e3;break;case"m":r+=60*a*1e3;break;case"s":r+=1e3*a;break;case"ms":r+=a}e=i[2],t=!t}return new l({type:"Time",value:r})},e.prototype.on_Hex_value=function(e){return new l({type:"Hex",value:parseInt(e.substr(2),16)})},e.prototype.on_Object_value=function(e,t){return new l({type:"Object",value:t})},e.prototype.on_Array_value=function(e){return new l({type:"Array",value:e})},e.prototype.on_Variable_value=function(e){return new l({type:"Variable",value:e})},e.prototype.on_KeyValue_list=function(e,t,r){return void 0===r&&(r=null),null==r&&(r=this.peek_allows_varable()),t},e.prototype.on_let_object_binding=function(e,t){t.obj_type;var r=t.name;return this.unregister_variable(r),t.name=e,this.register_variable(e,t),t},e.prototype.on_def_object=function(e,t,r){var a={type:"Def"+this.capitalization_str(e),obj_type:e,name:t,attrs:{}},n=this.on_KeyValue_list(e,r,!1);return this.fill_kv_obj(a.attrs,n),this.register_variable(t,a),a},e.prototype.on_def_template=function(e,t,r,a){var n={type:"template",\nobj_type:e,name:t,attrs:{},tpl_list:[]},i=this.on_KeyValue_list(e,a,!0);return this.check_variables_on_template_body(r,i),this.fill_kv_obj(n.attrs,a),n.tpl_list=r,this.register_template(t,n),n},e.prototype.on_object_modification=function(e,t){if(!this.has_variable_obj(e)){if(-1!==this.class_names.indexOf(e)){var r=this.new_variable_name_of_template_application(e);return this.on_def_object(e,r,t)}return null}var a=this.get_variable_obj(e),n=a.obj_type,i=this.new_variable_name_of_variable_modification(e),o={type:"Def"+this.capitalization_str(n),obj_type:n,name:i,attrs:{}},s=this.on_KeyValue_list(n,t,!1),l=this.merge_list(a.attrs,s);return this.fill_kv_obj(o.attrs,l),this.register_variable(i,o),o},e.prototype.on_tmp_object_modification=function(e,t){var r=e.name,a=this.on_object_modification(r,t);return this.unregister_variable(r),a},e.prototype.on_template_application=function(e,t){var r=this.get_template_obj(e);if(null==r)return null;var a=r.obj_type,n=this.new_variable_name_of_template_application(e),i={type:"Def"+this.capitalization_str(a),obj_type:a,name:n,attrs:{}},o=this.evaluation_template(r.attrs,r.tpl_list,t);return this.fill_kv_obj(i.attrs,o),this.register_variable(n,i),i},e.prototype.on_ArgList=function(e){var t,r,a=[],n=[];try{for(var s=i(e),l=s.next();!l.done;l=s.next()){var u=o(l.value,2),p=u[0],h=u[1];null==p?a.push(h):n.push([p,h])}}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return{naked_params:a,named_params:n}},e.prototype.on_unit_set_expr=function(e,t,r){var a=o(r,2),n={type:"Unit",duration:a[0],default_easing:a[1],target_name:e,attrs:{}},i=this.get_variable_type(e),s=this.on_KeyValue_list(i,t,!1);return this.fill_kv_obj(n.attrs,s),n},e.prototype.on_temporary_target_set_expr=function(e,t,r){var a=e.obj_type,n=e.name,i=o(r,2),s={type:"Unit",duration:i[0],default_easing:i[1],target_name:n,attrs:{}},l=this.on_KeyValue_list(a,t,!1);return this.fill_kv_obj(s.attrs,l),s},e.prototype.on_then_set_expr=function(e,t){return"Serial"===e.type?(e.items.push(t),e):{type:"Serial",items:[e,t]}},e.prototype.on_group_set_expr=function(e){return{type:"Parallel",items:e}},e.prototype.has_variable_obj=function(e){return this.variableTable.hasOwnProperty(e)},e.prototype.get_variable_obj=function(e){return this.variableTable.hasOwnProperty(e)?this.variableTable[e]:(console.error("var "+e+" is not defined."),null)},e.prototype.get_template_obj=function(e){return this.templateTable.hasOwnProperty(e)?this.templateTable[e]:(console.error("tpl "+e+" is not defined."),null)},e.prototype.get_variable_type=function(e){return this.get_variable_obj(e).obj_type},e.prototype.get_template_type=function(e){return this.get_template_obj(e).obj_type},e.prototype.fill_kv_obj=function(e,t){var r,a;try{for(var n=i(t),s=n.next();!s.done;s=n.next()){var l=o(s.value,2),u=l[0],p=l[1];e[u]=p}}catch(e){r={error:e}}finally{try{s&&!s.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}},e.prototype.merge_list=function(e,t){var r,a,n={};this.fill_kv_obj(n,t);var s=[];for(var l in e)n.hasOwnProperty(l)?s.push([l,n[l]]):s.push([l,e[l]]);try{for(var u=i(t),p=u.next();!p.done;p=u.next()){var h=o(p.value,2),c=(l=h[0],h[1]);e.hasOwnProperty(l)||s.push([l,c])}}catch(e){r={error:e}}finally{try{p&&!p.done&&(a=u.return)&&a.call(u)}finally{if(r)throw r.error}}return s},e.prototype.evaluation_template=function(e,t,r){var a,n,s,l,u=r.naked_params,p=r.named_params,h={},c=t.map((function(e,t){var r=o(e,2),a=r[0];r[1];return h[a]=t,{key:a,matched:!1}})),_={};try{for(var b=i(p),f=b.next();!f.done;f=b.next()){var y=o(f.value,2),v=y[0],g=y[1];_[v]=g,h.hasOwnProperty(v)?c[h[v]].matched=!0:console.error("看看命名参数是不是没有在定义参数里面..")}}catch(e){a={error:e}}finally{try{f&&!f.done&&(n=b.return)&&n.call(b)}finally{if(a)throw a.error}}var d=c.filter((function(e){return!e.matched}));d.length<u.length&&console.error("参数太多了..");for(var m=0;m<u.length&&m<d.length;m++){_[v=d[m].key]=u[m]}var k={};try{for(var T=i(t),w=T.next();!w.done;w=T.next()){var j=o(w.value,2);v=j[0],g=j[1];_.hasOwnProperty(v)?k[v]=_[v]:k[v]=g}}catch(e){s={\nerror:e}}finally{try{w&&!w.done&&(l=T.return)&&l.call(T)}finally{if(s)throw s.error}}var x=[];for(var v in e){var S=e[v];if("Variable"===S.type){var O=S.value;k.hasOwnProperty(O)?x.push([v,k[O]]):console.error("eval template err: no variable named "+O+" is provided.")}else x.push([v,S])}return x},e.prototype.capitalization_str=function(e){return e.substr(0,1).toUpperCase()+e.substr(1)},e.prototype.new_variable_name_of_template_application=function(e){var t="tpl_"+e+"_"+this.tpl_name_id;return this.tpl_name_id+=1,t},e.prototype.new_variable_name_of_variable_modification=function(e){var t="obj_"+e+"_"+this.obj_name_id;return this.obj_name_id+=1,t},e.prototype.register_variable=function(e,t){this.variableTable.hasOwnProperty(e)&&console.log("var "+e+" is already exists, and will be shadowed."),t._reg_order=this.varibaleRegOrder,this.variableTable[e]=t,this.varibaleRegOrder+=1},e.prototype.unregister_variable=function(e){delete this.variableTable[e]},e.prototype.register_template=function(e,t){this.templateTable.hasOwnProperty(e)&&console.log("tpl "+e+" is already exists, and will be shadowed."),this.templateTable[e]=t},e.prototype.on_enter_scope=function(){},e.prototype.on_leave_scope=function(){},e.prototype.on_enter_tpl=function(){this.allowsVariable.push(!0)},e.prototype.on_leave_tpl=function(){this.allowsVariable.pop()},e.prototype.peek_allows_varable=function(){return this.allowsVariable.length>0&&this.allowsVariable[this.allowsVariable.length-1]},e.prototype.check_variables_on_template_body=function(e,t){var r,a,n={};this.fill_kv_obj(n,t);try{for(var s=i(e),l=s.next();!l.done;l=s.next()){var u=o(l.value,2),p=(u[0],u[1]);if("Variable"===p.type){var h=p.value;n.hasOwnProperty(h)||console.error("varibale "+h+" in template\'s body is not present at arguments.")}}}catch(e){r={error:e}}finally{try{l&&!l.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}},e.prototype.on_Result=function(e){var t=[];for(var r in this.variableTable)t.push(this.variableTable[r]);return t.sort((function(e,t){return e.obj_name_id-t.obj_name_id})),{sets:e.filter((function(e){return"SetExpr"===e.type})).map((function(e){return e.params})),defs:t}},e}(),l=function(){function e(e){this.type=e.type,this.value=e.value}return e.prototype.as_string=function(){if("String"===this.type)return this.value},e.prototype.as_integer=function(){return"Hex"===this.type?this.value:"Num"===this.type?Math.floor(this.value.value):void 0},e.prototype.as_number=function(){if("Num"===this.type)return this.value},e.prototype.as_time=function(){if("Time"===this.type)return this.value},e.prototype.as_object=function(){if("Object"===this.type)return this.value},e}(),u=function(){function e(){\nthis.transTable=[[!1,[4294967295,2,1],[[0,42,0],[43,43,1],[44,44,2]]],[!1,[4294967295,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3],[[0,2,0],[3,3,1],[4,4,2],[5,5,3],[6,6,4],[7,7,5],[8,8,6],[9,9,7],[10,10,8],[11,11,9],[12,12,10],[13,13,11],[14,14,12],[15,15,13],[16,16,14],[17,17,15],[18,18,16],[19,19,17],[20,20,18],[21,21,19],[22,22,20],[23,37,21],[38,38,22],[39,39,23],[40,41,24],[42,42,25],[43,44,0]]],[!1,[30,28,29,4294967295],[[0,0,0],[1,20,1],[21,21,2],[22,39,1],[40,40,3],[41,42,1],[43,44,3]]],[!1,[4294967295,31],[[0,41,0],[42,42,1],[43,44,0]]],[!1,[4294967295,4],[[0,39,0],[40,41,1],[42,44,0]]],[!1,[4294967295,14,37,36,35,34,33,32],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,4],[35,35,5],[36,37,6],[38,38,7],[39,39,1],[40,44,0]]],[!1,[4294967295,38],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!1,[4294967295,7,39],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,40],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,14,37,36,34,33,32],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,37,5],[38,38,6],[39,39,1],[40,44,0]]],[!1,[4294967295,7,41],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,31,1],[32,32,2],[33,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,42],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!0],[!1,[4294967295,7,43],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,30,1],[31,31,2],[32,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,44],[[0,6,0],[7,8,1],[9,13,0],[14,16,1],[17,17,2],[18,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!0],[!0],[!0],[!0],[!0],[!1,[45,4294967295,47,46],[[0,0,0],[1,1,1],[2,2,0],[3,14,1],[15,15,0],[16,20,1],[21,21,0],[22,27,1],[28,28,2],[29,30,0],[31,33,1],[34,34,3],[35,44,1]]],[!1,[31,48,4294967295],[[0,39,0],[40,40,1],[41,42,0],[43,44,2]]],[!1,[4294967295,38],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,49,50],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,51,53,52],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,37,0],[38,38,3],[39,39,1],[40,44,0]]],[!1,[4294967295,54],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,55,56],[[0,15,0],[16,16,1],[17,37,0],[38,38,2],[39,39,1],[40,44,0]]],[!1,[4294967295,57,58],[[0,15,0],[16,16,1],[17,37,0],[38,38,2],[39,39,1],[40,44,0]]],[!1,[4294967295,38,37,36,34,33],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,37,5],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,59],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,2],[16,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,60],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,2],[16,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,61],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,62],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,26,1],[27,27,2],[28,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,63],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,30,1],[31,31,2],[32,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,64],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,24,1],[25,25,2],[26,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,65],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,66],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,48],[[0,39,0],[40,40,1],[41,44,0]]],[!1,[4294967295,49,37,36,34],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,31,0],[32,32,3],[33,34,0],[35,35,4],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,49],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,51,37,68,67,52],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,5],[39,39,1],[40,44,0]]],[!1,[4294967295,69],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,54],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,55,37,34,70,56],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,5],[39,39,1],[40,44,0]]],[!1,[4294967295,71],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,57,68,72,58],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,37,3],[38,38,4],[39,39,1],[40,44,0]]],[!1,[4294967295,73],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,74],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,29,1],[30,30,2],[31,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,75],[[0,6,0],[7,8,1],[9,13,0],[14,16,1],[17,17,2],[18,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,76],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,29,1],[30,30,2],[31,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,77],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,78],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79,80],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,53],[[0,17,0],[18,18,1],[19,44,0]]],[!1,[4294967295,69,37,68,67],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81,82],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,71,37,34,70],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,37,4],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83,84],[[0,15,0],[16,16,1],[17,19,0],[20,20,2],[21,21,0],[22,22,2],[23,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,73,68,72],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,37,3],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,85],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,23,1],[24,24,2],[25,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7,86],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,35,1],[36,36,2],[37,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0],[!1,[4294967295,87],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79,37,68],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,79],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81,37,34],[[0,15,0],[16,16,1],[17,17,0],[18,18,2],[19,34,0],[35,35,3],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,81],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83,68],[[0,15,0],[16,16,1],[17,34,0],[35,35,2],[36,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,83],[[0,15,0],[16,16,1],[17,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,7],[[0,6,0],[7,8,1],[9,13,0],[14,18,1],[19,22,0],[23,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!1,[4294967295,88],[[0,6,0],[7,8,1],[9,13,0],[14,14,1],[15,15,0],[16,16,1],[17,25,0],[26,27,1],[28,35,0],[36,37,1],[38,38,0],[39,39,1],[40,44,0]]],[!0]],\nthis.finalTable={4:1,5:3,6:26,7:30,8:5,9:7,10:6,11:27,12:30,13:30,14:3,15:30,16:30,17:19,18:22,19:23,20:29,21:20,22:30,23:30,24:24,25:28,26:21,27:25,28:12,29:11,31:0,34:2,36:2,37:2,38:3,39:30,40:30,41:30,42:30,43:30,44:30,45:8,48:0,49:3,53:2,54:4,59:13,60:14,61:30,62:15,63:30,64:30,74:18,75:30,76:30,77:10,85:16,86:17,88:9},this.inputTable=[[0,8,1],[9,9,41],[10,10,40],[11,11,1],[12,12,41],[13,13,40],[14,31,1],[32,32,41],[33,33,1],[34,34,21],[35,35,1],[36,36,23],[37,37,10],[38,38,1],[39,39,2],[40,40,9],[41,41,4],[42,42,1],[43,43,22],[44,44,19],[45,45,20],[46,46,38],[47,47,42],[48,48,39],[49,57,16],[58,58,1],[59,59,5],[60,60,1],[61,61,13],[62,63,1],[64,64,23],[65,68,26],[69,69,37],[70,70,26],[71,87,23],[88,88,33],[89,90,23],[91,91,12],[92,92,0],[93,93,11],[94,94,1],[95,95,23],[96,96,1],[97,97,8],[98,98,26],[99,99,7],[100,100,14],[101,101,36],[102,102,27],[103,103,23],[104,104,32],[105,107,23],[108,108,17],[109,109,35],[110,110,30],[111,111,25],[112,112,31],[113,113,23],[114,114,29],[115,115,18],[116,116,15],[117,117,28],[118,119,23],[120,120,34],[121,121,24],[122,122,23],[123,123,6],[124,124,1],[125,125,3],[126,65535,1]],this.initialTable={STRING:1,INITIAL:2}}return e.lexSeq=function(t){var r=new e;r.source=t;for(var a=[],n=r.token;"<$>"!==n;)a.push({token:n,text:r.yytext,start:r.startIdx,end:r.endIdx}),r.advance(),n=r.token;return a},e.prototype.yyrestart=function(e){void 0===e&&(e=null),null!=e&&(this.sourceString=e),this.ended=!1,this.start=0,this.oldStart=0,this.line=1,this.col=0,this.advanced=!0,this.tokenNameString=null,this.yyObject={},this.initialState="INITIAL"},Object.defineProperty(e.prototype,"source",{set:function(e){this.sourceString=e,this.yyrestart()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"token",{get:function(){return this.advanced&&(this.tokenNameString=this.next(),this.advanced=!1),this.tokenNameString},enumerable:!0,configurable:!0}),e.prototype.advance=function(){this.advanced=!0},Object.defineProperty(e.prototype,"startIdx",{get:function(){return this.oldStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"endIdx",{get:function(){return this.start},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return[this.line,this.col]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positionInfo",{get:function(){return this.token+"@row:"+this.position.join("col:")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"yytext",{get:function(){return this.yyText},set:function(e){this.yyText=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"yyleng",{get:function(){return this.endIdx-this.startIdx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"yy",{get:function(){return this.yyObject},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tokenName",{get:function(){return this.tokenNameString},enumerable:!0,configurable:!0}),e.prototype.next=function(){for(var e,t,r,a,n,i,o,s,l;;)for(e=null,t=null,r=0,a=this.start,n=this.start,i=4294967295,s=4294967295,l=this.start,o=this.transTable[0][1][this.initialInput];;){if(r=this.sourceString.charCodeAt(n),4294967295!==i&&(13===r?(this.col=0,this.line++):10===r?13!==i&&(this.col=0,this.line++):this.col++),i=r,4294967295===(t=this.trans(o,r))){if(a===l){if(this.start===this.sourceString.length){if(this.ended)throw new Error("已经到达末尾.");return this.ended=!0,"<$>"}throw new Error("意外的字符,line:"+this.position.join(",col:")+"of "+this.sourceString.substr(a,20))}switch(e=this.finalTable[s],this.start=l,this.oldStart=a,this.yyText=this.sourceString.substring(this.startIdx,this.endIdx),e){case 2:return"time";case 3:return"number";case 4:return"hex";case 5:return"+";case 6:return"-";case 7:return this.begin("STRING"),"str_start";case 8:return"str_esc_char";case 9:return"str_esc_unicode";case 10:return"str_esc_ascii";case 11:return this.begin("INITIAL"),"str_end";case 12:return"str_seg";case 13:return"set";case 14:return"let";case 15:return"def";case 16:return"apply";case 17:return"clone";case 18:return"then"\n;case 19:return"=";case 20:return"(";case 21:return")";case 22:return"[";case 23:return"]";case 24:return"{";case 25:return"}";case 26:return".";case 27:return",";case 28:return";";case 29:return"%";case 30:return"id"}break}null!=(e=this.finalTable[t])&&(s=t,l=n+1),n+=1,o=t}},e.prototype.trans=function(e,t){if(isNaN(t))return 4294967295;if(t<this.inputTable[0][0]||t>this.inputTable[this.inputTable.length-1][1])throw new Error("输入超出有效范围,line:"+this.position.join(",col:"));if(!0===this.transTable[e][0])return 4294967295;var r=this.find(t,this.inputTable),a=this.find(r,this.transTable[e][2]);return this.transTable[e][1][a]},e.prototype.find=function(e,t){var r,a,n;for(r=0,a=t.length-1;;){if(t[n=r+a>>>1][0]<=e&&t[n][1]>=e)return t[n][2];t[n][0]>e?a=n-1:r=n+1}},e.prototype.begin=function(e){void 0===e&&(e=null),this.initialState=null!=e?e:"INITIAL"},Object.defineProperty(e.prototype,"initialState",{get:function(){return this.initialStateString},set:function(e){if(void 0===this.initialTable[e])throw new Error("未定义的起始状态:"+e);this.initialStateString=e,this.initialInput=this.initialTable[e]},enumerable:!0,configurable:!0}),e}(),p=function(){function e(){this.ast_helper=new s,this.actionTable=[null,{0:6,1:1,2:2,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{0:6,2:9,67:54,4:22,69:20,70:16,8:4,9:8,10:10,76:12,77:32,14:9,73:148,18:9,85:52,78:50,24:28,25:9,90:150,74:44,29:18,68:36,89:14,36:26,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{3:25,5:33,6:35,7:37,12:43,16:57,19:68,21:43,23:68,26:68,28:43,30:87,31:68,32:95,35:87,38:87,39:68,40:68,44:66,45:87,47:104,48:106,53:102,54:98,61:96,62:100,64:132,65:134,66:68,71:87,72:87,75:187,79:68,80:201,82:140,86:95,87:112,88:87,92:64,93:94,94:70,95:90,96:92,98:87,101:120,106:239,107:138,109:110,110:108,113:46,114:72,117:136,121:68,122:87},{0:6,2:11,67:54,4:22,69:20,70:16,8:4,9:8,10:10,11:41,68:36,13:49,14:11,73:148,18:11,20:65,77:32,78:50,124:150,24:28,25:11,90:150,27:81,92:161,29:18,33:135,34:30,91:229,36:26,74:44,85:52,76:12,41:150,89:14,43:36,101:120,46:161,47:104,112:40,115:34,99:161,120:56,116:38,125:42},{19:68,23:68,24:28,25:24,29:18,30:89,31:68,35:139,36:26,37:141,39:68,43:36,44:66,45:159,47:104,48:106,53:102,54:98,61:96,62:100,64:132,65:134,66:68,68:36,69:20,70:16,71:183,76:12,77:32,79:68,82:140,87:112,88:225,89:14,92:64,93:94,94:70,95:90,96:92,98:237,101:120,107:138,109:110,110:108,113:46,114:72,115:34,116:38,117:136,121:68,122:48,123:251},{0:6,2:13,67:54,4:22,69:20,70:16,8:4,9:8,10:10,76:12,77:32,14:13,73:148,18:13,85:52,78:50,24:28,25:13,90:150,74:44,29:18,68:36,89:14,36:26,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{3:27,20:67,21:45,27:83,12:45,28:45,15:55},{64:132,65:134,67:54,94:70,117:136,72:185,120:56,111:243,78:50,82:140,85:52,22:71,87:112,26:68,92:64,93:94,86:80,95:90,32:80,33:137,100:84,101:120,38:143,40:68,107:138,44:66,109:110,110:108,47:104,48:106,96:92,114:72,108:76,53:102,54:98,55:173,56:74,57:78,58:82,59:86,60:88,61:96,62:100},{36:39,69:20,70:16,10:39,43:36,76:12,77:32,47:104,115:34,116:38,68:36,101:120,24:39,89:14,29:18},{64:132,65:134,117:136,118:144,77:197,82:140,83:146,84:215,87:112,92:64,93:94,94:231,95:90,96:92,100:84,101:120,107:138,109:110,110:108,47:104,48:106,53:102,54:98,119:142,57:175,58:82,59:86,60:88,61:96,62:100},{0:6,2:15,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{0:6,2:17,67:54,68:36,69:20,70:16,8:4,9:8,10:10,76:12,77:32,78:50,73:148,74:44,85:52,89:14,90:150,29:18,101:120,41:150,43:36,47:104,112:40,115:34,116:38,120:56,124:150,125:42},{17:59,42:153,46:163},{32:97,75:97,52:97,86:97,80:97,106:97,43:97,68:97},{32:99,80:99,106:99,75:99,52:99,86:99},{32:118,49:114,50:116,52:118,86:118,80:118,106:118,75:118,63:177},{87:221},{32:101,80:101,106:101,75:101,52:101,86:101},{32:103,80:103,106:103,75:103,52:103,86:103},{32:105,97:105,52:105,86:105,80:105,106:105,75:105},{\n104:126,81:205,105:128,51:130,102:122,103:124},{104:126,81:207,105:128,51:130,102:122,103:124},{104:126,81:209,105:128,51:130,102:122,103:124},{104:126,81:211,105:128,51:130,102:122,103:124},{104:126,81:213,105:128,51:130,102:122,103:124},{32:107,80:107,75:107,86:107},{101:120,118:144,109:110,110:108,47:104,48:106,83:146,52:167,53:102,54:98,87:112,84:217,61:96,62:100,119:142},{67:54,85:52,120:56,41:149,90:149,124:149,78:50}],this.gotoTable={64:{52:171},29:{0:5},30:{0:7},31:{2:19},32:{2:21},33:{25:75,18:61,2:23,14:51},34:{79:199,23:73,19:63,39:145,40:147,121:247,26:79,66:179,31:93},35:{68:181,43:155},36:{3:29},37:{4:31},38:{14:53},39:{25:77},40:{12:47,21:69,28:85},41:{32:109,75:109,52:109,86:109,80:109,106:109,43:157,68:157},42:{97:233},43:{32:111,97:235,52:111,86:111,80:111,106:111,75:111},44:{124:253,41:151,90:227},45:{113:245},46:{122:249},47:{32:113},49:{75:189},50:{88:91,98:91,35:91,38:91,71:91,72:91,122:91,45:91,30:91},51:{75:191},52:{32:115,86:219},53:{32:117,86:117},54:{32:119,80:203,86:119},55:{32:121,80:121,106:241,75:193,52:169,86:121},56:{32:123,80:123,75:195,86:123},57:{32:125,80:125,106:125,75:125,52:125,86:125},58:{32:127,80:127,106:127,75:127,52:127,86:127},59:{32:129,80:129,106:129,75:129,52:129,86:129},60:{87:223},61:{51:165},62:{32:131,80:131,75:131,86:131},63:{32:133,80:133,75:133,86:133}},this.prodList=[[65,2],[29,1],[30,2],[30,0],[31,1],[31,1],[33,6],[33,6],[33,5],[33,3],[33,5],[37,0],[39,0],[38,2],[38,1],[36,3],[35,1],[35,3],[35,0],[42,1],[32,7],[32,12],[32,5],[45,0],[46,0],[40,4],[40,4],[40,3],[40,6],[48,3],[48,1],[48,0],[49,1],[34,2],[34,0],[50,3],[50,4],[47,1],[52,3],[52,1],[52,0],[53,1],[53,3],[54,1],[54,1],[51,1],[51,1],[51,1],[55,1],[55,1],[55,1],[55,1],[41,1],[58,1],[57,3],[60,1],[60,0],[59,1],[59,1],[59,0],[43,3],[61,2],[61,2],[61,2],[61,2],[61,0],[56,1],[56,1],[63,4],[62,3],[62,2],[64,3],[64,3],[64,1],[44,1],[44,0]],this.inputTable={"<$>":1,set:2,id:3,"{":4,"}":5,apply:6,"(":7,")":8,then:9,",":10,def:11,let:12,"=":13,time:14,hex:15,number:16,"%":17,"+":18,"-":19,str_start:20,str_end:21,str_esc_char:22,str_esc_unicode:23,str_esc_ascii:24,str_seg:25,"[":26,"]":27,";":28}}return e.parse=function(t){var r=new u;return r.source=t,(new e).parseLexer(r)},e.prototype.parseLexer=function(e){for(var t,r,a,n=[0],i=[];;){if(r=e.token,t=n[n.length-1],null==this.actionTable[this.inputTable[r]][t])throw new Error("Parse Error:"+e.positionInfo);if(1===(a=this.actionTable[this.inputTable[r]][t]))return i.pop();if(1==(1&a))i.push(e.yytext),n.push((a>>>1)-1),e.advance();else if(0==(1&a)){var o=a>>>1,s=this.prodList[o][1],l=null;switch(s>0&&(l=i[i.length-s]),o){case 1:l=this.ast_helper.on_Result(i[i.length-1]);break;case 2:(l=i[i.length-2]).push(i[i.length-1]);break;case 3:l=[];break;case 4:break;case 5:l={type:"SetExpr",params:i[i.length-1]};break;case 6:l=this.ast_helper.on_unit_set_expr(i[i.length-5],i[i.length-3],i[i.length-1]);break;case 7:l=this.ast_helper.on_temporary_target_set_expr(i[i.length-5],i[i.length-3],i[i.length-1]);break;case 8:l={type:"ApplyExpr",params:[i[i.length-4],i[i.length-2]]};break;case 9:l=this.ast_helper.on_then_set_expr(i[i.length-3],i[i.length-1]);break;case 10:l=this.ast_helper.on_group_set_expr(i[i.length-3]);break;case 11:this.ast_helper.on_enter_scope();break;case 12:this.ast_helper.on_leave_scope();break;case 13:(l=i[i.length-2]).push(i[i.length-1]);break;case 14:l=[i[i.length-1]];break;case 15:l=i[i.length-2];break;case 16:l=[i[i.length-1]];break;case 17:l=[i[i.length-3],i[i.length-1]];break;case 18:l=[];break;case 19:break;case 20:l=this.ast_helper.on_def_object(i[i.length-6],i[i.length-5],i[i.length-3]);break;case 21:l=this.ast_helper.on_def_template(i[i.length-11],i[i.length-10],i[i.length-8],i[i.length-4]);break;case 22:l=this.ast_helper.on_let_object_binding(i[i.length-4],i[i.length-2]);break;case 23:this.ast_helper.on_enter_tpl();break;case 24:this.ast_helper.on_leave_tpl();break;case 25:l=this.ast_helper.on_object_modification(i[i.length-4],i[i.length-2]);break;case 26:l=this.ast_helper.on_template_application(i[i.length-4],i[i.length-2]);break;case 27:\nl=i[i.length-2];break;case 28:l=this.ast_helper.on_tmp_object_modification(i[i.length-5],i[i.length-3]);break;case 29:(l=i[i.length-3]).push(i[i.length-1]);break;case 30:l=[i[i.length-1]];break;case 31:l=[];break;case 32:l=this.ast_helper.on_Variable_value(i[i.length-1]);break;case 33:(l=i[i.length-2]).push(i[i.length-1]);break;case 34:l=[];break;case 35:l=[i[i.length-3],i[i.length-1]];break;case 36:l=[i[i.length-4],i[i.length-2]];break;case 37:l=this.ast_helper.on_ArgList(i[i.length-1]);break;case 38:(l=i[i.length-1]).unshift(i[i.length-3]);break;case 39:l=[i[i.length-1]];break;case 40:l=[];break;case 41:l=[null,i[i.length-1]];break;case 42:l=[i[i.length-3],i[i.length-1]];break;case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:break;case 52:l=this.ast_helper.on_Time_value(i[i.length-1]);break;case 53:l=this.ast_helper.on_Hex_value(i[i.length-1]);break;case 54:l=this.ast_helper.on_Num_value(i[i.length-3],i[i.length-2],i[i.length-1]);break;case 55:case 56:case 57:case 58:break;case 59:l="+";break;case 60:l=this.ast_helper.on_String_value(i[i.length-2]);break;case 61:(l=i[i.length-2]).push({type:"char",value:i[i.length-1]});break;case 62:(l=i[i.length-2]).push({type:"unicode",value:i[i.length-1]});break;case 63:(l=i[i.length-2]).push({type:"ascii",value:i[i.length-1]});break;case 64:(l=i[i.length-2]).push({type:"seg",value:i[i.length-1]});break;case 65:l=[];break;case 66:case 67:break;case 68:l=this.ast_helper.on_Object_value(i[i.length-4],this.ast_helper.on_KeyValue_list(i[i.length-4],i[i.length-2]));break;case 69:l=this.ast_helper.on_Array_value(i[i.length-2]);break;case 70:l=this.ast_helper.on_Array_value([]);break;case 71:case 72:(l=i[i.length-3]).push(i[i.length-1]);break;case 73:l=[i[i.length-1]]}for(var u=0;u<s;)n.pop(),i.pop(),u++;if(t=n[n.length-1],null==this.gotoTable[this.prodList[o][0]][t])throw new Error("Goto Error!"+e.positionInfo);a=this.gotoTable[this.prodList[o][0]][t],n.push((a>>>1)-1),i.push(l)}}},e}();var h=function(e,t){void 0===t&&(t=!0);var r={x:{numType:"number",value:0},y:{numType:"number",value:0},zIndex:{numType:"number",value:0},scale:{numType:"number",value:1},duration:void 0},i={content:"请输入内容",alpha:{numType:"number",value:1},color:16777215,anchorX:{numType:"number",value:0},anchorY:{numType:"number",value:0},fontSize:{numType:"number",value:25},fontFamily:"SimHei",bold:{numType:"number",value:1},textShadow:{numType:"number",value:1},strokeWidth:{numType:"number",value:0},strokeColor:16777215,rotateX:{numType:"number",value:0},rotateY:{numType:"number",value:0},rotateZ:{numType:"number",value:0},parent:void 0},o={text:"请输入内容",fontSize:{numType:"number",value:25},textColor:0,textAlpha:{numType:"number",value:1},fillColor:16777215,fillAlpha:{numType:"number",value:1},target:void 0},s={d:void 0,viewBox:void 0,borderColor:0,borderAlpha:{numType:"number",value:1},borderWidth:{numType:"number",value:0},fillColor:16777215,fillAlpha:{numType:"number",value:1}};function l(e){for(var t in e)if(e.hasOwnProperty(t))switch(void 0!==e[t].value&&void 0!==e[t].value.numType&&void 0===e[t].easing?e[t]=e[t].value:void 0!==e[t].value&&void 0!==e[t].type&&(e[t]=e[t].value),t){case"content":e[t]=n(e[t],!1,!0);break;case"fontFamily":e[t]=n(e[t],!0,!1);break;case"parent":e[t]=n(e[t],!1,!1);break;case"text":e[t]=n(e[t],!1,!0);break;case"d":case"viewBox":e[t]=n(e[t],!0,!1);break;default:"string"==typeof e[t]&&(e[t]=n(e[t],!1,!1))}}function u(e){l(e.attrs),e.duration=e.duration.value,e.defaultEasing=e.default_easing&&e.default_easing.value,e.targetName=e.target_name}try{var h=p.parse(e),c={};c.defs=h.defs;for(var _=0;_<c.defs.length;_++){if(l(c.defs[_].attrs),c.defs[_].attrs.target){for(var b={objType:"seek"},f=0;f<c.defs[_].attrs.target.length;f++){var y=c.defs[_].attrs.target[f];"seasonId"===y[0]||"episodeId"===y[0]?b.objType="bangumi":"av"!==y[0]&&"page"!==y[0]||(b.objType="av"),y[1].value&&y[1].value.value?b[y[0]]=y[1].value.value:y[1].value&&(b[y[0]]=y[1].value)}c.defs[_].attrs.target=b}c.defs[_].attrs=a(r,h.defs[_].attrs),\n"DefText"===c.defs[_].type?c.defs[_].attrs=a(i,h.defs[_].attrs):"DefButton"===c.defs[_].type?c.defs[_].attrs=a(o,h.defs[_].attrs):"DefPath"===c.defs[_].type&&(c.defs[_].attrs=a(s,h.defs[_].attrs))}c.sets=h.sets;for(_=0;_<c.sets.length;_++)if(c.sets[_].items)for(f=0;f<c.sets[_].items.length;f++)c.sets[_].items[f].attrs&&u(c.sets[_].items[f]);else u(c.sets[_]);return c}catch(e){throw new Error(e.message)}},c=self;c.addEventListener("message",(function(e){var t=e.data;try{var r=h(t.text);t.defs=r.defs,t.sets=r.sets,c.postMessage(t)}catch(e){console.warn("Error in BAS parser: ",e),c.postMessage({error:e.message})}}));t.default={}}]);',
                    null
                );
            };
        },
        function (e, t, r) {
            var a = r(2);
            "string" == typeof a && (a = [[e.i, a, ""]]);
            var n = {
                attributes: { "data-injector": "bilibili-player" },
                insert: "head",
                singleton: !1,
            };
            r(4)(a, n);
            a.locals && (e.exports = a.locals);
        },
        function (e, t, r) {
            (e.exports = r(3)(!1)).push([
                e.i,
                ".bas-danmaku{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;background:transparent;z-index:10}.bas-danmaku.bas-danmaku-pause .bas-danmaku-item{-webkit-animation-play-state:paused;animation-play-state:paused}.bas-danmaku>canvas{pointer-events:auto}.bas-danmaku-item{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;line-height:1;-webkit-transform-origin:0 0;transform-origin:0 0}.bas-danmaku-item .bas-danmaku-item{position:absolute;left:0;top:0}.bas-danmaku-item.bas-danmaku-item-button{pointer-events:auto;padding:10px 20px;border-radius:3px}.bas-danmaku-item-wrap{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;left:0;right:0;top:0;height:100%;z-index:10}.bas-danmaku-item-inner{border:0;-webkit-transform-origin:0 0;transform-origin:0 0}.bas-danmaku-item-text .bas-danmaku-item-inner{pointer-events:none;border-style:solid}",
                "",
            ]);
        },
        function (e, t, r) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var r = (function (e, t) {
                                var r = e[1] || "",
                                    a = e[3];
                                if (!a) return r;
                                if (t && "function" == typeof btoa) {
                                    var n =
                                            ((s = a),
                                            (o = btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(s)
                                                    )
                                                )
                                            )),
                                            (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                                o
                                            )),
                                            "/*# ".concat(l, " */")),
                                        i = a.sources.map(function (e) {
                                            return "/*# sourceURL="
                                                .concat(a.sourceRoot)
                                                .concat(e, " */");
                                        });
                                    return [r].concat(i).concat([n]).join("\n");
                                }
                                var s, o, l;
                                return [r].join("\n");
                            })(t, e);
                            return t[2]
                                ? "@media ".concat(t[2], "{").concat(r, "}")
                                : r;
                        }).join("");
                    }),
                    (t.i = function (e, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var a = {}, n = 0; n < this.length; n++) {
                            var i = this[n][0];
                            null != i && (a[i] = !0);
                        }
                        for (var s = 0; s < e.length; s++) {
                            var o = e[s];
                            (null != o[0] && a[o[0]]) ||
                                (r && !o[2]
                                    ? (o[2] = r)
                                    : r &&
                                      (o[2] = "("
                                          .concat(o[2], ") and (")
                                          .concat(r, ")")),
                                t.push(o));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, r) {
            "use strict";
            var a,
                n = {},
                i = function () {
                    return (
                        void 0 === a &&
                            (a = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            )),
                        a
                    );
                },
                s = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var r = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                r instanceof window.HTMLIFrameElement
                            )
                                try {
                                    r = r.contentDocument.head;
                                } catch (e) {
                                    r = null;
                                }
                            e[t] = r;
                        }
                        return e[t];
                    };
                })();
            function o(e, t) {
                for (var r = [], a = {}, n = 0; n < e.length; n++) {
                    var i = e[n],
                        s = t.base ? i[0] + t.base : i[0],
                        o = { css: i[1], media: i[2], sourceMap: i[3] };
                    a[s]
                        ? a[s].parts.push(o)
                        : r.push((a[s] = { id: s, parts: [o] }));
                }
                return r;
            }
            function l(e, t) {
                for (var r = 0; r < e.length; r++) {
                    var a = e[r],
                        i = n[a.id],
                        s = 0;
                    if (i) {
                        for (i.refs++; s < i.parts.length; s++)
                            i.parts[s](a.parts[s]);
                        for (; s < a.parts.length; s++)
                            i.parts.push(m(a.parts[s], t));
                    } else {
                        for (var o = []; s < a.parts.length; s++)
                            o.push(m(a.parts[s], t));
                        n[a.id] = { id: a.id, refs: 1, parts: o };
                    }
                }
            }
            function u(e) {
                var t = document.createElement("style");
                if (void 0 === e.attributes.nonce) {
                    var a = r.nc;
                    a && (e.attributes.nonce = a);
                }
                if (
                    (Object.keys(e.attributes).forEach(function (r) {
                        t.setAttribute(r, e.attributes[r]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var n = s(e.insert || "head");
                    if (!n)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    n.appendChild(t);
                }
                return t;
            }
            var h,
                p =
                    ((h = []),
                    function (e, t) {
                        return (h[e] = t), h.filter(Boolean).join("\n");
                    });
            function c(e, t, r, a) {
                var n = r ? "" : a.css;
                if (e.styleSheet) e.styleSheet.cssText = p(t, n);
                else {
                    var i = document.createTextNode(n),
                        s = e.childNodes;
                    s[t] && e.removeChild(s[t]),
                        s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
                }
            }
            function f(e, t, r) {
                var a = r.css,
                    n = r.media,
                    i = r.sourceMap;
                if (
                    (n && e.setAttribute("media", n),
                    i &&
                        btoa &&
                        (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                            btoa(
                                unescape(encodeURIComponent(JSON.stringify(i)))
                            ),
                            " */"
                        )),
                    e.styleSheet)
                )
                    e.styleSheet.cssText = a;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(a));
                }
            }
            var d = null,
                b = 0;
            function m(e, t) {
                var r, a, n;
                if (t.singleton) {
                    var i = b++;
                    (r = d || (d = u(t))),
                        (a = c.bind(null, r, i, !1)),
                        (n = c.bind(null, r, i, !0));
                } else
                    (r = u(t)),
                        (a = f.bind(null, r, t)),
                        (n = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(r);
                        });
                return (
                    a(e),
                    function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap
                            )
                                return;
                            a((e = t));
                        } else n();
                    }
                );
            }
            e.exports = function (e, t) {
                ((t = t || {}).attributes =
                    "object" == typeof t.attributes ? t.attributes : {}),
                    t.singleton ||
                        "boolean" == typeof t.singleton ||
                        (t.singleton = i());
                var r = o(e, t);
                return (
                    l(r, t),
                    function (e) {
                        for (var a = [], i = 0; i < r.length; i++) {
                            var s = r[i],
                                u = n[s.id];
                            u && (u.refs--, a.push(u));
                        }
                        e && l(o(e, t), t);
                        for (var h = 0; h < a.length; h++) {
                            var p = a[h];
                            if (0 === p.refs) {
                                for (var c = 0; c < p.parts.length; c++)
                                    p.parts[c]();
                                delete n[p.id];
                            }
                        }
                    }
                );
            };
        },
        function (e, t, r) {
            "use strict";
            var a = window.URL || window.webkitURL;
            e.exports = function (e, t) {
                try {
                    try {
                        var r;
                        try {
                            (r = new (window.BlobBuilder ||
                                window.WebKitBlobBuilder ||
                                window.MozBlobBuilder ||
                                window.MSBlobBuilder)()).append(e),
                                (r = r.getBlob());
                        } catch (t) {
                            r = new Blob([e]);
                        }
                        return new Worker(a.createObjectURL(r));
                    } catch (t) {
                        return new Worker(
                            "data:application/javascript," +
                                encodeURIComponent(e)
                        );
                    }
                } catch (e) {
                    if (!t) throw Error("Inline worker is not supported");
                    return new Worker(t);
                }
            };
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            r(1);
            var a = {
                    extend: function (e, t) {
                        var r = {};
                        for (var a in e) e.hasOwnProperty(a) && (r[a] = e[a]);
                        for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
                        return r;
                    },
                    escapeSpecialChars: function (e) {
                        return e
                            .replace(/\n/g, "\\n")
                            .replace(/\r/g, "\\r")
                            .replace(/\t/g, "\\t")
                            .replace(/\f/g, "\\f");
                    },
                    nowTime: function () {
                        return performance ? performance.now() : +new Date();
                    },
                    string2DOM: function (e) {
                        return $(e)[0];
                    },
                    colorFromInt: function (e) {
                        return "#" + ("00000" + e.toString(16)).slice(-6);
                    },
                    rgbaFormat: function (e, t) {
                        var r = ("00000" + e.toString(16)).slice(-6);
                        return (
                            "rgba(" +
                            parseInt(r.slice(0, 2), 16) +
                            "," +
                            parseInt(r.slice(2, 4), 16) +
                            "," +
                            parseInt(r.slice(4, 6), 16) +
                            "," +
                            t +
                            ")"
                        );
                    },
                    htmlEncode: function (e, t, r) {
                        return (
                            r ||
                                (e = e
                                    .replace(/&/g, "")
                                    .replace(/</g, "")
                                    .replace(/>/g, "")
                                    .replace(/"/g, "")
                                    .replace(/'/g, "")
                                    .replace(/\//g, "")
                                    .replace(/:/g, "")
                                    .replace(/;/g, "")),
                            e
                                .replace(/&/g, "&amp;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;")
                                .replace(/"/g, "&quot;")
                                .replace(/'/g, "&#x27;")
                                .replace(/\//g, "&#x2f;")
                                .replace(/ /g, t ? " " : "&nbsp;")
                                .replace(/\n/g, "<br>")
                        );
                    },
                    browser: {
                        get version() {
                            var e = navigator.userAgent.toLowerCase(),
                                t =
                                    /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.test(
                                        e
                                    ) ||
                                    /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.test(
                                        e
                                    ),
                                r = /(chrome)[ \/]([\w.]+)/.exec(e) || "",
                                a = {
                                    browser: r[5] || r[3] || r[1] || "",
                                    version: r[4] || r[2] || "0",
                                },
                                n = 0;
                            return (
                                a.browser && (n = parseInt(a.version, 10)),
                                {
                                    browser: a.browser,
                                    version: n,
                                    linux: /Linux/i.test(e),
                                    webKit: /AppleWebKit/i.test(e),
                                    gecko:
                                        /Gecko/i.test(e) && !/KHTML/i.test(e),
                                    trident: /Trident/i.test(e),
                                    presto: /Presto/i.test(e),
                                    mobile: /AppleWebKit.*Mobile.*/i.test(e),
                                    iOS: /Mac OS X[\s_\-\/](\d+[.\-_]\d+[.\-_]?\d*)/i.test(
                                        e
                                    ),
                                    iPhone: /iPhone/i.test(e),
                                    iPad:
                                        /iPad/i.test(e) ||
                                        ("MacIntel" === navigator.platform &&
                                            navigator.maxTouchPoints > 1),
                                    webApp: !/Safari/i.test(e),
                                    android: /Android/i.test(e),
                                    windowsPhone: /Windows Phone/i.test(e),
                                    microMessenger: /MicroMessenger/i.test(e),
                                    msie: /msie [\w.]+/i.test(e),
                                    edge: /edge/i.test(e),
                                    edgeBuild16299: /(\s|^)edge\/16.16299(\s|$)/i.test(
                                        e
                                    ),
                                    safari: t,
                                    safariSupportMSE:
                                        t && /Version\/1\d/i.test(e),
                                }
                            );
                        },
                    },
                },
                n = (function () {
                    function e(e) {
                        (this.prefix = ["", "-webkit-"]),
                            (this.endProgress = {}),
                            (this.xProportion = e.container.offsetWidth / 100),
                            (this.yProportion = e.container.offsetHeight / 100),
                            (this.container = e.container),
                            (this.dm = e.dm),
                            this.percentObj2Num(this.dm),
                            (this.defs = this.dm.defs),
                            (this.sets = this.dm.sets),
                            (this.startTime = e.startTime),
                            (this.player = e.player),
                            (this.animationEndCallback =
                                e.animationEndCallback),
                            this.init();
                    }
                    return (
                        (e.prototype.init = function () {
                            var e = this.itemsTemplate();
                            if (e) {
                                var t =
                                    (100 * this.xProportion) /
                                    2 /
                                    Math.tan((Math.PI / 180) * 27.5);
                                this.ele = a.string2DOM(
                                    '<div class="bas-danmaku-item-wrap" style="perspective:' +
                                        t +
                                        "px;-webkit-perspective:" +
                                        t +
                                        'px;">' +
                                        this.animationTemplate() +
                                        e +
                                        "</div>"
                                );
                                for (var r = 0; r < this.defs.length; r++) {
                                    var n = this.defs[r].name;
                                    (this.endProgress[n] = 0),
                                        this.transience(n);
                                }
                                this.bindEvents(this.ele);
                            }
                        }),
                        (e.prototype.animationCallback = function (e) {
                            var t = e.animationName.split("-")[2];
                            this.endProgress[t]
                                ? this.endProgress[t]++
                                : (this.endProgress[t] = 1),
                                this.transience(t),
                                this.animationEndCallback(this),
                                (this.endProgress[t] !==
                                    this.dm.def2set[t].length &&
                                    "duration" !==
                                        e.animationName.split("-")[3]) ||
                                    (e.target.parentNode.removeChild(e.target),
                                    0 ===
                                        this.ele.getElementsByClassName(
                                            "bas-danmaku-item"
                                        ).length &&
                                        this.container.removeChild(this.ele));
                        }),
                        (e.prototype.transience = function (e) {
                            var t = this.endProgress[e],
                                r = this.dm.def2set[e][t];
                            if (
                                r &&
                                r.valueEnd &&
                                (r.valueEnd.content &&
                                    (this.ele.querySelector(
                                        ".bas-danmaku-item--" +
                                            e +
                                            " .bas-danmaku-item-inner"
                                    ).innerHTML = r.valueEnd.content),
                                r.valueEnd.text &&
                                    (this.ele.querySelector(
                                        ".bas-danmaku-item--" +
                                            e +
                                            " .bas-danmaku-item-inner"
                                    ).innerHTML = r.valueEnd.text),
                                r.valueEnd.fontSize)
                            ) {
                                var a = r.valueEnd.fontSize;
                                a >= 12
                                    ? (this.ele.querySelector(
                                          ".bas-danmaku-item--" +
                                              e +
                                              " .bas-danmaku-item-inner"
                                      ).style.fontSize = a + "px")
                                    : ((this.ele.querySelector(
                                          ".bas-danmaku-item--" +
                                              e +
                                              " .bas-danmaku-item-inner"
                                      ).style.fontSize = "12px"),
                                      (this.ele.querySelector(
                                          ".bas-danmaku-item--" +
                                              e +
                                              " .bas-danmaku-item-inner"
                                      ).style.transform =
                                          "scale(" + a / 12 + ")"));
                            }
                        }),
                        (e.prototype.percentObj2Num = function (e) {
                            for (
                                var t = this,
                                    r = function (e) {
                                        for (var r in e)
                                            if (e.hasOwnProperty(r)) {
                                                var a = void 0;
                                                if (e[r].numType) a = e[r];
                                                else {
                                                    if (
                                                        !e[r].value ||
                                                        !e[r].value.numType
                                                    )
                                                        continue;
                                                    a = e[r].value;
                                                }
                                                if ("number" === a.numType)
                                                    switch (r) {
                                                        case "x":
                                                            a =
                                                                a.value /
                                                                t.xProportion;
                                                            break;
                                                        case "y":
                                                            a =
                                                                a.value /
                                                                t.yProportion;
                                                            break;
                                                        default:
                                                            a = a.value;
                                                    }
                                                else if (
                                                    "percent" === a.numType
                                                )
                                                    switch (r) {
                                                        case "fontSize":
                                                        case "width":
                                                            a =
                                                                a.value *
                                                                t.xProportion;
                                                            break;
                                                        case "height":
                                                            a =
                                                                a.value *
                                                                t.yProportion;
                                                            break;
                                                        default:
                                                            a = a.value;
                                                    }
                                                e[r].numType
                                                    ? (e[r] = a)
                                                    : e[r].value &&
                                                      e[r].value.numType &&
                                                      (e[r].value = a);
                                            }
                                    },
                                    a = 0;
                                a < e.defs.length;
                                a++
                            )
                                r(e.defs[a].attrs);
                            for (a = 0; a < e.sets.length; a++)
                                if (e.sets[a].items)
                                    for (
                                        var n = 0;
                                        n < e.sets[a].items.length;
                                        n++
                                    )
                                        r(e.sets[a].items[n].attrs);
                                else r(e.sets[a].attrs);
                            for (var i in e.def2set)
                                if ({}.hasOwnProperty.call(e.def2set, i))
                                    for (a = 0; a < e.def2set[i].length; a++)
                                        r(e.def2set[i][a].valueEnd),
                                            r(e.def2set[i][a].valueStart);
                        }),
                        (e.prototype.itemsTemplate = function () {
                            for (var e = "", t = 0; t < this.defs.length; t++)
                                this.defs[t].attrs.parent ||
                                    (e += this.itemsTemplateOne(this.defs[t]));
                            return e;
                        }),
                        (e.prototype.itemsTemplateOne = function (e, t, r) {
                            var n = this;
                            void 0 === t && (t = this.xProportion),
                                void 0 === r && (r = this.yProportion);
                            var i,
                                s = function (e, t) {
                                    for (var r = "", a = 0; a < e.length; a++)
                                        (r +=
                                            "duration" === t
                                                ? e[a][t] + "s"
                                                : "delay" === t
                                                ? e[a][t] - n.startTime + "s"
                                                : e[a][t]),
                                            a !== e.length - 1 && (r += ",");
                                    return r;
                                },
                                o = e.attrs,
                                l = this.dm.def2set[e.name],
                                u =
                                    "" +
                                    this.prefixCSS(
                                        "animation-name",
                                        s(l, "name")
                                    ) +
                                    this.prefixCSS(
                                        "animation-duration",
                                        s(l, "duration")
                                    ) +
                                    this.prefixCSS(
                                        "animation-timing-function",
                                        s(l, "easing")
                                    ) +
                                    this.prefixCSS(
                                        "animation-delay",
                                        s(l, "delay")
                                    );
                            for (var h in o)
                                o.hasOwnProperty(h) &&
                                    (u += this.getStyleOut(h, o[h]));
                            switch (e.type) {
                                case "DefText":
                                    var p = "";
                                    (o.rotateX || o.rotateY || o.rotateZ) &&
                                        (p =
                                            " rotateX(" +
                                            o.rotateX +
                                            "deg) rotateY(" +
                                            o.rotateY +
                                            "deg) rotateZ(" +
                                            o.rotateZ +
                                            "deg)"),
                                        (u +=
                                            "transform:translate(" +
                                            o.x * t +
                                            "px, " +
                                            o.y * r +
                                            "px)" +
                                            p +
                                            " scale(" +
                                            o.scale +
                                            ");"),
                                        (i = this.getStyleIn(o));
                                    var c = "";
                                    for (h = 0; h < this.defs.length; h++)
                                        this.defs[h].attrs.parent === e.name &&
                                            (this.defSize(e),
                                            (c += this.itemsTemplateOne(
                                                this.defs[h],
                                                e.attrs.width / 100,
                                                e.attrs.height / 100
                                            )));
                                    return (
                                        '<div class="bas-danmaku-item bas-danmaku-item-text bas-danmaku-item--' +
                                        e.name +
                                        '" style="' +
                                        u +
                                        '"><div class="bas-danmaku-item-inner" style="' +
                                        i +
                                        '">' +
                                        o.content +
                                        c +
                                        "</div></div>"
                                    );
                                case "DefButton":
                                    return (
                                        (u +=
                                            "transform:translate(" +
                                            o.x * t +
                                            "px, " +
                                            o.y * r +
                                            "px) scale(" +
                                            o.scale +
                                            ");color:" +
                                            a.rgbaFormat(
                                                o.textColor,
                                                o.textAlpha
                                            ) +
                                            ";background-color:" +
                                            a.rgbaFormat(
                                                o.fillColor,
                                                o.fillAlpha
                                            ) +
                                            ";"),
                                        (i = this.getStyleIn(o)),
                                        '<div class="bas-danmaku-item bas-danmaku-item-button bas-danmaku-item--' +
                                            e.name +
                                            '" style="' +
                                            u +
                                            '"><div class="bas-danmaku-item-inner" style="' +
                                            i +
                                            '">' +
                                            o.text +
                                            "</div></div>"
                                    );
                                case "DefPath":
                                    (u +=
                                        "transform:translate(" +
                                        o.x * t +
                                        "px, " +
                                        o.y * r +
                                        "px);"),
                                        (i = this.getStyleIn(o));
                                    var f = void 0;
                                    o.viewBox
                                        ? (f =
                                              o.width || o.height
                                                  ? 'viewBox="' +
                                                    o.viewBox +
                                                    '" ' +
                                                    (o.width
                                                        ? 'width="' +
                                                          o.width *
                                                              (o.scale || 1) +
                                                          '"'
                                                        : "") +
                                                    " " +
                                                    (o.height
                                                        ? 'height="' +
                                                          o.height *
                                                              (o.scale || 1) +
                                                          '"'
                                                        : "")
                                                  : 'viewBox="' +
                                                    o.viewBox +
                                                    '" width="' +
                                                    parseInt(
                                                        o.viewBox.split(" ")[2],
                                                        10
                                                    ) *
                                                        (o.scale || 1) +
                                                    '"')
                                        : o.scale &&
                                          (f =
                                              'style="transform:scale(' +
                                              o.scale +
                                              ');transform-origin: 0 0;overflow:visible;"');
                                    var d =
                                        'fill="' +
                                        a.rgbaFormat(o.fillColor, o.fillAlpha) +
                                        '" stroke="' +
                                        a.rgbaFormat(
                                            o.borderColor,
                                            o.borderAlpha
                                        ) +
                                        '" stroke-width="' +
                                        o.borderWidth +
                                        '" d="' +
                                        o.d +
                                        '"';
                                    return (
                                        '<div class="bas-danmaku-item bas-danmaku-item-path bas-danmaku-item--' +
                                        e.name +
                                        '" style="' +
                                        u +
                                        '"><div class="bas-danmaku-item-inner" style="' +
                                        i +
                                        '"><svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" ' +
                                        f +
                                        "><path " +
                                        d +
                                        "></svg></div></div>"
                                    );
                            }
                        }),
                        (e.prototype.findParent = function (e) {
                            for (var t = 0; t < this.defs.length; t++)
                                if (this.defs[t].name === e)
                                    return this.defs[t];
                            return null;
                        }),
                        (e.prototype.defSize = function (e) {
                            !e ||
                                (e.attrs.width && e.attrs.height) ||
                                (this.measureCanvas ||
                                    (this.measureCanvas = document
                                        .createElement("canvas")
                                        .getContext("2d")),
                                (this.measureCanvas.font =
                                    (e.attrs.bold ? "bold " : "") +
                                    " " +
                                    e.attrs.fontSize +
                                    "px " +
                                    e.attrs.fontFamily),
                                (e.attrs.width = this.measureCanvas.measureText(
                                    e.attrs.content
                                ).width),
                                (e.attrs.height = e.attrs.fontSize));
                        }),
                        (e.prototype.getStyleIn = function (e) {
                            var t = "",
                                r = "";
                            return (
                                e.strokeWidth &&
                                    e.strokeColor &&
                                    (t +=
                                        "-webkit-text-stroke:" +
                                        e.strokeWidth +
                                        "px " +
                                        a.colorFromInt(e.strokeColor) +
                                        ";"),
                                e.hasOwnProperty("fontFamily") &&
                                    (t +=
                                        "font-family:&quot;" +
                                        e.fontFamily
                                            .split(",")
                                            .join("&quot;,&quot;") +
                                        "&quot;,sans-serif;"),
                                e.hasOwnProperty("textShadow") &&
                                    (t +=
                                        "text-shadow:" +
                                        (e.textShadow
                                            ? "rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px"
                                            : "none") +
                                        ";"),
                                e.hasOwnProperty("bold") &&
                                    (t +=
                                        "font-weight:" +
                                        (e.bold ? "bold" : "normal") +
                                        ";"),
                                e.hasOwnProperty("fontSize") &&
                                    (e.fontSize >= 12
                                        ? (t +=
                                              "font-size:" + e.fontSize + "px;")
                                        : ((t += "font-size:12px;"),
                                          (r +=
                                              "scale(" +
                                              e.fontSize / 12 +
                                              ") "))),
                                e.hasOwnProperty("anchorX") &&
                                    e.hasOwnProperty("anchorY") &&
                                    (r +=
                                        "translate(" +
                                        100 * -e.anchorX +
                                        "%," +
                                        100 * -e.anchorY +
                                        "%)"),
                                r && (t += "transform:" + r + ";"),
                                t
                            );
                        }),
                        (e.prototype.getStyleOut = function (e, t) {
                            switch (e) {
                                case "alpha":
                                    return "opacity:" + t + ";";
                                case "color":
                                    return "color:" + a.colorFromInt(t) + ";";
                                case "zIndex":
                                    return "z-index:" + t + ";";
                                default:
                                    return "";
                            }
                        }),
                        (e.prototype.animationTemplate = function () {
                            for (var e = "", t = 0; t < this.defs.length; t++)
                                for (
                                    var r = this.dm.def2set[this.defs[t].name],
                                        a = 0;
                                    a < r.length;
                                    a++
                                )
                                    if (this.defs[t].attrs.parent) {
                                        var n = this.findParent(
                                            this.defs[t].attrs.parent
                                        );
                                        n &&
                                            (this.defSize(n),
                                            (e += this.keyframesTemplate(
                                                this.defs[t],
                                                r[a].name,
                                                r[a].valueStart,
                                                r[a].valueEnd,
                                                n.attrs.width / 100,
                                                n.attrs.height / 100
                                            )));
                                    } else
                                        e += this.keyframesTemplate(
                                            this.defs[t],
                                            r[a].name,
                                            r[a].valueStart,
                                            r[a].valueEnd
                                        );
                            return "<style>" + e + "</style>";
                        }),
                        (e.prototype.keyframesTemplate = function (
                            e,
                            t,
                            r,
                            a,
                            n,
                            i
                        ) {
                            void 0 === n && (n = this.xProportion),
                                void 0 === i && (i = this.yProportion);
                            var s = "",
                                o = "";
                            if (
                                (r &&
                                    (void 0 !== r.x ||
                                        void 0 !== r.y ||
                                        void 0 !== r.rotateX ||
                                        void 0 !== r.rotateY ||
                                        void 0 !== r.rotateZ ||
                                        void 0 !== r.scale)) ||
                                (a &&
                                    (void 0 !== a.x ||
                                        void 0 !== a.y ||
                                        void 0 !== a.rotateX ||
                                        void 0 !== a.rotateY ||
                                        void 0 !== a.rotateZ ||
                                        void 0 !== a.scale))
                            ) {
                                var l = function (t) {
                                        return a && void 0 !== a[t]
                                            ? a[t]
                                            : r && void 0 !== r[t]
                                            ? r[t]
                                            : e.attrs[t]
                                            ? e.attrs[t]
                                            : 0;
                                    },
                                    u = l("x") * n,
                                    h = l("y") * i,
                                    p = l("rotateX"),
                                    c = l("rotateY"),
                                    f = l("rotateZ"),
                                    d = "DefPath" === e.type ? 1 : l("scale"),
                                    b = function (t) {
                                        return r && void 0 !== r[t]
                                            ? r[t]
                                            : void 0 !== e.attrs[t]
                                            ? e.attrs[t]
                                            : 0;
                                    },
                                    m = b("x") * n,
                                    v = b("y") * i,
                                    y = b("rotateX"),
                                    g = b("rotateY"),
                                    _ = b("rotateZ"),
                                    k = "DefPath" === e.type ? 1 : b("scale");
                                switch (e.type) {
                                    case "DefText":
                                        (s +=
                                            "transform:translate(" +
                                            m +
                                            "px, " +
                                            v +
                                            "px) rotateX(" +
                                            y +
                                            "deg) rotateY(" +
                                            g +
                                            "deg) rotateZ(" +
                                            _ +
                                            "deg) scale(" +
                                            k +
                                            ");"),
                                            (o +=
                                                "transform:translate(" +
                                                u +
                                                "px, " +
                                                h +
                                                "px) rotateX(" +
                                                p +
                                                "deg) rotateY(" +
                                                c +
                                                "deg) rotateZ(" +
                                                f +
                                                "deg) scale(" +
                                                d +
                                                ");");
                                        break;
                                    case "DefButton":
                                    case "DefPath":
                                        (s +=
                                            "transform:translate(" +
                                            m +
                                            "px, " +
                                            v +
                                            "px);"),
                                            (o +=
                                                "transform:translate(" +
                                                u +
                                                "px, " +
                                                h +
                                                "px);");
                                }
                            }
                            for (var w in r)
                                r.hasOwnProperty(w) &&
                                    (s += this.getStyleOut(w, r[w]));
                            for (var w in a)
                                a.hasOwnProperty(w) &&
                                    (o += this.getStyleOut(w, a[w]));
                            return (
                                o || (o = "line-height:1;"),
                                s
                                    ? "\n@-webkit-keyframes " +
                                      t +
                                      " {\n    0% { " +
                                      s +
                                      " }\n    100% { " +
                                      o +
                                      " }\n}\n@keyframes " +
                                      t +
                                      " {\n    0% { " +
                                      s +
                                      " }\n    100% { " +
                                      o +
                                      " }\n}"
                                    : "\n@-webkit-keyframes " +
                                      t +
                                      " {\n    100% { " +
                                      o +
                                      " }\n}\n@keyframes " +
                                      t +
                                      " {\n    100% { " +
                                      o +
                                      " }\n}"
                            );
                        }),
                        (e.prototype.prefixCSS = function (e, t) {
                            for (var r = "", a = 0; a < this.prefix.length; a++)
                                r += "" + this.prefix[a] + e + ":" + t + ";";
                            return r;
                        }),
                        (e.prototype.bindEvents = function (e) {
                            var t = this;
                            e.addEventListener("animationend", function (e) {
                                return t.animationCallback(e);
                            }),
                                e.addEventListener(
                                    "webkitAnimationEnd",
                                    function (e) {
                                        return t.animationCallback(e);
                                    }
                                );
                            for (
                                var r = function (r) {
                                        a.defs[r].attrs.target &&
                                            e
                                                .getElementsByClassName(
                                                    "bas-danmaku-item--" +
                                                        a.defs[r].name
                                                )[0]
                                                .addEventListener(
                                                    "click",
                                                    function () {
                                                        "av" ===
                                                        t.defs[r].attrs.target
                                                            .objType
                                                            ? (window.open(
                                                                  "//www.bilibili.com/video/" +
                                                                      (t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .bvid
                                                                          ? t
                                                                                .defs[
                                                                                r
                                                                            ]
                                                                                .attrs
                                                                                .target
                                                                                .bvid
                                                                          : "av" +
                                                                            t
                                                                                .defs[
                                                                                r
                                                                            ]
                                                                                .attrs
                                                                                .target
                                                                                .av) +
                                                                      "/?p=" +
                                                                      (t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .page ||
                                                                          "1") +
                                                                      (t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .time
                                                                          ? "&t=" +
                                                                            t
                                                                                .defs[
                                                                                r
                                                                            ]
                                                                                .attrs
                                                                                .target
                                                                                .time /
                                                                                1e3
                                                                          : "")
                                                              ),
                                                              t.player &&
                                                                  t.player.pause())
                                                            : "bangumi" ===
                                                              t.defs[r].attrs
                                                                  .target
                                                                  .objType
                                                            ? (window.open(
                                                                  "//www.bilibili.com/bangumi/play/ss" +
                                                                      t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .seasonId +
                                                                      (t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .time
                                                                          ? "?t=" +
                                                                            t
                                                                                .defs[
                                                                                r
                                                                            ]
                                                                                .attrs
                                                                                .target
                                                                                .time /
                                                                                1e3
                                                                          : "") +
                                                                      "#" +
                                                                      t.defs[r]
                                                                          .attrs
                                                                          .target
                                                                          .episodeId
                                                              ),
                                                              t.player &&
                                                                  t.player.pause())
                                                            : "seek" ===
                                                                  t.defs[r]
                                                                      .attrs
                                                                      .target
                                                                      .objType &&
                                                              t.player &&
                                                              t.player.seek(
                                                                  t.defs[r]
                                                                      .attrs
                                                                      .target
                                                                      .time /
                                                                      1e3
                                                              );
                                                    }
                                                );
                                    },
                                    a = this,
                                    n = 0;
                                n < this.defs.length;
                                n++
                            )
                                r(n);
                        }),
                        (e.prototype.destroy = function () {}),
                        e
                    );
                })(),
                i = function (e, t) {
                    var r = {};
                    for (var a in e) e.hasOwnProperty(a) && (r[a] = e[a]);
                    for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
                    return r;
                },
                s = function (e, t, r) {
                    return (
                        r ||
                            (e = e
                                .replace(/&/g, "")
                                .replace(/</g, "")
                                .replace(/>/g, "")
                                .replace(/"/g, "")
                                .replace(/'/g, "")
                                .replace(/\//g, "")
                                .replace(/:/g, "")
                                .replace(/;/g, "")),
                        e
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#x27;")
                            .replace(/\//g, "&#x2f;")
                            .replace(/ /g, t ? " " : "&nbsp;")
                            .replace(/\n/g, "<br>")
                    );
                };
            function o(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                    r = 0;
                return t
                    ? t.call(e)
                    : {
                          next: function () {
                              return (
                                  e && r >= e.length && (e = void 0),
                                  { value: e && e[r++], done: !e }
                              );
                          },
                      };
            }
            function l(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var a,
                    n,
                    i = r.call(e),
                    s = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(a = i.next()).done; )
                        s.push(a.value);
                } catch (e) {
                    n = { error: e };
                } finally {
                    try {
                        a && !a.done && (r = i.return) && r.call(i);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return s;
            }
            var u = (function () {
                    function e() {
                        (this.class_names = ["text", "button", "path"]),
                            (this.variableTable = {}),
                            (this.varibaleRegOrder = 0),
                            (this.templateTable = {}),
                            (this.tpl_name_id = 0),
                            (this.obj_name_id = 0),
                            (this.allowsVariable = []);
                    }
                    return (
                        (e.prototype.on_String_value = function (e) {
                            var t,
                                r,
                                a = [];
                            try {
                                for (
                                    var n = o(e), i = n.next();
                                    !i.done;
                                    i = n.next()
                                ) {
                                    var s = i.value;
                                    switch (s.type) {
                                        case "char":
                                            var l = null;
                                            switch (s.value.charAt(1)) {
                                                case "n":
                                                    l = "\n";
                                                    break;
                                                case "r":
                                                    l = "\r";
                                                    break;
                                                case "t":
                                                    l = "\t";
                                                    break;
                                                case "\\":
                                                    l = "\\";
                                                    break;
                                                case "'":
                                                    l = "'";
                                                    break;
                                                case '"':
                                                    l = '"';
                                                    break;
                                                default:
                                                    l = s.charAt(1);
                                            }
                                            a.push(l);
                                            break;
                                        case "unicode":
                                        case "ascii":
                                            var u = s.value.substr(2);
                                            a.push(
                                                String.fromCharCode(
                                                    parseInt(u, 16)
                                                )
                                            );
                                            break;
                                        case "seg":
                                            a.push(s.value);
                                    }
                                }
                            } catch (e) {
                                t = { error: e };
                            } finally {
                                try {
                                    i && !i.done && (r = n.return) && r.call(n);
                                } finally {
                                    if (t) throw t.error;
                                }
                            }
                            return new h({ type: "String", value: a.join("") });
                        }),
                        (e.prototype.on_Num_value = function (e, t, r) {
                            return (
                                (t = t),
                                new h({
                                    type: "Num",
                                    value: {
                                        numType: (r = "%" === r)
                                            ? "percent"
                                            : "number",
                                        value:
                                            (e = "+" === e ? 1 : -1) *
                                            parseFloat(t),
                                    },
                                })
                            );
                        }),
                        (e.prototype.on_Time_value = function (e) {
                            for (
                                var t = !0, r = 0, a = 0, n = "", i = null;
                                null !=
                                (i = t
                                    ? e.match(
                                          /^(\d*\.?\d+(?:[eE][\+\-]?\d+)?)(.*)$/
                                      )
                                    : e.match(/^([hms]+)(.*)$/));

                            ) {
                                if (((n = i[1]), t)) a = parseFloat(n);
                                else
                                    switch (n) {
                                        case "h":
                                            r += 3600 * a * 1e3;
                                            break;
                                        case "m":
                                            r += 60 * a * 1e3;
                                            break;
                                        case "s":
                                            r += 1e3 * a;
                                            break;
                                        case "ms":
                                            r += a;
                                    }
                                (e = i[2]), (t = !t);
                            }
                            return new h({ type: "Time", value: r });
                        }),
                        (e.prototype.on_Hex_value = function (e) {
                            return new h({
                                type: "Hex",
                                value: parseInt(e.substr(2), 16),
                            });
                        }),
                        (e.prototype.on_Object_value = function (e, t) {
                            return new h({ type: "Object", value: t });
                        }),
                        (e.prototype.on_Array_value = function (e) {
                            return new h({ type: "Array", value: e });
                        }),
                        (e.prototype.on_Variable_value = function (e) {
                            return new h({ type: "Variable", value: e });
                        }),
                        (e.prototype.on_KeyValue_list = function (e, t, r) {
                            return (
                                void 0 === r && (r = null),
                                null == r && (r = this.peek_allows_varable()),
                                t
                            );
                        }),
                        (e.prototype.on_let_object_binding = function (e, t) {
                            t.obj_type;
                            var r = t.name;
                            return (
                                this.unregister_variable(r),
                                (t.name = e),
                                this.register_variable(e, t),
                                t
                            );
                        }),
                        (e.prototype.on_def_object = function (e, t, r) {
                            var a = {
                                    type: "Def" + this.capitalization_str(e),
                                    obj_type: e,
                                    name: t,
                                    attrs: {},
                                },
                                n = this.on_KeyValue_list(e, r, !1);
                            return (
                                this.fill_kv_obj(a.attrs, n),
                                this.register_variable(t, a),
                                a
                            );
                        }),
                        (e.prototype.on_def_template = function (e, t, r, a) {
                            var n = {
                                    type: "template",
                                    obj_type: e,
                                    name: t,
                                    attrs: {},
                                    tpl_list: [],
                                },
                                i = this.on_KeyValue_list(e, a, !0);
                            return (
                                this.check_variables_on_template_body(r, i),
                                this.fill_kv_obj(n.attrs, a),
                                (n.tpl_list = r),
                                this.register_template(t, n),
                                n
                            );
                        }),
                        (e.prototype.on_object_modification = function (e, t) {
                            if (!this.has_variable_obj(e)) {
                                if (-1 !== this.class_names.indexOf(e)) {
                                    var r = this.new_variable_name_of_template_application(
                                        e
                                    );
                                    return this.on_def_object(e, r, t);
                                }
                                return null;
                            }
                            var a = this.get_variable_obj(e),
                                n = a.obj_type,
                                i = this.new_variable_name_of_variable_modification(
                                    e
                                ),
                                s = {
                                    type: "Def" + this.capitalization_str(n),
                                    obj_type: n,
                                    name: i,
                                    attrs: {},
                                },
                                o = this.on_KeyValue_list(n, t, !1),
                                l = this.merge_list(a.attrs, o);
                            return (
                                this.fill_kv_obj(s.attrs, l),
                                this.register_variable(i, s),
                                s
                            );
                        }),
                        (e.prototype.on_tmp_object_modification = function (
                            e,
                            t
                        ) {
                            var r = e.name,
                                a = this.on_object_modification(r, t);
                            return this.unregister_variable(r), a;
                        }),
                        (e.prototype.on_template_application = function (e, t) {
                            var r = this.get_template_obj(e);
                            if (null == r) return null;
                            var a = r.obj_type,
                                n = this.new_variable_name_of_template_application(
                                    e
                                ),
                                i = {
                                    type: "Def" + this.capitalization_str(a),
                                    obj_type: a,
                                    name: n,
                                    attrs: {},
                                },
                                s = this.evaluation_template(
                                    r.attrs,
                                    r.tpl_list,
                                    t
                                );
                            return (
                                this.fill_kv_obj(i.attrs, s),
                                this.register_variable(n, i),
                                i
                            );
                        }),
                        (e.prototype.on_ArgList = function (e) {
                            var t,
                                r,
                                a = [],
                                n = [];
                            try {
                                for (
                                    var i = o(e), s = i.next();
                                    !s.done;
                                    s = i.next()
                                ) {
                                    var u = l(s.value, 2),
                                        h = u[0],
                                        p = u[1];
                                    null == h ? a.push(p) : n.push([h, p]);
                                }
                            } catch (e) {
                                t = { error: e };
                            } finally {
                                try {
                                    s && !s.done && (r = i.return) && r.call(i);
                                } finally {
                                    if (t) throw t.error;
                                }
                            }
                            return { naked_params: a, named_params: n };
                        }),
                        (e.prototype.on_unit_set_expr = function (e, t, r) {
                            var a = l(r, 2),
                                n = {
                                    type: "Unit",
                                    duration: a[0],
                                    default_easing: a[1],
                                    target_name: e,
                                    attrs: {},
                                },
                                i = this.get_variable_type(e),
                                s = this.on_KeyValue_list(i, t, !1);
                            return this.fill_kv_obj(n.attrs, s), n;
                        }),
                        (e.prototype.on_temporary_target_set_expr = function (
                            e,
                            t,
                            r
                        ) {
                            var a = e.obj_type,
                                n = e.name,
                                i = l(r, 2),
                                s = {
                                    type: "Unit",
                                    duration: i[0],
                                    default_easing: i[1],
                                    target_name: n,
                                    attrs: {},
                                },
                                o = this.on_KeyValue_list(a, t, !1);
                            return this.fill_kv_obj(s.attrs, o), s;
                        }),
                        (e.prototype.on_then_set_expr = function (e, t) {
                            return "Serial" === e.type
                                ? (e.items.push(t), e)
                                : { type: "Serial", items: [e, t] };
                        }),
                        (e.prototype.on_group_set_expr = function (e) {
                            return { type: "Parallel", items: e };
                        }),
                        (e.prototype.has_variable_obj = function (e) {
                            return this.variableTable.hasOwnProperty(e);
                        }),
                        (e.prototype.get_variable_obj = function (e) {
                            return this.variableTable.hasOwnProperty(e)
                                ? this.variableTable[e]
                                : (console.error(
                                      "var " + e + " is not defined."
                                  ),
                                  null);
                        }),
                        (e.prototype.get_template_obj = function (e) {
                            return this.templateTable.hasOwnProperty(e)
                                ? this.templateTable[e]
                                : (console.error(
                                      "tpl " + e + " is not defined."
                                  ),
                                  null);
                        }),
                        (e.prototype.get_variable_type = function (e) {
                            return this.get_variable_obj(e).obj_type;
                        }),
                        (e.prototype.get_template_type = function (e) {
                            return this.get_template_obj(e).obj_type;
                        }),
                        (e.prototype.fill_kv_obj = function (e, t) {
                            var r, a;
                            try {
                                for (
                                    var n = o(t), i = n.next();
                                    !i.done;
                                    i = n.next()
                                ) {
                                    var s = l(i.value, 2),
                                        u = s[0],
                                        h = s[1];
                                    e[u] = h;
                                }
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    i && !i.done && (a = n.return) && a.call(n);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                        }),
                        (e.prototype.merge_list = function (e, t) {
                            var r,
                                a,
                                n = {};
                            this.fill_kv_obj(n, t);
                            var i = [];
                            for (var s in e)
                                n.hasOwnProperty(s)
                                    ? i.push([s, n[s]])
                                    : i.push([s, e[s]]);
                            try {
                                for (
                                    var u = o(t), h = u.next();
                                    !h.done;
                                    h = u.next()
                                ) {
                                    var p = l(h.value, 2),
                                        c = ((s = p[0]), p[1]);
                                    e.hasOwnProperty(s) || i.push([s, c]);
                                }
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    h && !h.done && (a = u.return) && a.call(u);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return i;
                        }),
                        (e.prototype.evaluation_template = function (e, t, r) {
                            var a,
                                n,
                                i,
                                s,
                                u = r.naked_params,
                                h = r.named_params,
                                p = {},
                                c = t.map(function (e, t) {
                                    var r = l(e, 2),
                                        a = r[0];
                                    r[1];
                                    return (p[a] = t), { key: a, matched: !1 };
                                }),
                                f = {};
                            try {
                                for (
                                    var d = o(h), b = d.next();
                                    !b.done;
                                    b = d.next()
                                ) {
                                    var m = l(b.value, 2),
                                        v = m[0],
                                        y = m[1];
                                    (f[v] = y),
                                        p.hasOwnProperty(v)
                                            ? (c[p[v]].matched = !0)
                                            : console.error(
                                                  "看看命名参数是不是没有在定义参数里面.."
                                              );
                                }
                            } catch (e) {
                                a = { error: e };
                            } finally {
                                try {
                                    b && !b.done && (n = d.return) && n.call(d);
                                } finally {
                                    if (a) throw a.error;
                                }
                            }
                            var g = c.filter(function (e) {
                                return !e.matched;
                            });
                            g.length < u.length &&
                                console.error("参数太多了..");
                            for (var _ = 0; _ < u.length && _ < g.length; _++) {
                                f[(v = g[_].key)] = u[_];
                            }
                            var k = {};
                            try {
                                for (
                                    var w = o(t), x = w.next();
                                    !x.done;
                                    x = w.next()
                                ) {
                                    var T = l(x.value, 2);
                                    (v = T[0]), (y = T[1]);
                                    f.hasOwnProperty(v)
                                        ? (k[v] = f[v])
                                        : (k[v] = y);
                                }
                            } catch (e) {
                                i = { error: e };
                            } finally {
                                try {
                                    x && !x.done && (s = w.return) && s.call(w);
                                } finally {
                                    if (i) throw i.error;
                                }
                            }
                            var S = [];
                            for (var v in e) {
                                var j = e[v];
                                if ("Variable" === j.type) {
                                    var O = j.value;
                                    k.hasOwnProperty(O)
                                        ? S.push([v, k[O]])
                                        : console.error(
                                              "eval template err: no variable named " +
                                                  O +
                                                  " is provided."
                                          );
                                } else S.push([v, j]);
                            }
                            return S;
                        }),
                        (e.prototype.capitalization_str = function (e) {
                            return e.substr(0, 1).toUpperCase() + e.substr(1);
                        }),
                        (e.prototype.new_variable_name_of_template_application = function (
                            e
                        ) {
                            var t = "tpl_" + e + "_" + this.tpl_name_id;
                            return (this.tpl_name_id += 1), t;
                        }),
                        (e.prototype.new_variable_name_of_variable_modification = function (
                            e
                        ) {
                            var t = "obj_" + e + "_" + this.obj_name_id;
                            return (this.obj_name_id += 1), t;
                        }),
                        (e.prototype.register_variable = function (e, t) {
                            this.variableTable.hasOwnProperty(e) &&
                                console.log(
                                    "var " +
                                        e +
                                        " is already exists, and will be shadowed."
                                ),
                                (t._reg_order = this.varibaleRegOrder),
                                (this.variableTable[e] = t),
                                (this.varibaleRegOrder += 1);
                        }),
                        (e.prototype.unregister_variable = function (e) {
                            delete this.variableTable[e];
                        }),
                        (e.prototype.register_template = function (e, t) {
                            this.templateTable.hasOwnProperty(e) &&
                                console.log(
                                    "tpl " +
                                        e +
                                        " is already exists, and will be shadowed."
                                ),
                                (this.templateTable[e] = t);
                        }),
                        (e.prototype.on_enter_scope = function () {}),
                        (e.prototype.on_leave_scope = function () {}),
                        (e.prototype.on_enter_tpl = function () {
                            this.allowsVariable.push(!0);
                        }),
                        (e.prototype.on_leave_tpl = function () {
                            this.allowsVariable.pop();
                        }),
                        (e.prototype.peek_allows_varable = function () {
                            return (
                                this.allowsVariable.length > 0 &&
                                this.allowsVariable[
                                    this.allowsVariable.length - 1
                                ]
                            );
                        }),
                        (e.prototype.check_variables_on_template_body = function (
                            e,
                            t
                        ) {
                            var r,
                                a,
                                n = {};
                            this.fill_kv_obj(n, t);
                            try {
                                for (
                                    var i = o(e), s = i.next();
                                    !s.done;
                                    s = i.next()
                                ) {
                                    var u = l(s.value, 2),
                                        h = (u[0], u[1]);
                                    if ("Variable" === h.type) {
                                        var p = h.value;
                                        n.hasOwnProperty(p) ||
                                            console.error(
                                                "varibale " +
                                                    p +
                                                    " in template's body is not present at arguments."
                                            );
                                    }
                                }
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    s && !s.done && (a = i.return) && a.call(i);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                        }),
                        (e.prototype.on_Result = function (e) {
                            var t = [];
                            for (var r in this.variableTable)
                                t.push(this.variableTable[r]);
                            return (
                                t.sort(function (e, t) {
                                    return e.obj_name_id - t.obj_name_id;
                                }),
                                {
                                    sets: e
                                        .filter(function (e) {
                                            return "SetExpr" === e.type;
                                        })
                                        .map(function (e) {
                                            return e.params;
                                        }),
                                    defs: t,
                                }
                            );
                        }),
                        e
                    );
                })(),
                h = (function () {
                    function e(e) {
                        (this.type = e.type), (this.value = e.value);
                    }
                    return (
                        (e.prototype.as_string = function () {
                            if ("String" === this.type) return this.value;
                        }),
                        (e.prototype.as_integer = function () {
                            return "Hex" === this.type
                                ? this.value
                                : "Num" === this.type
                                ? Math.floor(this.value.value)
                                : void 0;
                        }),
                        (e.prototype.as_number = function () {
                            if ("Num" === this.type) return this.value;
                        }),
                        (e.prototype.as_time = function () {
                            if ("Time" === this.type) return this.value;
                        }),
                        (e.prototype.as_object = function () {
                            if ("Object" === this.type) return this.value;
                        }),
                        e
                    );
                })(),
                p = (function () {
                    function e() {
                        (this.transTable = [
                            [
                                !1,
                                [4294967295, 2, 1],
                                [
                                    [0, 42, 0],
                                    [43, 43, 1],
                                    [44, 44, 2],
                                ],
                            ],
                            [
                                !1,
                                [
                                    4294967295,
                                    27,
                                    26,
                                    25,
                                    24,
                                    23,
                                    22,
                                    21,
                                    20,
                                    19,
                                    18,
                                    17,
                                    16,
                                    15,
                                    14,
                                    13,
                                    12,
                                    11,
                                    10,
                                    9,
                                    8,
                                    7,
                                    6,
                                    5,
                                    4,
                                    3,
                                ],
                                [
                                    [0, 2, 0],
                                    [3, 3, 1],
                                    [4, 4, 2],
                                    [5, 5, 3],
                                    [6, 6, 4],
                                    [7, 7, 5],
                                    [8, 8, 6],
                                    [9, 9, 7],
                                    [10, 10, 8],
                                    [11, 11, 9],
                                    [12, 12, 10],
                                    [13, 13, 11],
                                    [14, 14, 12],
                                    [15, 15, 13],
                                    [16, 16, 14],
                                    [17, 17, 15],
                                    [18, 18, 16],
                                    [19, 19, 17],
                                    [20, 20, 18],
                                    [21, 21, 19],
                                    [22, 22, 20],
                                    [23, 37, 21],
                                    [38, 38, 22],
                                    [39, 39, 23],
                                    [40, 41, 24],
                                    [42, 42, 25],
                                    [43, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [30, 28, 29, 4294967295],
                                [
                                    [0, 0, 0],
                                    [1, 20, 1],
                                    [21, 21, 2],
                                    [22, 39, 1],
                                    [40, 40, 3],
                                    [41, 42, 1],
                                    [43, 44, 3],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 31],
                                [
                                    [0, 41, 0],
                                    [42, 42, 1],
                                    [43, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 4],
                                [
                                    [0, 39, 0],
                                    [40, 41, 1],
                                    [42, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 14, 37, 36, 35, 34, 33, 32],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 31, 0],
                                    [32, 32, 3],
                                    [33, 34, 4],
                                    [35, 35, 5],
                                    [36, 37, 6],
                                    [38, 38, 7],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 38],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [
                                !1,
                                [4294967295, 7, 39],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 35, 1],
                                    [36, 36, 2],
                                    [37, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 40],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 35, 1],
                                    [36, 36, 2],
                                    [37, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 14, 37, 36, 34, 33, 32],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 31, 0],
                                    [32, 32, 3],
                                    [33, 34, 0],
                                    [35, 35, 4],
                                    [36, 37, 5],
                                    [38, 38, 6],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 41],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 31, 1],
                                    [32, 32, 2],
                                    [33, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 42],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 35, 1],
                                    [36, 36, 2],
                                    [37, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [
                                !1,
                                [4294967295, 7, 43],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 30, 1],
                                    [31, 31, 2],
                                    [32, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 44],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 16, 1],
                                    [17, 17, 2],
                                    [18, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [!0],
                            [
                                !1,
                                [45, 4294967295, 47, 46],
                                [
                                    [0, 0, 0],
                                    [1, 1, 1],
                                    [2, 2, 0],
                                    [3, 14, 1],
                                    [15, 15, 0],
                                    [16, 20, 1],
                                    [21, 21, 0],
                                    [22, 27, 1],
                                    [28, 28, 2],
                                    [29, 30, 0],
                                    [31, 33, 1],
                                    [34, 34, 3],
                                    [35, 44, 1],
                                ],
                            ],
                            [
                                !1,
                                [31, 48, 4294967295],
                                [
                                    [0, 39, 0],
                                    [40, 40, 1],
                                    [41, 42, 0],
                                    [43, 44, 2],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 38],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 49, 50],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 19, 0],
                                    [20, 20, 2],
                                    [21, 21, 0],
                                    [22, 22, 2],
                                    [23, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 51, 53, 52],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 37, 0],
                                    [38, 38, 3],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 54],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 55, 56],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 37, 0],
                                    [38, 38, 2],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 57, 58],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 37, 0],
                                    [38, 38, 2],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 38, 37, 36, 34, 33],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 31, 0],
                                    [32, 32, 3],
                                    [33, 34, 0],
                                    [35, 35, 4],
                                    [36, 37, 5],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 59],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 2],
                                    [16, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 60],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 2],
                                    [16, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 61],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 35, 1],
                                    [36, 36, 2],
                                    [37, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 62],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 26, 1],
                                    [27, 27, 2],
                                    [28, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 63],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 30, 1],
                                    [31, 31, 2],
                                    [32, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 64],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 24, 1],
                                    [25, 25, 2],
                                    [26, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [
                                !1,
                                [4294967295, 65],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 66],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 48],
                                [
                                    [0, 39, 0],
                                    [40, 40, 1],
                                    [41, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 49, 37, 36, 34],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 31, 0],
                                    [32, 32, 3],
                                    [33, 34, 0],
                                    [35, 35, 4],
                                    [36, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 49],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 51, 37, 68, 67, 52],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 37, 4],
                                    [38, 38, 5],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 69],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [
                                !1,
                                [4294967295, 54],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 55, 37, 34, 70, 56],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 37, 4],
                                    [38, 38, 5],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 71],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 57, 68, 72, 58],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 34, 0],
                                    [35, 35, 2],
                                    [36, 37, 3],
                                    [38, 38, 4],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 73],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 74],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 29, 1],
                                    [30, 30, 2],
                                    [31, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 75],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 16, 1],
                                    [17, 17, 2],
                                    [18, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 76],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 29, 1],
                                    [30, 30, 2],
                                    [31, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 77],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 78],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 79, 80],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 19, 0],
                                    [20, 20, 2],
                                    [21, 21, 0],
                                    [22, 22, 2],
                                    [23, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 53],
                                [
                                    [0, 17, 0],
                                    [18, 18, 1],
                                    [19, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 69, 37, 68, 67],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 37, 4],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 81, 82],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 19, 0],
                                    [20, 20, 2],
                                    [21, 21, 0],
                                    [22, 22, 2],
                                    [23, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 71, 37, 34, 70],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 37, 4],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 83, 84],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 19, 0],
                                    [20, 20, 2],
                                    [21, 21, 0],
                                    [22, 22, 2],
                                    [23, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 73, 68, 72],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 34, 0],
                                    [35, 35, 2],
                                    [36, 37, 3],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 85],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 23, 1],
                                    [24, 24, 2],
                                    [25, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7, 86],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 35, 1],
                                    [36, 36, 2],
                                    [37, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                            [
                                !1,
                                [4294967295, 87],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 79, 37, 68],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 79],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 81, 37, 34],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 17, 0],
                                    [18, 18, 2],
                                    [19, 34, 0],
                                    [35, 35, 3],
                                    [36, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 81],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 83, 68],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 34, 0],
                                    [35, 35, 2],
                                    [36, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 83],
                                [
                                    [0, 15, 0],
                                    [16, 16, 1],
                                    [17, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 7],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 18, 1],
                                    [19, 22, 0],
                                    [23, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [
                                !1,
                                [4294967295, 88],
                                [
                                    [0, 6, 0],
                                    [7, 8, 1],
                                    [9, 13, 0],
                                    [14, 14, 1],
                                    [15, 15, 0],
                                    [16, 16, 1],
                                    [17, 25, 0],
                                    [26, 27, 1],
                                    [28, 35, 0],
                                    [36, 37, 1],
                                    [38, 38, 0],
                                    [39, 39, 1],
                                    [40, 44, 0],
                                ],
                            ],
                            [!0],
                        ]),
                            (this.finalTable = {
                                4: 1,
                                5: 3,
                                6: 26,
                                7: 30,
                                8: 5,
                                9: 7,
                                10: 6,
                                11: 27,
                                12: 30,
                                13: 30,
                                14: 3,
                                15: 30,
                                16: 30,
                                17: 19,
                                18: 22,
                                19: 23,
                                20: 29,
                                21: 20,
                                22: 30,
                                23: 30,
                                24: 24,
                                25: 28,
                                26: 21,
                                27: 25,
                                28: 12,
                                29: 11,
                                31: 0,
                                34: 2,
                                36: 2,
                                37: 2,
                                38: 3,
                                39: 30,
                                40: 30,
                                41: 30,
                                42: 30,
                                43: 30,
                                44: 30,
                                45: 8,
                                48: 0,
                                49: 3,
                                53: 2,
                                54: 4,
                                59: 13,
                                60: 14,
                                61: 30,
                                62: 15,
                                63: 30,
                                64: 30,
                                74: 18,
                                75: 30,
                                76: 30,
                                77: 10,
                                85: 16,
                                86: 17,
                                88: 9,
                            }),
                            (this.inputTable = [
                                [0, 8, 1],
                                [9, 9, 41],
                                [10, 10, 40],
                                [11, 11, 1],
                                [12, 12, 41],
                                [13, 13, 40],
                                [14, 31, 1],
                                [32, 32, 41],
                                [33, 33, 1],
                                [34, 34, 21],
                                [35, 35, 1],
                                [36, 36, 23],
                                [37, 37, 10],
                                [38, 38, 1],
                                [39, 39, 2],
                                [40, 40, 9],
                                [41, 41, 4],
                                [42, 42, 1],
                                [43, 43, 22],
                                [44, 44, 19],
                                [45, 45, 20],
                                [46, 46, 38],
                                [47, 47, 42],
                                [48, 48, 39],
                                [49, 57, 16],
                                [58, 58, 1],
                                [59, 59, 5],
                                [60, 60, 1],
                                [61, 61, 13],
                                [62, 63, 1],
                                [64, 64, 23],
                                [65, 68, 26],
                                [69, 69, 37],
                                [70, 70, 26],
                                [71, 87, 23],
                                [88, 88, 33],
                                [89, 90, 23],
                                [91, 91, 12],
                                [92, 92, 0],
                                [93, 93, 11],
                                [94, 94, 1],
                                [95, 95, 23],
                                [96, 96, 1],
                                [97, 97, 8],
                                [98, 98, 26],
                                [99, 99, 7],
                                [100, 100, 14],
                                [101, 101, 36],
                                [102, 102, 27],
                                [103, 103, 23],
                                [104, 104, 32],
                                [105, 107, 23],
                                [108, 108, 17],
                                [109, 109, 35],
                                [110, 110, 30],
                                [111, 111, 25],
                                [112, 112, 31],
                                [113, 113, 23],
                                [114, 114, 29],
                                [115, 115, 18],
                                [116, 116, 15],
                                [117, 117, 28],
                                [118, 119, 23],
                                [120, 120, 34],
                                [121, 121, 24],
                                [122, 122, 23],
                                [123, 123, 6],
                                [124, 124, 1],
                                [125, 125, 3],
                                [126, 65535, 1],
                            ]),
                            (this.initialTable = { STRING: 1, INITIAL: 2 });
                    }
                    return (
                        (e.lexSeq = function (t) {
                            var r = new e();
                            r.source = t;
                            for (var a = [], n = r.token; "<$>" !== n; )
                                a.push({
                                    token: n,
                                    text: r.yytext,
                                    start: r.startIdx,
                                    end: r.endIdx,
                                }),
                                    r.advance(),
                                    (n = r.token);
                            return a;
                        }),
                        (e.prototype.yyrestart = function (e) {
                            void 0 === e && (e = null),
                                null != e && (this.sourceString = e),
                                (this.ended = !1),
                                (this.start = 0),
                                (this.oldStart = 0),
                                (this.line = 1),
                                (this.col = 0),
                                (this.advanced = !0),
                                (this.tokenNameString = null),
                                (this.yyObject = {}),
                                (this.initialState = "INITIAL");
                        }),
                        Object.defineProperty(e.prototype, "source", {
                            set: function (e) {
                                (this.sourceString = e), this.yyrestart();
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "token", {
                            get: function () {
                                return (
                                    this.advanced &&
                                        ((this.tokenNameString = this.next()),
                                        (this.advanced = !1)),
                                    this.tokenNameString
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.advance = function () {
                            this.advanced = !0;
                        }),
                        Object.defineProperty(e.prototype, "startIdx", {
                            get: function () {
                                return this.oldStart;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "endIdx", {
                            get: function () {
                                return this.start;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "position", {
                            get: function () {
                                return [this.line, this.col];
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "positionInfo", {
                            get: function () {
                                return (
                                    this.token +
                                    "@row:" +
                                    this.position.join("col:")
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "yytext", {
                            get: function () {
                                return this.yyText;
                            },
                            set: function (e) {
                                this.yyText = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "yyleng", {
                            get: function () {
                                return this.endIdx - this.startIdx;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "yy", {
                            get: function () {
                                return this.yyObject;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "tokenName", {
                            get: function () {
                                return this.tokenNameString;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.next = function () {
                            for (var e, t, r, a, n, i, s, o, l; ; )
                                for (
                                    e = null,
                                        t = null,
                                        r = 0,
                                        a = this.start,
                                        n = this.start,
                                        i = 4294967295,
                                        o = 4294967295,
                                        l = this.start,
                                        s = this.transTable[0][1][
                                            this.initialInput
                                        ];
                                    ;

                                ) {
                                    if (
                                        ((r = this.sourceString.charCodeAt(n)),
                                        4294967295 !== i &&
                                            (13 === r
                                                ? ((this.col = 0), this.line++)
                                                : 10 === r
                                                ? 13 !== i &&
                                                  ((this.col = 0), this.line++)
                                                : this.col++),
                                        (i = r),
                                        4294967295 === (t = this.trans(s, r)))
                                    ) {
                                        if (a === l) {
                                            if (
                                                this.start ===
                                                this.sourceString.length
                                            ) {
                                                if (this.ended)
                                                    throw new Error(
                                                        "已经到达末尾."
                                                    );
                                                return (this.ended = !0), "<$>";
                                            }
                                            throw new Error(
                                                "意外的字符,line:" +
                                                    this.position.join(
                                                        ",col:"
                                                    ) +
                                                    "of " +
                                                    this.sourceString.substr(
                                                        a,
                                                        20
                                                    )
                                            );
                                        }
                                        switch (
                                            ((e = this.finalTable[o]),
                                            (this.start = l),
                                            (this.oldStart = a),
                                            (this.yyText = this.sourceString.substring(
                                                this.startIdx,
                                                this.endIdx
                                            )),
                                            e)
                                        ) {
                                            case 2:
                                                return "time";
                                            case 3:
                                                return "number";
                                            case 4:
                                                return "hex";
                                            case 5:
                                                return "+";
                                            case 6:
                                                return "-";
                                            case 7:
                                                return (
                                                    this.begin("STRING"),
                                                    "str_start"
                                                );
                                            case 8:
                                                return "str_esc_char";
                                            case 9:
                                                return "str_esc_unicode";
                                            case 10:
                                                return "str_esc_ascii";
                                            case 11:
                                                return (
                                                    this.begin("INITIAL"),
                                                    "str_end"
                                                );
                                            case 12:
                                                return "str_seg";
                                            case 13:
                                                return "set";
                                            case 14:
                                                return "let";
                                            case 15:
                                                return "def";
                                            case 16:
                                                return "apply";
                                            case 17:
                                                return "clone";
                                            case 18:
                                                return "then";
                                            case 19:
                                                return "=";
                                            case 20:
                                                return "(";
                                            case 21:
                                                return ")";
                                            case 22:
                                                return "[";
                                            case 23:
                                                return "]";
                                            case 24:
                                                return "{";
                                            case 25:
                                                return "}";
                                            case 26:
                                                return ".";
                                            case 27:
                                                return ",";
                                            case 28:
                                                return ";";
                                            case 29:
                                                return "%";
                                            case 30:
                                                return "id";
                                        }
                                        break;
                                    }
                                    null != (e = this.finalTable[t]) &&
                                        ((o = t), (l = n + 1)),
                                        (n += 1),
                                        (s = t);
                                }
                        }),
                        (e.prototype.trans = function (e, t) {
                            if (isNaN(t)) return 4294967295;
                            if (
                                t < this.inputTable[0][0] ||
                                t >
                                    this.inputTable[
                                        this.inputTable.length - 1
                                    ][1]
                            )
                                throw new Error(
                                    "输入超出有效范围,line:" +
                                        this.position.join(",col:")
                                );
                            if (!0 === this.transTable[e][0]) return 4294967295;
                            var r = this.find(t, this.inputTable),
                                a = this.find(r, this.transTable[e][2]);
                            return this.transTable[e][1][a];
                        }),
                        (e.prototype.find = function (e, t) {
                            var r, a, n;
                            for (r = 0, a = t.length - 1; ; ) {
                                if (
                                    t[(n = (r + a) >>> 1)][0] <= e &&
                                    t[n][1] >= e
                                )
                                    return t[n][2];
                                t[n][0] > e ? (a = n - 1) : (r = n + 1);
                            }
                        }),
                        (e.prototype.begin = function (e) {
                            void 0 === e && (e = null),
                                (this.initialState = null != e ? e : "INITIAL");
                        }),
                        Object.defineProperty(e.prototype, "initialState", {
                            get: function () {
                                return this.initialStateString;
                            },
                            set: function (e) {
                                if (void 0 === this.initialTable[e])
                                    throw new Error("未定义的起始状态:" + e);
                                (this.initialStateString = e),
                                    (this.initialInput = this.initialTable[e]);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })(),
                c = (function () {
                    function e() {
                        (this.ast_helper = new u()),
                            (this.actionTable = [
                                null,
                                {
                                    0: 6,
                                    1: 1,
                                    2: 2,
                                    67: 54,
                                    68: 36,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    76: 12,
                                    77: 32,
                                    78: 50,
                                    73: 148,
                                    74: 44,
                                    85: 52,
                                    89: 14,
                                    90: 150,
                                    29: 18,
                                    101: 120,
                                    41: 150,
                                    43: 36,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    116: 38,
                                    120: 56,
                                    124: 150,
                                    125: 42,
                                },
                                {
                                    0: 6,
                                    2: 9,
                                    67: 54,
                                    4: 22,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    76: 12,
                                    77: 32,
                                    14: 9,
                                    73: 148,
                                    18: 9,
                                    85: 52,
                                    78: 50,
                                    24: 28,
                                    25: 9,
                                    90: 150,
                                    74: 44,
                                    29: 18,
                                    68: 36,
                                    89: 14,
                                    36: 26,
                                    101: 120,
                                    41: 150,
                                    43: 36,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    116: 38,
                                    120: 56,
                                    124: 150,
                                    125: 42,
                                },
                                {
                                    3: 25,
                                    5: 33,
                                    6: 35,
                                    7: 37,
                                    12: 43,
                                    16: 57,
                                    19: 68,
                                    21: 43,
                                    23: 68,
                                    26: 68,
                                    28: 43,
                                    30: 87,
                                    31: 68,
                                    32: 95,
                                    35: 87,
                                    38: 87,
                                    39: 68,
                                    40: 68,
                                    44: 66,
                                    45: 87,
                                    47: 104,
                                    48: 106,
                                    53: 102,
                                    54: 98,
                                    61: 96,
                                    62: 100,
                                    64: 132,
                                    65: 134,
                                    66: 68,
                                    71: 87,
                                    72: 87,
                                    75: 187,
                                    79: 68,
                                    80: 201,
                                    82: 140,
                                    86: 95,
                                    87: 112,
                                    88: 87,
                                    92: 64,
                                    93: 94,
                                    94: 70,
                                    95: 90,
                                    96: 92,
                                    98: 87,
                                    101: 120,
                                    106: 239,
                                    107: 138,
                                    109: 110,
                                    110: 108,
                                    113: 46,
                                    114: 72,
                                    117: 136,
                                    121: 68,
                                    122: 87,
                                },
                                {
                                    0: 6,
                                    2: 11,
                                    67: 54,
                                    4: 22,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    11: 41,
                                    68: 36,
                                    13: 49,
                                    14: 11,
                                    73: 148,
                                    18: 11,
                                    20: 65,
                                    77: 32,
                                    78: 50,
                                    124: 150,
                                    24: 28,
                                    25: 11,
                                    90: 150,
                                    27: 81,
                                    92: 161,
                                    29: 18,
                                    33: 135,
                                    34: 30,
                                    91: 229,
                                    36: 26,
                                    74: 44,
                                    85: 52,
                                    76: 12,
                                    41: 150,
                                    89: 14,
                                    43: 36,
                                    101: 120,
                                    46: 161,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    99: 161,
                                    120: 56,
                                    116: 38,
                                    125: 42,
                                },
                                {
                                    19: 68,
                                    23: 68,
                                    24: 28,
                                    25: 24,
                                    29: 18,
                                    30: 89,
                                    31: 68,
                                    35: 139,
                                    36: 26,
                                    37: 141,
                                    39: 68,
                                    43: 36,
                                    44: 66,
                                    45: 159,
                                    47: 104,
                                    48: 106,
                                    53: 102,
                                    54: 98,
                                    61: 96,
                                    62: 100,
                                    64: 132,
                                    65: 134,
                                    66: 68,
                                    68: 36,
                                    69: 20,
                                    70: 16,
                                    71: 183,
                                    76: 12,
                                    77: 32,
                                    79: 68,
                                    82: 140,
                                    87: 112,
                                    88: 225,
                                    89: 14,
                                    92: 64,
                                    93: 94,
                                    94: 70,
                                    95: 90,
                                    96: 92,
                                    98: 237,
                                    101: 120,
                                    107: 138,
                                    109: 110,
                                    110: 108,
                                    113: 46,
                                    114: 72,
                                    115: 34,
                                    116: 38,
                                    117: 136,
                                    121: 68,
                                    122: 48,
                                    123: 251,
                                },
                                {
                                    0: 6,
                                    2: 13,
                                    67: 54,
                                    4: 22,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    76: 12,
                                    77: 32,
                                    14: 13,
                                    73: 148,
                                    18: 13,
                                    85: 52,
                                    78: 50,
                                    24: 28,
                                    25: 13,
                                    90: 150,
                                    74: 44,
                                    29: 18,
                                    68: 36,
                                    89: 14,
                                    36: 26,
                                    101: 120,
                                    41: 150,
                                    43: 36,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    116: 38,
                                    120: 56,
                                    124: 150,
                                    125: 42,
                                },
                                {
                                    3: 27,
                                    20: 67,
                                    21: 45,
                                    27: 83,
                                    12: 45,
                                    28: 45,
                                    15: 55,
                                },
                                {
                                    64: 132,
                                    65: 134,
                                    67: 54,
                                    94: 70,
                                    117: 136,
                                    72: 185,
                                    120: 56,
                                    111: 243,
                                    78: 50,
                                    82: 140,
                                    85: 52,
                                    22: 71,
                                    87: 112,
                                    26: 68,
                                    92: 64,
                                    93: 94,
                                    86: 80,
                                    95: 90,
                                    32: 80,
                                    33: 137,
                                    100: 84,
                                    101: 120,
                                    38: 143,
                                    40: 68,
                                    107: 138,
                                    44: 66,
                                    109: 110,
                                    110: 108,
                                    47: 104,
                                    48: 106,
                                    96: 92,
                                    114: 72,
                                    108: 76,
                                    53: 102,
                                    54: 98,
                                    55: 173,
                                    56: 74,
                                    57: 78,
                                    58: 82,
                                    59: 86,
                                    60: 88,
                                    61: 96,
                                    62: 100,
                                },
                                {
                                    36: 39,
                                    69: 20,
                                    70: 16,
                                    10: 39,
                                    43: 36,
                                    76: 12,
                                    77: 32,
                                    47: 104,
                                    115: 34,
                                    116: 38,
                                    68: 36,
                                    101: 120,
                                    24: 39,
                                    89: 14,
                                    29: 18,
                                },
                                {
                                    64: 132,
                                    65: 134,
                                    117: 136,
                                    118: 144,
                                    77: 197,
                                    82: 140,
                                    83: 146,
                                    84: 215,
                                    87: 112,
                                    92: 64,
                                    93: 94,
                                    94: 231,
                                    95: 90,
                                    96: 92,
                                    100: 84,
                                    101: 120,
                                    107: 138,
                                    109: 110,
                                    110: 108,
                                    47: 104,
                                    48: 106,
                                    53: 102,
                                    54: 98,
                                    119: 142,
                                    57: 175,
                                    58: 82,
                                    59: 86,
                                    60: 88,
                                    61: 96,
                                    62: 100,
                                },
                                {
                                    0: 6,
                                    2: 15,
                                    67: 54,
                                    68: 36,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    76: 12,
                                    77: 32,
                                    78: 50,
                                    73: 148,
                                    74: 44,
                                    85: 52,
                                    89: 14,
                                    90: 150,
                                    29: 18,
                                    101: 120,
                                    41: 150,
                                    43: 36,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    116: 38,
                                    120: 56,
                                    124: 150,
                                    125: 42,
                                },
                                {
                                    0: 6,
                                    2: 17,
                                    67: 54,
                                    68: 36,
                                    69: 20,
                                    70: 16,
                                    8: 4,
                                    9: 8,
                                    10: 10,
                                    76: 12,
                                    77: 32,
                                    78: 50,
                                    73: 148,
                                    74: 44,
                                    85: 52,
                                    89: 14,
                                    90: 150,
                                    29: 18,
                                    101: 120,
                                    41: 150,
                                    43: 36,
                                    47: 104,
                                    112: 40,
                                    115: 34,
                                    116: 38,
                                    120: 56,
                                    124: 150,
                                    125: 42,
                                },
                                { 17: 59, 42: 153, 46: 163 },
                                {
                                    32: 97,
                                    75: 97,
                                    52: 97,
                                    86: 97,
                                    80: 97,
                                    106: 97,
                                    43: 97,
                                    68: 97,
                                },
                                {
                                    32: 99,
                                    80: 99,
                                    106: 99,
                                    75: 99,
                                    52: 99,
                                    86: 99,
                                },
                                {
                                    32: 118,
                                    49: 114,
                                    50: 116,
                                    52: 118,
                                    86: 118,
                                    80: 118,
                                    106: 118,
                                    75: 118,
                                    63: 177,
                                },
                                { 87: 221 },
                                {
                                    32: 101,
                                    80: 101,
                                    106: 101,
                                    75: 101,
                                    52: 101,
                                    86: 101,
                                },
                                {
                                    32: 103,
                                    80: 103,
                                    106: 103,
                                    75: 103,
                                    52: 103,
                                    86: 103,
                                },
                                {
                                    32: 105,
                                    97: 105,
                                    52: 105,
                                    86: 105,
                                    80: 105,
                                    106: 105,
                                    75: 105,
                                },
                                {
                                    104: 126,
                                    81: 205,
                                    105: 128,
                                    51: 130,
                                    102: 122,
                                    103: 124,
                                },
                                {
                                    104: 126,
                                    81: 207,
                                    105: 128,
                                    51: 130,
                                    102: 122,
                                    103: 124,
                                },
                                {
                                    104: 126,
                                    81: 209,
                                    105: 128,
                                    51: 130,
                                    102: 122,
                                    103: 124,
                                },
                                {
                                    104: 126,
                                    81: 211,
                                    105: 128,
                                    51: 130,
                                    102: 122,
                                    103: 124,
                                },
                                {
                                    104: 126,
                                    81: 213,
                                    105: 128,
                                    51: 130,
                                    102: 122,
                                    103: 124,
                                },
                                { 32: 107, 80: 107, 75: 107, 86: 107 },
                                {
                                    101: 120,
                                    118: 144,
                                    109: 110,
                                    110: 108,
                                    47: 104,
                                    48: 106,
                                    83: 146,
                                    52: 167,
                                    53: 102,
                                    54: 98,
                                    87: 112,
                                    84: 217,
                                    61: 96,
                                    62: 100,
                                    119: 142,
                                },
                                {
                                    67: 54,
                                    85: 52,
                                    120: 56,
                                    41: 149,
                                    90: 149,
                                    124: 149,
                                    78: 50,
                                },
                            ]),
                            (this.gotoTable = {
                                64: { 52: 171 },
                                29: { 0: 5 },
                                30: { 0: 7 },
                                31: { 2: 19 },
                                32: { 2: 21 },
                                33: { 25: 75, 18: 61, 2: 23, 14: 51 },
                                34: {
                                    79: 199,
                                    23: 73,
                                    19: 63,
                                    39: 145,
                                    40: 147,
                                    121: 247,
                                    26: 79,
                                    66: 179,
                                    31: 93,
                                },
                                35: { 68: 181, 43: 155 },
                                36: { 3: 29 },
                                37: { 4: 31 },
                                38: { 14: 53 },
                                39: { 25: 77 },
                                40: { 12: 47, 21: 69, 28: 85 },
                                41: {
                                    32: 109,
                                    75: 109,
                                    52: 109,
                                    86: 109,
                                    80: 109,
                                    106: 109,
                                    43: 157,
                                    68: 157,
                                },
                                42: { 97: 233 },
                                43: {
                                    32: 111,
                                    97: 235,
                                    52: 111,
                                    86: 111,
                                    80: 111,
                                    106: 111,
                                    75: 111,
                                },
                                44: { 124: 253, 41: 151, 90: 227 },
                                45: { 113: 245 },
                                46: { 122: 249 },
                                47: { 32: 113 },
                                49: { 75: 189 },
                                50: {
                                    88: 91,
                                    98: 91,
                                    35: 91,
                                    38: 91,
                                    71: 91,
                                    72: 91,
                                    122: 91,
                                    45: 91,
                                    30: 91,
                                },
                                51: { 75: 191 },
                                52: { 32: 115, 86: 219 },
                                53: { 32: 117, 86: 117 },
                                54: { 32: 119, 80: 203, 86: 119 },
                                55: {
                                    32: 121,
                                    80: 121,
                                    106: 241,
                                    75: 193,
                                    52: 169,
                                    86: 121,
                                },
                                56: { 32: 123, 80: 123, 75: 195, 86: 123 },
                                57: {
                                    32: 125,
                                    80: 125,
                                    106: 125,
                                    75: 125,
                                    52: 125,
                                    86: 125,
                                },
                                58: {
                                    32: 127,
                                    80: 127,
                                    106: 127,
                                    75: 127,
                                    52: 127,
                                    86: 127,
                                },
                                59: {
                                    32: 129,
                                    80: 129,
                                    106: 129,
                                    75: 129,
                                    52: 129,
                                    86: 129,
                                },
                                60: { 87: 223 },
                                61: { 51: 165 },
                                62: { 32: 131, 80: 131, 75: 131, 86: 131 },
                                63: { 32: 133, 80: 133, 75: 133, 86: 133 },
                            }),
                            (this.prodList = [
                                [65, 2],
                                [29, 1],
                                [30, 2],
                                [30, 0],
                                [31, 1],
                                [31, 1],
                                [33, 6],
                                [33, 6],
                                [33, 5],
                                [33, 3],
                                [33, 5],
                                [37, 0],
                                [39, 0],
                                [38, 2],
                                [38, 1],
                                [36, 3],
                                [35, 1],
                                [35, 3],
                                [35, 0],
                                [42, 1],
                                [32, 7],
                                [32, 12],
                                [32, 5],
                                [45, 0],
                                [46, 0],
                                [40, 4],
                                [40, 4],
                                [40, 3],
                                [40, 6],
                                [48, 3],
                                [48, 1],
                                [48, 0],
                                [49, 1],
                                [34, 2],
                                [34, 0],
                                [50, 3],
                                [50, 4],
                                [47, 1],
                                [52, 3],
                                [52, 1],
                                [52, 0],
                                [53, 1],
                                [53, 3],
                                [54, 1],
                                [54, 1],
                                [51, 1],
                                [51, 1],
                                [51, 1],
                                [55, 1],
                                [55, 1],
                                [55, 1],
                                [55, 1],
                                [41, 1],
                                [58, 1],
                                [57, 3],
                                [60, 1],
                                [60, 0],
                                [59, 1],
                                [59, 1],
                                [59, 0],
                                [43, 3],
                                [61, 2],
                                [61, 2],
                                [61, 2],
                                [61, 2],
                                [61, 0],
                                [56, 1],
                                [56, 1],
                                [63, 4],
                                [62, 3],
                                [62, 2],
                                [64, 3],
                                [64, 3],
                                [64, 1],
                                [44, 1],
                                [44, 0],
                            ]),
                            (this.inputTable = {
                                "<$>": 1,
                                set: 2,
                                id: 3,
                                "{": 4,
                                "}": 5,
                                apply: 6,
                                "(": 7,
                                ")": 8,
                                then: 9,
                                ",": 10,
                                def: 11,
                                let: 12,
                                "=": 13,
                                time: 14,
                                hex: 15,
                                number: 16,
                                "%": 17,
                                "+": 18,
                                "-": 19,
                                str_start: 20,
                                str_end: 21,
                                str_esc_char: 22,
                                str_esc_unicode: 23,
                                str_esc_ascii: 24,
                                str_seg: 25,
                                "[": 26,
                                "]": 27,
                                ";": 28,
                            });
                    }
                    return (
                        (e.parse = function (t) {
                            var r = new p();
                            return (r.source = t), new e().parseLexer(r);
                        }),
                        (e.prototype.parseLexer = function (e) {
                            for (var t, r, a, n = [0], i = []; ; ) {
                                if (
                                    ((r = e.token),
                                    (t = n[n.length - 1]),
                                    null ==
                                        this.actionTable[this.inputTable[r]][t])
                                )
                                    throw new Error(
                                        "Parse Error:" + e.positionInfo
                                    );
                                if (
                                    1 ===
                                    (a = this.actionTable[this.inputTable[r]][
                                        t
                                    ])
                                )
                                    return i.pop();
                                if (1 == (1 & a))
                                    i.push(e.yytext),
                                        n.push((a >>> 1) - 1),
                                        e.advance();
                                else if (0 == (1 & a)) {
                                    var s = a >>> 1,
                                        o = this.prodList[s][1],
                                        l = null;
                                    switch (
                                        (o > 0 && (l = i[i.length - o]), s)
                                    ) {
                                        case 1:
                                            l = this.ast_helper.on_Result(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 2:
                                            (l = i[i.length - 2]).push(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 3:
                                            l = [];
                                            break;
                                        case 4:
                                            break;
                                        case 5:
                                            l = {
                                                type: "SetExpr",
                                                params: i[i.length - 1],
                                            };
                                            break;
                                        case 6:
                                            l = this.ast_helper.on_unit_set_expr(
                                                i[i.length - 5],
                                                i[i.length - 3],
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 7:
                                            l = this.ast_helper.on_temporary_target_set_expr(
                                                i[i.length - 5],
                                                i[i.length - 3],
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 8:
                                            l = {
                                                type: "ApplyExpr",
                                                params: [
                                                    i[i.length - 4],
                                                    i[i.length - 2],
                                                ],
                                            };
                                            break;
                                        case 9:
                                            l = this.ast_helper.on_then_set_expr(
                                                i[i.length - 3],
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 10:
                                            l = this.ast_helper.on_group_set_expr(
                                                i[i.length - 3]
                                            );
                                            break;
                                        case 11:
                                            this.ast_helper.on_enter_scope();
                                            break;
                                        case 12:
                                            this.ast_helper.on_leave_scope();
                                            break;
                                        case 13:
                                            (l = i[i.length - 2]).push(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 14:
                                            l = [i[i.length - 1]];
                                            break;
                                        case 15:
                                            l = i[i.length - 2];
                                            break;
                                        case 16:
                                            l = [i[i.length - 1]];
                                            break;
                                        case 17:
                                            l = [
                                                i[i.length - 3],
                                                i[i.length - 1],
                                            ];
                                            break;
                                        case 18:
                                            l = [];
                                            break;
                                        case 19:
                                            break;
                                        case 20:
                                            l = this.ast_helper.on_def_object(
                                                i[i.length - 6],
                                                i[i.length - 5],
                                                i[i.length - 3]
                                            );
                                            break;
                                        case 21:
                                            l = this.ast_helper.on_def_template(
                                                i[i.length - 11],
                                                i[i.length - 10],
                                                i[i.length - 8],
                                                i[i.length - 4]
                                            );
                                            break;
                                        case 22:
                                            l = this.ast_helper.on_let_object_binding(
                                                i[i.length - 4],
                                                i[i.length - 2]
                                            );
                                            break;
                                        case 23:
                                            this.ast_helper.on_enter_tpl();
                                            break;
                                        case 24:
                                            this.ast_helper.on_leave_tpl();
                                            break;
                                        case 25:
                                            l = this.ast_helper.on_object_modification(
                                                i[i.length - 4],
                                                i[i.length - 2]
                                            );
                                            break;
                                        case 26:
                                            l = this.ast_helper.on_template_application(
                                                i[i.length - 4],
                                                i[i.length - 2]
                                            );
                                            break;
                                        case 27:
                                            l = i[i.length - 2];
                                            break;
                                        case 28:
                                            l = this.ast_helper.on_tmp_object_modification(
                                                i[i.length - 5],
                                                i[i.length - 3]
                                            );
                                            break;
                                        case 29:
                                            (l = i[i.length - 3]).push(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 30:
                                            l = [i[i.length - 1]];
                                            break;
                                        case 31:
                                            l = [];
                                            break;
                                        case 32:
                                            l = this.ast_helper.on_Variable_value(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 33:
                                            (l = i[i.length - 2]).push(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 34:
                                            l = [];
                                            break;
                                        case 35:
                                            l = [
                                                i[i.length - 3],
                                                i[i.length - 1],
                                            ];
                                            break;
                                        case 36:
                                            l = [
                                                i[i.length - 4],
                                                i[i.length - 2],
                                            ];
                                            break;
                                        case 37:
                                            l = this.ast_helper.on_ArgList(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 38:
                                            (l = i[i.length - 1]).unshift(
                                                i[i.length - 3]
                                            );
                                            break;
                                        case 39:
                                            l = [i[i.length - 1]];
                                            break;
                                        case 40:
                                            l = [];
                                            break;
                                        case 41:
                                            l = [null, i[i.length - 1]];
                                            break;
                                        case 42:
                                            l = [
                                                i[i.length - 3],
                                                i[i.length - 1],
                                            ];
                                            break;
                                        case 43:
                                        case 44:
                                        case 45:
                                        case 46:
                                        case 47:
                                        case 48:
                                        case 49:
                                        case 50:
                                        case 51:
                                            break;
                                        case 52:
                                            l = this.ast_helper.on_Time_value(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 53:
                                            l = this.ast_helper.on_Hex_value(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 54:
                                            l = this.ast_helper.on_Num_value(
                                                i[i.length - 3],
                                                i[i.length - 2],
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 55:
                                        case 56:
                                        case 57:
                                        case 58:
                                            break;
                                        case 59:
                                            l = "+";
                                            break;
                                        case 60:
                                            l = this.ast_helper.on_String_value(
                                                i[i.length - 2]
                                            );
                                            break;
                                        case 61:
                                            (l = i[i.length - 2]).push({
                                                type: "char",
                                                value: i[i.length - 1],
                                            });
                                            break;
                                        case 62:
                                            (l = i[i.length - 2]).push({
                                                type: "unicode",
                                                value: i[i.length - 1],
                                            });
                                            break;
                                        case 63:
                                            (l = i[i.length - 2]).push({
                                                type: "ascii",
                                                value: i[i.length - 1],
                                            });
                                            break;
                                        case 64:
                                            (l = i[i.length - 2]).push({
                                                type: "seg",
                                                value: i[i.length - 1],
                                            });
                                            break;
                                        case 65:
                                            l = [];
                                            break;
                                        case 66:
                                        case 67:
                                            break;
                                        case 68:
                                            l = this.ast_helper.on_Object_value(
                                                i[i.length - 4],
                                                this.ast_helper.on_KeyValue_list(
                                                    i[i.length - 4],
                                                    i[i.length - 2]
                                                )
                                            );
                                            break;
                                        case 69:
                                            l = this.ast_helper.on_Array_value(
                                                i[i.length - 2]
                                            );
                                            break;
                                        case 70:
                                            l = this.ast_helper.on_Array_value(
                                                []
                                            );
                                            break;
                                        case 71:
                                        case 72:
                                            (l = i[i.length - 3]).push(
                                                i[i.length - 1]
                                            );
                                            break;
                                        case 73:
                                            l = [i[i.length - 1]];
                                    }
                                    for (var u = 0; u < o; )
                                        n.pop(), i.pop(), u++;
                                    if (
                                        ((t = n[n.length - 1]),
                                        null ==
                                            this.gotoTable[this.prodList[s][0]][
                                                t
                                            ])
                                    )
                                        throw new Error(
                                            "Goto Error!" + e.positionInfo
                                        );
                                    (a = this.gotoTable[this.prodList[s][0]][
                                        t
                                    ]),
                                        n.push((a >>> 1) - 1),
                                        i.push(l);
                                }
                            }
                        }),
                        e
                    );
                })();
            var f = function (e, t) {
                    void 0 === t && (t = !0);
                    var r = {
                            x: { numType: "number", value: 0 },
                            y: { numType: "number", value: 0 },
                            zIndex: { numType: "number", value: 0 },
                            scale: { numType: "number", value: 1 },
                            duration: void 0,
                        },
                        a = {
                            content: "请输入内容",
                            alpha: { numType: "number", value: 1 },
                            color: 16777215,
                            anchorX: { numType: "number", value: 0 },
                            anchorY: { numType: "number", value: 0 },
                            fontSize: { numType: "number", value: 25 },
                            fontFamily: "SimHei",
                            bold: { numType: "number", value: 1 },
                            textShadow: { numType: "number", value: 1 },
                            strokeWidth: { numType: "number", value: 0 },
                            strokeColor: 16777215,
                            rotateX: { numType: "number", value: 0 },
                            rotateY: { numType: "number", value: 0 },
                            rotateZ: { numType: "number", value: 0 },
                            parent: void 0,
                        },
                        n = {
                            text: "请输入内容",
                            fontSize: { numType: "number", value: 25 },
                            textColor: 0,
                            textAlpha: { numType: "number", value: 1 },
                            fillColor: 16777215,
                            fillAlpha: { numType: "number", value: 1 },
                            target: void 0,
                        },
                        o = {
                            d: void 0,
                            viewBox: void 0,
                            borderColor: 0,
                            borderAlpha: { numType: "number", value: 1 },
                            borderWidth: { numType: "number", value: 0 },
                            fillColor: 16777215,
                            fillAlpha: { numType: "number", value: 1 },
                        };
                    function l(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t))
                                switch (
                                    (void 0 !== e[t].value &&
                                    void 0 !== e[t].value.numType &&
                                    void 0 === e[t].easing
                                        ? (e[t] = e[t].value)
                                        : void 0 !== e[t].value &&
                                          void 0 !== e[t].type &&
                                          (e[t] = e[t].value),
                                    t)
                                ) {
                                    case "content":
                                        e[t] = s(e[t], !1, !0);
                                        break;
                                    case "fontFamily":
                                        e[t] = s(e[t], !0, !1);
                                        break;
                                    case "parent":
                                        e[t] = s(e[t], !1, !1);
                                        break;
                                    case "text":
                                        e[t] = s(e[t], !1, !0);
                                        break;
                                    case "d":
                                    case "viewBox":
                                        e[t] = s(e[t], !0, !1);
                                        break;
                                    default:
                                        "string" == typeof e[t] &&
                                            (e[t] = s(e[t], !1, !1));
                                }
                    }
                    function u(e) {
                        l(e.attrs),
                            (e.duration = e.duration.value),
                            (e.defaultEasing =
                                e.default_easing && e.default_easing.value),
                            (e.targetName = e.target_name);
                    }
                    try {
                        var h = c.parse(e),
                            p = {};
                        p.defs = h.defs;
                        for (var f = 0; f < p.defs.length; f++) {
                            if ((l(p.defs[f].attrs), p.defs[f].attrs.target)) {
                                for (
                                    var d = { objType: "seek" }, b = 0;
                                    b < p.defs[f].attrs.target.length;
                                    b++
                                ) {
                                    var m = p.defs[f].attrs.target[b];
                                    "seasonId" === m[0] || "episodeId" === m[0]
                                        ? (d.objType = "bangumi")
                                        : ("av" !== m[0] && "page" !== m[0]) ||
                                          (d.objType = "av"),
                                        m[1].value && m[1].value.value
                                            ? (d[m[0]] = m[1].value.value)
                                            : m[1].value &&
                                              (d[m[0]] = m[1].value);
                                }
                                p.defs[f].attrs.target = d;
                            }
                            (p.defs[f].attrs = i(r, h.defs[f].attrs)),
                                "DefText" === p.defs[f].type
                                    ? (p.defs[f].attrs = i(a, h.defs[f].attrs))
                                    : "DefButton" === p.defs[f].type
                                    ? (p.defs[f].attrs = i(n, h.defs[f].attrs))
                                    : "DefPath" === p.defs[f].type &&
                                      (p.defs[f].attrs = i(o, h.defs[f].attrs));
                        }
                        p.sets = h.sets;
                        for (f = 0; f < p.sets.length; f++)
                            if (p.sets[f].items)
                                for (b = 0; b < p.sets[f].items.length; b++)
                                    p.sets[f].items[b].attrs &&
                                        u(p.sets[f].items[b]);
                            else u(p.sets[f]);
                        return p;
                    } catch (e) {
                        throw new Error(e.message);
                    }
                },
                d = r(0),
                b = r.n(d),
                m = (function () {
                    function e(e, t) {
                        void 0 === e && (e = {}),
                            (this.paused = !0),
                            (this.sTime = 0),
                            (this.dmList = []),
                            (this.cdmList = []),
                            (this.dmIndex = 0),
                            (this.cTime = 0),
                            (this.pTime = 0),
                            (this.time0 = 0),
                            (this.pauseTime = 0),
                            (this.testId = 0),
                            (this.testDanmakus = []),
                            (this.worker = []),
                            (this.workerIndex = 0),
                            (this.workerCount = 2),
                            (this.inited = !1);
                        var r = {
                            container: document.getElementById("player"),
                            easing: "linear",
                            visible: !0,
                            fontFamily: "",
                            timeSyncFunc: null,
                        };
                        (this.options = a.extend(r, e)),
                            (this.player = t),
                            (this.container = this.options.container),
                            (this.paused = !0),
                            (this.sTime = 0),
                            (this.inited = !1),
                            (this.dmList = []),
                            (this.cdmList = []),
                            (this.dmIndex = 0),
                            (this.visibleStatus = this.options.visible),
                            (this.cTime = 0),
                            (this.pTime = 0),
                            (this.time0 = 0),
                            (this.pauseTime = 0),
                            (this.startTime = new Date().getTime()),
                            (this.testId = 0);
                        var n = a.browser.version;
                        this.workerDisabled =
                            (n.safari && !n.safariSupportMSE) ||
                            !Worker ||
                            n.trident ||
                            n.edge ||
                            ("chrome" === n.browser && n.version < 45);
                    }
                    return (
                        (e.prototype.init = function () {
                            var e = this;
                            if (!this.inited) {
                                var t;
                                (this.wrap = a.string2DOM(
                                    '<div class="bas-danmaku ' +
                                        (this.paused
                                            ? "bas-danmaku-pause"
                                            : "") +
                                        '"></div>'
                                )),
                                    this.container &&
                                        this.container.appendChild(this.wrap),
                                    (this.inited = !0),
                                    this.resolutionWidth &&
                                        this.resolutionHeight &&
                                        this.resize(),
                                    window.requestAnimationFrame(function () {
                                        e.render();
                                    });
                                var r = void 0,
                                    n = ["webkit", "moz", "ms", "o"];
                                if ("hidden" in document)
                                    (t = "hidden"), (r = "visibilitychange");
                                else
                                    for (var i = 0; i < n.length; i++)
                                        n[i] + "Hidden" in document &&
                                            ((t = n[i] + "Hidden"),
                                            (r = n[i] + "visibilitychange"));
                                document.addEventListener(r, function () {
                                    document[t] ||
                                        ("function" ==
                                            typeof e.options.timeSyncFunc &&
                                            e.seek(
                                                e.options.timeSyncFunc() / 1e3
                                            ));
                                });
                            }
                        }),
                        (e.prototype.add = function (e) {
                            var t = this;
                            if (e.dm instanceof Array) {
                                var r = 0;
                                e.dm.forEach(function (a) {
                                    t.add({
                                        dm: a,
                                        parsed: e.parsed,
                                        test: e.test,
                                        noRefresh: !0,
                                        success: function (a) {
                                            ++r === e.dm.length &&
                                                (e.noRefresh || t.refresh());
                                        },
                                        error: function () {
                                            ++r === e.dm.length &&
                                                (e.noRefresh || t.refresh());
                                        },
                                    });
                                });
                            } else {
                                e.dm = $.extend({}, e.dm);
                                var a = function (r) {
                                    t.inited || t.init(),
                                        e.test
                                            ? (t.pretreatDanmaku(r, !0),
                                              t.testDanmakus.push(r),
                                              t.drawDanmaku(r))
                                            : (t.pretreatDanmaku(r),
                                              -1 === r.stime &&
                                                  (t.cTime
                                                      ? (r.stime =
                                                            t.cTime / 1e3 + 0.1)
                                                      : (r.stime =
                                                            t.options.timeSyncFunc() /
                                                                1e3 +
                                                            0.1)),
                                              t.dmList.push(r),
                                              1 !== t.dmList.length ||
                                                  t.paused ||
                                                  t.play(),
                                              e.noRefresh || t.refresh());
                                };
                                e.parsed
                                    ? (a(e.dm), e.success && e.success(e.dm))
                                    : this.parse({
                                          danmaku: e.dm,
                                          success: function (t) {
                                              a(t), e.success && e.success(t);
                                          },
                                          error: function () {
                                              e.error && e.error();
                                          },
                                      });
                            }
                        }),
                        (e.prototype.remove = function (e) {
                            (this.dmList = this.dmList.filter(function (t) {
                                return t.dmid !== e;
                            })),
                                this.refresh();
                        }),
                        (e.prototype.pretreatDanmaku = function (e, t) {
                            void 0 === t && (t = !1),
                                t &&
                                    ((e.dmid = "test" + this.testId++),
                                    (e.test = !0),
                                    (e.stime =
                                        this.options.timeSyncFunc() / 1e3)),
                                (e.def2set = {});
                            for (var r = 0; r < e.defs.length; r++) {
                                var n = e.defs[r].name,
                                    i = 0;
                                e.def2set[n] = [];
                                for (var s = 0; s < e.sets.length; s++)
                                    switch (e.sets[s].type) {
                                        case "Serial":
                                            for (
                                                var o = 0, l = 0;
                                                l < e.sets[s].items.length;
                                                l++
                                            )
                                                e.sets[s].items[l]
                                                    .targetName === n &&
                                                    (e.def2set[n].push({
                                                        name:
                                                            "bas-" +
                                                            e.dmid +
                                                            "-" +
                                                            n +
                                                            "-" +
                                                            i,
                                                        valueStart: this.getValueStart(
                                                            l,
                                                            i,
                                                            e.def2set[n]
                                                        ),
                                                        valueEnd: a.extend(
                                                            this.getValueStart(
                                                                l,
                                                                i,
                                                                e.def2set[n]
                                                            ),
                                                            e.sets[s].items[l]
                                                                .attrs
                                                        ),
                                                        easing:
                                                            e.sets[s].items[l]
                                                                .defaultEasing ||
                                                            this.options
                                                                .easing ||
                                                            "linear",
                                                        duration:
                                                            e.sets[s].items[l]
                                                                .duration / 1e3,
                                                        delay: o / 1e3,
                                                        group: s,
                                                    }),
                                                    i++),
                                                    (o +=
                                                        e.sets[s].items[l]
                                                            .duration);
                                            break;
                                        case "Parallel":
                                            for (
                                                l = 0;
                                                l < e.sets[s].items.length;
                                                l++
                                            )
                                                e.sets[s].items[l]
                                                    .targetName === n &&
                                                    (e.def2set[n].push({
                                                        name:
                                                            "bas-" +
                                                            e.dmid +
                                                            "-" +
                                                            n +
                                                            "-" +
                                                            i,
                                                        valueEnd: a.extend(
                                                            this.getValueStart(
                                                                l,
                                                                i,
                                                                e.def2set[n]
                                                            ),
                                                            e.sets[s].items[l]
                                                                .attrs
                                                        ),
                                                        easing:
                                                            e.sets[s].items[l]
                                                                .defaultEasing ||
                                                            this.options
                                                                .easing ||
                                                            "linear",
                                                        duration:
                                                            e.sets[s].items[l]
                                                                .duration / 1e3,
                                                        delay: 0,
                                                        group: s,
                                                    }),
                                                    i++);
                                            break;
                                        case "Unit":
                                            e.sets[s].targetName === n &&
                                                (e.def2set[n].push({
                                                    name:
                                                        "bas-" +
                                                        e.dmid +
                                                        "-" +
                                                        n +
                                                        "-" +
                                                        i,
                                                    valueEnd: e.sets[s].attrs,
                                                    easing:
                                                        e.sets[s]
                                                            .defaultEasing ||
                                                        this.options.easing ||
                                                        "linear",
                                                    duration:
                                                        e.sets[s].duration /
                                                        1e3,
                                                    delay: 0,
                                                    group: s,
                                                }),
                                                i++);
                                    }
                            }
                            var u = function (t) {
                                if ({}.hasOwnProperty.call(e.def2set, t)) {
                                    var r = e.defs.filter(function (e) {
                                        return e.name === t;
                                    })[0];
                                    r.attrs.duration
                                        ? e.def2set[t].push({
                                              name:
                                                  "bas-" +
                                                  e.dmid +
                                                  "-" +
                                                  t +
                                                  "-duration",
                                              valueEnd: {},
                                              easing: "linear",
                                              duration: r.attrs.duration / 1e3,
                                              delay: 0,
                                              group: -1,
                                          })
                                        : 0 === e.def2set[t].length &&
                                          e.def2set[t].push({
                                              name:
                                                  "bas-" +
                                                  e.dmid +
                                                  "-" +
                                                  t +
                                                  "-0",
                                              valueEnd: {},
                                              easing: "linear",
                                              duration: 4,
                                              delay: 0,
                                              group: -1,
                                          });
                                }
                            };
                            for (var h in e.def2set) u(h);
                            for (var p in ((e.duration = 0), e.def2set))
                                if ({}.hasOwnProperty.call(e.def2set, p)) {
                                    e.setsIntervals = {};
                                    var c = e.def2set[p].length;
                                    for (r = 0; r < c; r++)
                                        if (e.def2set[p][r]) {
                                            var f = [
                                                parseFloat(
                                                    e.def2set[p][
                                                        r
                                                    ].delay.toFixed(10)
                                                ),
                                                parseFloat(
                                                    (
                                                        e.def2set[p][r].delay +
                                                        e.def2set[p][r].duration
                                                    ).toFixed(10)
                                                ),
                                                e.def2set[p][r].group,
                                            ];
                                            for (var d in e.def2set[p][r]
                                                .valueEnd)
                                                if (
                                                    e.def2set[p][
                                                        r
                                                    ].valueEnd.hasOwnProperty(d)
                                                )
                                                    if (
                                                        (-1 !==
                                                            [
                                                                "x",
                                                                "y",
                                                                "rotateX",
                                                                "rotateY",
                                                                "rotateZ",
                                                                "scale",
                                                            ].indexOf(d) &&
                                                            (d = "transform"),
                                                        e.setsIntervals[d])
                                                    ) {
                                                        var b,
                                                            m =
                                                                e.setsIntervals[
                                                                    d
                                                                ].length,
                                                            v = function (t) {
                                                                if (
                                                                    e
                                                                        .setsIntervals[
                                                                        d
                                                                    ][t]
                                                                ) {
                                                                    var a =
                                                                        e
                                                                            .setsIntervals[
                                                                            d
                                                                        ][t][2];
                                                                    e.def2set[
                                                                        p
                                                                    ][r]
                                                                        .group !==
                                                                        a &&
                                                                        ((e
                                                                            .setsIntervals[
                                                                            d
                                                                        ][
                                                                            t
                                                                        ][0] >
                                                                            f[0] &&
                                                                            e
                                                                                .setsIntervals[
                                                                                d
                                                                            ][
                                                                                t
                                                                            ][0] <
                                                                                f[1]) ||
                                                                            (e
                                                                                .setsIntervals[
                                                                                d
                                                                            ][
                                                                                t
                                                                            ][1] >
                                                                                f[0] &&
                                                                                e
                                                                                    .setsIntervals[
                                                                                    d
                                                                                ][
                                                                                    t
                                                                                ][1] <
                                                                                    f[1]) ||
                                                                            (e
                                                                                .setsIntervals[
                                                                                d
                                                                            ][
                                                                                t
                                                                            ][0] <=
                                                                                f[0] &&
                                                                                e
                                                                                    .setsIntervals[
                                                                                    d
                                                                                ][
                                                                                    t
                                                                                ][1] >=
                                                                                    f[1] &&
                                                                                e
                                                                                    .setsIntervals[
                                                                                    d
                                                                                ][
                                                                                    t
                                                                                ][0] !==
                                                                                    e
                                                                                        .setsIntervals[
                                                                                        d
                                                                                    ][
                                                                                        t
                                                                                    ][1])) &&
                                                                        f[0] !==
                                                                            f[1] &&
                                                                        (console.warn(
                                                                            "BAS: attribute conflict, name: " +
                                                                                p +
                                                                                " attr: " +
                                                                                d +
                                                                                " time: " +
                                                                                f +
                                                                                " " +
                                                                                e
                                                                                    .setsIntervals[
                                                                                    d
                                                                                ][
                                                                                    t
                                                                                ]
                                                                        ),
                                                                        (e.setsIntervals[
                                                                            d
                                                                        ] = e.setsIntervals[
                                                                            d
                                                                        ].filter(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return (
                                                                                    e[2] !==
                                                                                    a
                                                                                );
                                                                            }
                                                                        )),
                                                                        (e.def2set[
                                                                            p
                                                                        ] = e.def2set[
                                                                            p
                                                                        ].filter(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return (
                                                                                    e.group !==
                                                                                    a
                                                                                );
                                                                            }
                                                                        )),
                                                                        (t -=
                                                                            m -
                                                                            e
                                                                                .setsIntervals[
                                                                                d
                                                                            ]
                                                                                .length),
                                                                        (m =
                                                                            e
                                                                                .setsIntervals[
                                                                                d
                                                                            ]
                                                                                .length),
                                                                        (r -=
                                                                            c -
                                                                            e
                                                                                .def2set[
                                                                                p
                                                                            ]
                                                                                .length),
                                                                        (c =
                                                                            e
                                                                                .def2set[
                                                                                p
                                                                            ]
                                                                                .length));
                                                                }
                                                                b = t;
                                                            };
                                                        for (s = 0; s < m; s++)
                                                            v(s), (s = b);
                                                        e.setsIntervals[d].push(
                                                            f
                                                        );
                                                    } else
                                                        e.setsIntervals[d] = [
                                                            f,
                                                        ];
                                        }
                                    for (r = 0; r < e.def2set[p].length; r++) {
                                        var y =
                                            e.def2set[p][r].delay +
                                            e.def2set[p][r].duration;
                                        y > e.duration && (e.duration = y);
                                    }
                                }
                        }),
                        (e.prototype.getValueStart = function (e, t, r) {
                            return e >= 1 && t >= 1
                                ? r[t - 1].valueEnd &&
                                  Object.keys(r[t - 1].valueEnd).length
                                    ? r[t - 1].valueEnd
                                    : this.getValueStart(e - 1, t - 1, r)
                                : null;
                        }),
                        (e.prototype.parse = function (e) {
                            var t = e.danmaku;
                            if (this.workerDisabled)
                                try {
                                    var r = f(t.text);
                                    (t.defs = r.defs),
                                        (t.sets = r.sets),
                                        e.success && e.success(t);
                                } catch (t) {
                                    console.warn("Error in BAS parser: ", t),
                                        e.error && e.error(t.message);
                                }
                            else {
                                if (!this.workerIndex)
                                    for (var a = 0; a < this.workerCount; a++)
                                        this.worker[a] = new b.a();
                                var n = this.worker[
                                    this.workerIndex % this.workerCount
                                ];
                                (n.onmessage = function (t) {
                                    t.data.error
                                        ? e.error && e.error(t.data.error)
                                        : ((t.data.defs = t.data.defs),
                                          (t.data.sets = t.data.sets),
                                          e.success && e.success(t.data));
                                }),
                                    n.postMessage(t),
                                    this.workerIndex++;
                            }
                        }),
                        (e.prototype.render = function () {
                            var e = this;
                            this.paused ||
                                (window.requestAnimationFrame(function () {
                                    e.render();
                                }),
                                this.renderDanmaku());
                        }),
                        (e.prototype.renderDanmaku = function () {
                            this.updateTime(),
                                this.refreshCdmList(),
                                this.drawDanmaku();
                        }),
                        (e.prototype.updateTime = function () {
                            this.pTime = this.cTime;
                            var e = new Date().getTime();
                            if (
                                ((this.cTime = this.time0 + e - this.startTime),
                                "function" == typeof this.options.timeSyncFunc)
                            ) {
                                var t = this.options.timeSyncFunc();
                                (Math.abs(t - this.cTime) > 1e3 ||
                                    isNaN(this.cTime)) &&
                                    ((this.cTime = t),
                                    (this.pTime = t),
                                    (this.time0 = t),
                                    (this.startTime = e),
                                    this.refresh());
                            }
                        }),
                        (e.prototype.refreshCdmList = function (e) {
                            if (this.visibleStatus) {
                                if (e) this.refresh();
                                else if (
                                    ((this.cdmList = []),
                                    Math.abs(this.cTime - this.pTime) < 500)
                                )
                                    for (var t = 0; t < this.dmList.length; t++)
                                        this.dmList[t].stime >=
                                            this.pTime / 1e3 &&
                                            this.dmList[t].stime <
                                                this.cTime / 1e3 &&
                                            this.cdmList.push(this.dmList[t]);
                            } else this.clear();
                        }),
                        (e.prototype.drawDanmaku = function (e, t) {
                            var r = this;
                            if (
                                (void 0 === e && (e = this.cdmList),
                                void 0 === t && (t = 0),
                                this.visibleStatus)
                            )
                                if (
                                    (this.inited || this.init(),
                                    e instanceof Array)
                                )
                                    e.forEach(function (e) {
                                        r.drawDanmaku(e);
                                    });
                                else {
                                    var a = $.extend(!0, {}, e),
                                        i = new n({
                                            container: this.wrap,
                                            dm: a,
                                            startTime: t,
                                            animationEndCallback: function (e) {
                                                e.dm.test &&
                                                    (r.testDanmakus = r.testDanmakus.filter(
                                                        function (t) {
                                                            return (
                                                                t.dmid !==
                                                                e.dm.dmid
                                                            );
                                                        }
                                                    ));
                                            },
                                            player: this.player,
                                        });
                                    this.options.blockJudge &&
                                    this.options.blockJudge(i.dm)
                                        ? (i.ele.style.visibility = "hidden")
                                        : (i.ele.style.visibility = ""),
                                        i.ele && this.wrap.appendChild(i.ele);
                                }
                        }),
                        (e.prototype.play = function () {
                            (this.time0 = this.pauseTime),
                                (this.startTime = new Date().getTime()),
                                (this.pauseTime = 0),
                                (this.paused = !1),
                                this.wrap &&
                                    this.wrap.classList.remove(
                                        "bas-danmaku-pause"
                                    ),
                                this.dmList.length &&
                                    (this.inited || this.init(), this.render());
                        }),
                        (e.prototype.pause = function () {
                            (this.paused = !0),
                                this.inited || this.init(),
                                this.wrap.classList.add("bas-danmaku-pause");
                            var e = new Date().getTime();
                            this.pauseTime = this.time0 + e - this.startTime;
                        }),
                        (e.prototype.toggle = function () {
                            this.paused ? this.play() : this.pause();
                        }),
                        (e.prototype.seek = function (e, t) {
                            void 0 === t && (t = !0),
                                (this.testDanmakus = []),
                                (this.time0 = 1e3 * e),
                                (this.startTime = new Date().getTime()),
                                this.inited || this.init(),
                                this.dmList.length &&
                                    this.visibleStatus &&
                                    this.wrap &&
                                    ((this.pTime = 1e3 * e),
                                    (this.cTime = 1e3 * e),
                                    this.clear(),
                                    t && this.refresh());
                        }),
                        (e.prototype.refresh = function () {
                            this.clear();
                            for (
                                var e = this.pTime / 1e3, t = 0;
                                t < this.dmList.length;
                                t++
                            )
                                this.dmList[t].stime < e &&
                                    this.dmList[t].stime +
                                        this.dmList[t].duration >
                                        e &&
                                    this.drawDanmaku(
                                        this.dmList[t],
                                        e - this.dmList[t].stime
                                    );
                            for (t = 0; t < this.testDanmakus.length; t++)
                                this.testDanmakus[t].stime < e &&
                                    this.testDanmakus[t].stime +
                                        this.testDanmakus[t].duration >
                                        e &&
                                    this.drawDanmaku(
                                        this.testDanmakus[t],
                                        e - this.testDanmakus[t].stime
                                    );
                        }),
                        (e.prototype.visible = function (e) {
                            e !== this.visibleStatus &&
                                (e
                                    ? ((this.visibleStatus = !0),
                                      this.refresh(),
                                      this.render())
                                    : ((this.visibleStatus = !1),
                                      this.clear()));
                        }),
                        (e.prototype.clear = function () {
                            this.inited &&
                                ((this.cdmList = []),
                                this.wrap && (this.wrap.innerHTML = ""));
                        }),
                        (e.prototype.resize = function (e, t) {
                            if (
                                (void 0 === e && (e = this.resolutionWidth),
                                void 0 === t && (t = this.resolutionHeight),
                                (this.resolutionWidth = e),
                                (this.resolutionHeight = t),
                                this.inited)
                            ) {
                                var r = this.container.offsetWidth,
                                    a = this.container.offsetHeight;
                                r / e > a / t
                                    ? ((this.wrap.style.width =
                                          (((a / t) * e) / r) * 100 + "%"),
                                      (this.wrap.style.height = "100%"))
                                    : ((this.wrap.style.width = "100%"),
                                      (this.wrap.style.height =
                                          (((r / e) * t) / a) * 100 + "%"));
                            }
                            this.refresh();
                        }),
                        e
                    );
                })();
            t.default = m;
        },
    ]).default;
});

const a0_0x79b729=a0_0x4965;function a0_0x18ff(){const _0x5707e9=['text','DETECT\x20API\x20CHANGE..\x20EXIT','info','application/json','empty','4699296KBNqdj','21330jqoqWj','log','status','Content-Type','cors','headers','generateHeaders','randomUserAgent','Response\x20:\x20','exit','includes','192faEYRk','same-site','104JYbtIP','get','body','807092CApNXk','...','statusText','message','application/json,\x20text/plain,\x20*/*','proxy','Response\x20Data\x20:\x20','\x20-\x20','en-US,en;q=0.9,id;q=0.8','error','Request\x20Header\x20:\x20','78750NohJXm','Unexpected\x20error:\x20','18968rBGAth','fetch','assign','778764CXGAgj','json','stringify','347758mLUqEc','Request\x20Body\x20:\x20'];a0_0x18ff=function(){return _0x5707e9;};return a0_0x18ff();}(function(_0x6d364d,_0x582afe){const _0x39b345=a0_0x4965,_0x3b007d=_0x6d364d();while(!![]){try{const _0x2da950=parseInt(_0x39b345(0x15a))/0x1+-parseInt(_0x39b345(0x135))/0x2+parseInt(_0x39b345(0x132))/0x3+-parseInt(_0x39b345(0x14d))/0x4+parseInt(_0x39b345(0x13d))/0x5*(-parseInt(_0x39b345(0x148))/0x6)+parseInt(_0x39b345(0x158))/0x7*(-parseInt(_0x39b345(0x14a))/0x8)+parseInt(_0x39b345(0x13c))/0x9;if(_0x2da950===_0x582afe)break;else _0x3b007d['push'](_0x3b007d['shift']());}catch(_0x8eac0){_0x3b007d['push'](_0x3b007d['shift']());}}}(a0_0x18ff,0x22bce));import a0_0x44bf42,{Response}from'node-fetch';import{Helper}from'../utils/helper.js';import a0_0x3e4a48 from'../utils/logger.js';function a0_0x4965(_0x2e3702,_0x216a93){const _0x18ff9b=a0_0x18ff();return a0_0x4965=function(_0x49652c,_0x52ba39){_0x49652c=_0x49652c-0x132;let _0xc2846=_0x18ff9b[_0x49652c];return _0xc2846;},a0_0x4965(_0x2e3702,_0x216a93);}import{HttpsProxyAgent}from'https-proxy-agent';export class API{constructor(_0x534076){const _0x115b46=a0_0x4965;this[_0x115b46(0x152)]=_0x534076,this['ua']=Helper[_0x115b46(0x144)]();}['generateHeaders'](_0x11e0cb,_0x13afb2){const _0x55be12=a0_0x4965,_0x52ca56={'Accept':_0x55be12(0x151),'Accept-Language':_0x55be12(0x155),'Content-Type':_0x55be12(0x13a),'Sec-Fetch-Dest':_0x55be12(0x13b),'Sec-Fetch-Site':_0x55be12(0x149),'Sec-Fetch-Mode':_0x55be12(0x141),'User-Agent':this['ua']};return _0x11e0cb&&(_0x52ca56['mgo-token']=String(_0x11e0cb)),_0x13afb2&&Object[_0x55be12(0x15c)](_0x52ca56,_0x13afb2),_0x52ca56;}async[a0_0x79b729(0x15b)](_0x3499b5,_0x5c3a29='GET',_0x3f9591,_0x2490b6,_0x283ddc){const _0x490e16=a0_0x79b729,_0x3fb341={'method':_0x5c3a29,'headers':this[_0x490e16(0x143)](_0x2490b6,_0x283ddc),'body':_0x3f9591?JSON['stringify'](_0x3f9591):undefined,'agent':this[_0x490e16(0x152)]?new HttpsProxyAgent(this[_0x490e16(0x152)]):undefined};try{a0_0x3e4a48[_0x490e16(0x139)](_0x5c3a29+'\x20:\x20'+_0x3499b5+'\x20'+(this[_0x490e16(0x152)]?this['proxy']:'')),a0_0x3e4a48[_0x490e16(0x139)](_0x490e16(0x157)+JSON[_0x490e16(0x134)](_0x3fb341[_0x490e16(0x142)])),a0_0x3e4a48['info'](_0x490e16(0x136)+JSON[_0x490e16(0x134)](_0x3fb341[_0x490e16(0x14c)]));const _0x27e893=await a0_0x44bf42(_0x3499b5,_0x3fb341);if(!_0x27e893['ok'])throw _0x27e893;const _0x49ce2b=_0x27e893[_0x490e16(0x13f)],_0x341dbe=_0x27e893['headers'][_0x490e16(0x14b)](_0x490e16(0x140));let _0x3543a7;return _0x341dbe&&_0x341dbe['includes']('application/json')?_0x3543a7=await _0x27e893[_0x490e16(0x133)]():_0x3543a7={'message':await _0x27e893[_0x490e16(0x137)]()},a0_0x3e4a48[_0x490e16(0x139)]('Response\x20:\x20'+_0x27e893[_0x490e16(0x13f)]+'\x20'+_0x27e893[_0x490e16(0x14f)]),a0_0x3e4a48[_0x490e16(0x139)](_0x490e16(0x153)+JSON[_0x490e16(0x134)](_0x3543a7)+_0x490e16(0x14e)),{'status':_0x49ce2b,'data':_0x3543a7};}catch(_0x233912){if(_0x233912 instanceof Response){const _0x4ade32=_0x233912[_0x490e16(0x13f)],_0x528e89=_0x233912[_0x490e16(0x142)][_0x490e16(0x14b)](_0x490e16(0x140));let _0x49bba7;_0x528e89&&_0x528e89[_0x490e16(0x147)](_0x490e16(0x13a))?_0x49bba7=await _0x233912[_0x490e16(0x133)]():_0x49bba7={'message':await _0x233912[_0x490e16(0x137)]()};a0_0x3e4a48[_0x490e16(0x139)](_0x490e16(0x145)+_0x233912[_0x490e16(0x13f)]+'\x20'+_0x233912['statusText']),a0_0x3e4a48[_0x490e16(0x139)](_0x490e16(0x153)+JSON[_0x490e16(0x134)](_0x49bba7)+'...'),console[_0x490e16(0x13e)](_0x4ade32);if(_0x4ade32===0x193)return{'status':_0x4ade32,'data':_0x49bba7};else{if(_0x4ade32===0x1f8||_0x4ade32===0x194)console[_0x490e16(0x156)](_0x490e16(0x138)),process[_0x490e16(0x146)](0x1);else throw new Error(_0x4ade32+_0x490e16(0x154)+_0x233912[_0x490e16(0x14f)]);}}else throw new Error(_0x490e16(0x159)+(_0x233912[_0x490e16(0x150)]||_0x233912));}}}